import React from "react";
import Options from "./Options";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <button className="text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
        </svg>
      </button>

      <Options />
    </div>
  );
}

export default Header;
