import React from "react";
import search from "../assets/navbaricons/search.png";
import settings from "../assets/navbaricons/settings.png";
import profile from "../assets/navbaricons/profile.png";
import notification from "../assets/navbaricons/notification.png";

const Navbar = () => {
  return (
    <div className="items-center w-full flex justify-between p-2">
      <div className=" text-3xl flex-shrink-0">
        <h1 class="text-[#343C6A] font-inter text-[28px] font-semibold leading-normal">
          Dashboard
        </h1>
      </div>
      <div className="flex  flex-shrink-0  ">
        <input
          type="text"
          placeholder="search for something"
          className=" px-4 py-2 border w-[255px] h-[50px] bg-[#F5F7FA] rounded-full mr-4"
        />
        <div className="border rounded-full  p-2 mr-4 flex items-center justify-center w-14 h-14">
          <button className="flex items-center justify-center w-full h-full bg-transparent">
            <img src={settings} alt="settings" className="w-6 h-6" />
          </button>
        </div>

        <div className="border rounded-full p-2 mr-4 flex items-center justify-center w-14 h-14">
          <button className="h-full w-full flex items-center justify-center">
            <img src={notification} alt="settings" className="w-6 h-6" />
          </button>
        </div>
        <div className=" rounded-full p-2 mr-4 flex items-center justify-center w-14 h-14">
          <img
            src={profile}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
