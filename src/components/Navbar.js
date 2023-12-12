import React from "react";
import logo from "../../public/images/logo.png";
import user from "../../public/images/user.png";
import cart from "../../public/images/cart.png";

const Navbar = () => {
  return (
    <div className="px-4 py-4 container bg-[grey] grid grid-flow-col items-center justify-between">
      <div className="logo-section grid grid-flow-col  items-center  gap-2 bg-[#49471f] py-2 px-4 rounded-full  hover:bg-[black] hover:cursor-pointer">
        <img width={55} height={75} src={logo} alt="Logo" />
        <div className="logoText">
          <h2 className="font-bold text-2xl text-white md:block">Herbs</h2>
          <h3 className="font-semibold text-white text-xs hidden md:block">
            "The Beauty Within You"
          </h3>
        </div>
      </div>

      <div className="navlinks-section">
        <ul className="grid grid-flow-col gap-8 hidden md:grid ">
          <li className="hover:font-semibold cursor-pointer">HOME</li>
          <li className="hover:font-semibold cursor-pointer">PRODUCTS</li>
          <li className="hover:font-semibold cursor-pointer">HOW TO USE?</li>
          <li className="hover:font-semibold cursor-pointer">BLOGS</li>
          <li className="hover:font-semibold cursor-pointer">ABOUT US</li>
          <li className="hover:font-semibold cursor-pointer">CONTACT</li>
        </ul>
      </div>
      <div className="user-section grid grid-flow-col gap-5">
        <i className="fas fa-user" />
        <i className="fas fa-cart-plus" />
      </div>
      <div className="hamburgur-menu block md:hidden">
        <i className="fas fa-bars" />
        <i className="fas fa-angle-right hidden" />
      </div>
    </div>
  );
};

export default Navbar;
