import { useContext } from "react";

import { TextContext } from "@/context/TextContext";
import { ShuffleArray } from "@/helper";
import Tooltip from "./Tooltip";
import { data } from "@/data";

function Options() {
  const useTextContext = useContext(TextContext);

  const SetRandomData = () => {
    useTextContext.setTextData(
      ShuffleArray(data) || { paragraph: "", sentence: "", word: "" }
    );
  };

  return (
    <>
      {/* :D فعلا این کامپوننت منو رو غیر فعال میکنیم که اگر بعدا قرار شد امکاناتی اضافه بشه فعالش کنیم */}
      {/* <Menu /> */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
        {/* Text Type */}
        <div className="flex flex-col lg:flex-row">
          <div className="my-2 lg:my-0 lg:ml-5">
            <input
              type="radio"
              checked={useTextContext.textState === "paragraph"}
              onChange={() => useTextContext.setTextState("paragraph")}
              id="paragraph"
              name="hosting"
              value="paragraph"
              className="hidden peer"
              required
            />
            <label
              htmlFor="paragraph"
              className="flex justify-center items-center py-2 px-5 w-full text-secondary  rounded-lg border-2 border-dark cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-primary"
            >
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
              <span className="font-bold">پاراگراف</span>
            </label>
          </div>
          <div className="my-2 lg:my-0 lg:ml-5">
            <input
              type="radio"
              checked={useTextContext.textState === "sentence"}
              onChange={() => useTextContext.setTextState("sentence")}
              id="sentence"
              name="hosting"
              value="sentence"
              className="hidden peer"
              required
            />
            <label
              htmlFor="sentence"
              className="flex justify-center items-center py-2 px-5 w-full text-secondary rounded-lg border-2 border-dark cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-primary"
            >
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
              <span className="font-bold">جمله</span>
            </label>
          </div>
          <div className="my-2 lg:my-0 lg:ml-5">
            <input
              type="radio"
              checked={useTextContext.textState === "word"}
              onChange={() => useTextContext.setTextState("word")}
              id="word"
              name="hosting"
              value="word"
              className="hidden peer"
              required
            />
            <label
              htmlFor="word"
              className="flex justify-center items-center py-2 px-5 w-full text-secondary  rounded-lg border-2 border-dark cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600"
            >
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
              <span className="font-bold">کلمه</span>
            </label>
          </div>
        </div>
        {/* Random Text */}
        <button
          onClick={SetRandomData}
          className="text-secondary group bg-primary lg:bg-transparent relative py-3 mt-5 lg:mt-0 flex items-center justify-center"
        >
          <Tooltip text="متن تصادفی" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
            <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
            <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
          </svg>
          <span className="block lg:hidden mr-3 font-bold">متن تصادفی</span>
        </button>
      </div>
    </>
  );
}

export default Options;
