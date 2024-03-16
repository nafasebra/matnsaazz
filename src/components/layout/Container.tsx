import React from "react";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto px-4 justify-center items-center w-[90%] md:w-[600px] relative min-h-screen flex flex-col">
        {children}
    </div>
  );
}

export default Container;
