import React from "react";
import { useState } from "react";
const Loginpage = () => {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const handleLoginFromSubmit = () => {
    console.log("Submitting handle form");
  };
  const handleEmailChange = (e) => {
    const em = e.target.value;
    setemail(em);
  };
  const handlepwdChange = (e) => {
    const em = e.target.value;
    setpwd(em);
  };
  //   bg-gradient-to-r from-violet-500 to-fuchsia-500
  return (
    <div
      className="container
      bg-[url(https://d31l02nbp0owar.cloudfront.net/m/s/23209/23199454/a-0850.jpg)] bg-no-repeat bg-cover
    w-full
    px-4
    h-full
    grid
    justify-center
    items-center
    "
    >
      <form
        className="border-2 border-white px-4
        py-4 grid gap-4"
        onSubmit={handleLoginFromSubmit()}
      >
        <div className="email-container grid">
          <label className="text-[white]">Email</label>
          <input
            className="bg-transparent border-2 border-black outline-0 text-[white] px-1"
            placeholder="Enter email"
            value={email}
            type="email"
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="pwd-container grid">
          <label className="text-[white]">Password</label>
          <input
            className="bg-transparent border-2 border-black outline-0 text-[white] px-1"
            placeholder="Enter email"
            value={pwd}
            type="password"
            onChange={(e) => handlepwdChange(e)}
          />
        </div>
        <p>Forget Password ?</p>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-4 rounded  md:bg-gradient-to-l"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
