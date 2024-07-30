import { useEffect } from "react";
import { useRef, useState } from "react";

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
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="  myconatainer">
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
          />

          <div className=" w-full justify-between  container flex gap-4 py-2">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="border-green-600  border-4 w-full rounded-full pl-4 p-2 pt-1"
              type="text"
              name="username"
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
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        <a href="{item.site}" target="_blank">
                          {item.site}
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsvt.json"
                            colors="primary:#2e176b"
                            trigger="hover"
                          ></lord-icon>
                        </a>
                      </td>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        {item.username}
                      </td>
                      <td className=" text-[#2e176b] border border-white py-2 text-center w-32 ">
                        {item.password}
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
