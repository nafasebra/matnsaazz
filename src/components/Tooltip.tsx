import React from "react";

type PropType = {
  text: string;
};

function Tooltip(props: PropType) {
  const { text } = props;
  return (
    <div className="hidden md:flex items-center justify-center absolute -top-5 left-[50%] -translate-x-1/2 translate-y-1 opacity-0 text-sm rounded-lg w-[100px] bg-dark text-white py-1 px-2 group-hover:-translate-y-3 group-hover:opacity-100">
      {text}
    </div>
  );
}

export default Tooltip;
