import { Outlet } from "react-router";

import "./root.css";

function toggleTheme() {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

export default function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Theme Toggle</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Toggle Theme
        </button>
        <p className="mt-4">
          Current theme:{" "}
          <span id="theme-status" className="font-semibold">
            Dark
          </span>
        </p>
      </div>
      <Outlet />
    </div>
  );
}
