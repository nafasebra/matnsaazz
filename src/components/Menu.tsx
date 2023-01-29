import React from "react";

function Menu() {
  return (
    <div className="block md:hidden relative group">
      <button className="flex text-dark">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul className="bg-primary shadow-box absolute top-7 right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100">
        <li className="flex items-center py-3 px-5 hover:bg-secondary select-none cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="10" y1="12" x2="20" y2="12" />
            <line x1="6" y1="18" x2="20" y2="18" />
          </svg>
          <span className="mr-3">پاراگراف</span>
        </li>
        <li className="flex items-center py-3 px-5 hover:bg-gray-200 select-none cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="10" y1="12" x2="20" y2="12" />
            <line x1="6" y1="18" x2="20" y2="18" />
          </svg>
          <span className="mr-3">جمله</span>
        </li>
        <li className="flex items-center py-3 px-5 hover:bg-gray-200 select-none cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
            <line x1="12" y1="6" x2="12" y2="18" />
            <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
          </svg>
          <span className="mr-3">کلمه</span>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
