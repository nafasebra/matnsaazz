import { useContext, useEffect, useState } from "react";
import { TextContext } from "@/context/TextContext";
import { CopyText } from "@/helper";

function TextView() {
  const [stateCopyText, setStateCopyText] = useState<boolean>(false);
  const useTextContext = useContext(TextContext);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (stateCopyText)
      timeout = setTimeout(() => setStateCopyText(false), 3000);

    return () => clearTimeout(timeout);
  }, [stateCopyText]);

  const ClickHandler = () => {
    CopyText(useTextContext.textData[useTextContext.textState]);
    setStateCopyText(true);
  };

  return (
    <div className="mt-8">
      <div className="py-3 px-5 w-full resize-none border-2 border-accent bg-primary text-primary rounded-lg min-h-[150px] my-4">
        {useTextContext.textData[useTextContext.textState]}
      </div>
      <button
        onClick={ClickHandler}
        disabled={stateCopyText}
        className={`w-full py-3 shadow-box text-white rounded-lg ${stateCopyText ? "bg-custom-green" : " bg-button hover:opacity-60"}`}
      >
        {stateCopyText ? 'متن کپی شد!' : ' متن رو کپی کن!'}
      </button>
    </div>
  );
}

export default TextView;
