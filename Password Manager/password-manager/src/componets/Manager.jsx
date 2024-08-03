import { useEffect } from "react";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
    console.log("I'm useEffect Hook");
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.svg")) {
      ref.current.src = "icons/eye.svg";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eyecross.svg";
      passwordRef.current.type = "password";
    }

    // alert("show password..");
  };

  const savePassword = () => {
    if (
      form.site.length >= 3 &&
      form.username.length >= 3 &&
      form.password.length >= 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setForm({ site: "", username: "", password: "" });
      console.log([...passwordArray]);
      toast(`Password saved!`);
    }
    toast(`Error: minimum 3 charactors write!`);
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id ", id);
    let c = confirm("Do you want really delete this ?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
    // console.log([... passwordArray]);
    toast(`Password deleted!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const editPassword = (id) => {
    console.log("Edit password with id ", id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast(`${text} is copy`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "blue",
    });
    console.log(text);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" md:myconatainer">
        <div className="logo text-4xl text-white text-center  font-bold  ">
          <span className="text-green-700 font-bold">&lt;</span>
          Pass
          <span className="text-green-700 font-bold">Man/ &gt;</span>
        </div>
        <p className="text-white text-center font-bold text-2xl">
          Your One Password Manager
        </p>
        <div className=" items-center text-[#2e176b] flex gap-3  flex-col p-4">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="border-green-600 placeholder:text-[#2d176b72]  border-4 w-full rounded-full pl-4 p-2 pt-1"
            type="text"
            name="site"
            id="site"
          />

          <div className=" w-full justify-between  container flex flex-col md:flex-row gap-4 py-2">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="border-green-600  border-4 w-full rounded-full pl-4 p-2 pt-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="border-green-600  border-4 w-full rounded-full pl-4 p-2 pt-1"
                type="text"
                name="password"
                id="password"
              />
              <span
                className="absolute right-0 top-0 p-[10px] cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} src="icons/eye.svg" alt="" />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="glow-on-hover2 border-2 border-black text-[#2e176b] flex justify-center items-center font-bold  rounded-full w-fit bg-green-500 hover:bg-green-600 px-2 py-2 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              colors="primary:#2e176b"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h1 className="text-xl font-bold text-[#2e176b] py-3">
            {passwordArray.length === 0 ? (
              <div className="font-bold text-white">No Passwords Available</div>
            ) : (
              <div className="font-bold text-white">Your Passwords</div>
            )}{" "}
          </h1>

          {passwordArray.length != 0 && (
            <table className="mb-4 table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" text-[#2e176b] border border-white py-2 cursor-pointer text-center w-32 ">
                        <a
                          href="{item.site}"
                          target="_blank"
                          className="flex justify-center items-center "
                        >
                          {item.site}
                          <lord-icon
                            title="copy"
                            style={{
                              marginTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                            onClick={() => copyText(item.site)}
                          ></lord-icon>
                        </a>
                      </td>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        <div className="flex justify-center items-center">
                          {item.username}
                          <lord-icon
                            title="copy"
                            style={{
                              marginTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                            onClick={() => copyText(item.username)}
                          ></lord-icon>
                        </div>
                      </td>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        <div className="flex justify-center items-center">
                          {item.password}
                          <lord-icon
                            title="copy"
                            style={{
                              marginTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                            onClick={() => copyText(item.password)}
                          ></lord-icon>
                        </div>
                      </td>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        <span
                          className="cursor-pointer"
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            title="Edite"
                            style={{
                              marginTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                          ></lord-icon>
                        </span>

                        <span
                          className="cursor-pointer mx-2 text-wrap"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            title="Delete"
                            style={{
                              marginTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
