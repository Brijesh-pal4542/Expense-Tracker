import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import "./App.css";
import { useState } from "react";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories";
import Report from "./pages/Report";
import Budget from "./pages/Budget";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <div
          className={`layout ${
            sidebarOpen
              ? "sidebar-open"
              : "sidebar-closed"
          }`}
        >
          <Sidebar
            open={sidebarOpen}
            setOpen={setSidebarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <main className="main-content">

            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/add-expense"
                element={<AddExpense />}
              />
              <Route
                path="/expenses"
                element={<Expenses />}
              />
              <Route
                path="/categories"
                element={<Categories />}
              />
              <Route
                path="/reports"
                element={<Report />}
              />
              <Route
                path="/budget"
                element={<Budget />}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;