import React, { useEffect, useRef } from "react";

const WebGLShader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const canvasEl = canvasRef.current;
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

      const gl =
        canvasEl.getContext("webgl") ||
        canvasEl.getContext("experimental-webgl");

      if (!gl) {
        alert("WebGL is not supported by your browser.");
        return;
      }

      let uniforms;

      function initializeShader(gl, canvasEl) {
        const vsSource = document.getElementById("vertShader").innerHTML;
        const fsSource = document.getElementById("fragShader").innerHTML;

        function createShader(gl, sourceCode, type) {
          const shader = gl.createShader(type);
          gl.shaderSource(shader, sourceCode);
          gl.compileShader(shader);

          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(
              "An error occurred compiling the shaders: " +
                gl.getShaderInfoLog(shader)
            );
            gl.deleteShader(shader);
            return null;
          }

          return shader;
        }

        const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
        const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

        function createShaderProgram(gl, vertexShader, fragmentShader) {
          const program = gl.createProgram();
          gl.attachShader(program, vertexShader);
          gl.attachShader(program, fragmentShader);
          gl.linkProgram(program);

          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(
              "Unable to initialize the shader program: " +
                gl.getProgramInfoLog(program)
            );
            return null;
          }

          return program;
        }

        const shaderProgram = createShaderProgram(
          gl,
          vertexShader,
          fragmentShader
        );
        uniforms = getUniforms(shaderProgram);

        function getUniforms(program) {
          let uniforms = [];
          let uniformCount = gl.getProgramParameter(
            program,
            gl.ACTIVE_UNIFORMS
          );
          for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
          }
          return uniforms;
        }

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        gl.useProgram(shaderProgram);

        const positionLocation = gl.getAttribLocation(
          shaderProgram,
          "a_position"
        );
        gl.enableVertexAttribArray(positionLocation);

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      }

      function resizeCanvas(gl, canvasEl) {
        canvasEl.width = window.innerWidth * devicePixelRatio;
        canvasEl.height = window.innerHeight * devicePixelRatio;
        gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
        gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      }

      function render(gl, uniforms) {
        const currentTime = performance.now();

        gl.uniform1f(uniforms.u_time, currentTime);
        gl.uniform2f(uniforms.u_pointer_position, 0, 0);
        gl.uniform1f(uniforms.u_scroll_progress, 0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(() => render(gl, uniforms));
      }

      initializeShader(gl, canvasEl);

      resizeCanvas(gl, canvasEl);

      render(gl, uniforms);

      window.addEventListener("resize", () => {
        resizeCanvas(gl, canvasEl);
        render(gl, uniforms);
      });
    });
  }, []);

  return (
    <canvas
      id="neuro"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        opacity: 0.95,
      }}
    />
  );
};

export default WebGLShader;
