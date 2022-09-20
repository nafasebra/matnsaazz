import React from "react";

function TextView() {
  return (
    <div className="mt-8">
      <div className="w-full resize-none border-2 border-gray-400 bg-white rounded-lg min-h-[150px] my-4"></div>
      <button className="w-full py-3 bg-dark text-white rounded-lg hover:opacity-60">
        کپی کن!
      </button>
    </div>
  );
}

export default TextView;
