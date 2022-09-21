import React from "react";
import { data } from "../data";

function TextView() {
  return (
    <div className="mt-8">
      <div className="py-3 px-5 w-full resize-none border-2 border-gray-400 bg-white rounded-lg min-h-[150px] my-4">
        {
          data[0].paragraph
        }
      </div>
      <button className="w-full py-3 shadow-box bg-dark text-white rounded-lg hover:opacity-60">
        کپی کن!
      </button>
    </div>
  );
}

export default TextView;
