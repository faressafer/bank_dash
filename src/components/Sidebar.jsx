import React from "react";
import logo from "../assets/Logo.png"; // Corrected import
import home from "../assets/home.png";
import transfer from "../assets/transfer.png";
import user from "../assets/user.png";
import economicinvestment from "../assets/economic-investment.png";
import creditcard from "../assets/credit-card.png";
import loan from "../assets/loan.png";
import service from "../assets/service.png";
import econometrics from "../assets/econometrics.png";
import settings from "../assets/settings.png";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border w-full h-full p-4">
      {/* Logo */}
      <div className="border p-4 pl-4 pt-3 pb-2.5 m-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* Menu Items */}
      <div className="mt-10 space-between border">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={home} alt="home-icon" />
          <span>Dashboard</span>
        </NavLink>

        {/* Transactions */}
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={transfer} alt="transfer" />
          <span>Transactions</span>
        </NavLink>

        {/* Accounts */}
        <NavLink
          to="/accounts"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={user} alt="user" />
          <span>Accounts</span>
        </NavLink>

        {/* Investments */}
        <NavLink
          to="/investments"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={economicinvestment} alt="economic investment" />
          <span>Investments</span>
        </NavLink>

        {/* Credit Cards */}
        <NavLink
          to="/credit-cards"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={creditcard} alt="credit card" />
          <span>Credit Cards</span>
        </NavLink>

        {/* Loans */}
        <NavLink
          to="/loans"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={loan} alt="loan" />
          <span>Loans</span>
        </NavLink>

        {/* Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={service} alt="service" />
          <span>Services</span>
        </NavLink>

        {/* My Privileges */}
        <NavLink
          to="/privileges"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={econometrics} alt="privileges" />
          <span>My Privileges</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 bg-blue-100 text-blue-600 border rounded-md"
              : "flex items-center gap-4 pl-4 pt-3 pb-2.5 m-2 border rounded-md"
          }
        >
          <img src={settings} alt="settings" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
