import React from "react";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className=" bg-secondary transition-none mx-auto px-4 flex justify-center items-center">
      <div className="w-[90%] md:w-[600px] relative min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Container;
