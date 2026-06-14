import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaPlusCircle,
  FaReceipt,
  FaTags,
  FaChartPie,
  FaPiggyBank,
  FaMoon,
  FaSun,
  FaBars
} from "react-icons/fa";

function Sidebar({
  open,
  setOpen,
  darkMode,
  setDarkMode
}) {
  return (
    <>
      {/* Menu Button */}

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}

      <aside
        className={`sidebar ${
          open ? "open" : "closed"
        }`}
      >
        {/* Logo */}

        <div className="logo">
          <h2>
            Expense Tracker
          </h2>
        </div>

        {/* Navigation */}

        <nav>

          <ul className="nav-links">

            <li>
              <NavLink to="/">
                <FaHome />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/add-expense">
                <FaPlusCircle />
                Add Expense
              </NavLink>
            </li>

            <li>
              <NavLink to="/expenses">
                <FaReceipt />
                Expenses
              </NavLink>
            </li>

            <li>
              <NavLink to="/categories">
                <FaTags />
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink to="/reports">
                <FaChartPie />
                Reports
              </NavLink>
            </li>

            <li>
              <NavLink to="/budget">
                <FaPiggyBank />
                Budget
              </NavLink>
            </li>

          </ul>

        </nav>

        {/* Bottom Section */}

        <div className="sidebar-bottom">

          <div className="theme-toggle">

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode ? (
                <>
                  <FaSun />
                  Light Mode
                </>
              ) : (
                <>
                  <FaMoon />
                  Dark Mode
                </>
              )}
            </button>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;