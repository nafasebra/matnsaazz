import React, { useContext, useState } from "react";
import { TextContext } from "../context/TextContext";
import { data } from "../data";
import { CopyText } from "../helper";


function TextView() {
  const [stateCopyText, setStateCopyText] = useState(false);
  const useTextContext = useContext(TextContext);

  return (
    <div className="mt-8">
      <div className="py-3 px-5 w-full resize-none border-2 border-gray-400 bg-white rounded-lg min-h-[150px] my-4">
        {useTextContext.textData[useTextContext.textState]}
      </div>
      <button onClick={() => CopyText(useTextContext.textData[useTextContext.textState])} className="w-full py-3 shadow-box bg-dark text-white rounded-lg hover:opacity-60">
        کپی کن!
      </button>
    </div>
  );
}

export default TextView;
