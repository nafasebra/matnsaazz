import React, { createContext, useState } from "react";
import { DataType } from "../data";

type IPropType = {
  children: JSX.Element[] | JSX.Element;
};

type TextType = "paragraph" | "sentence" | "word";

type ContextType = {
  textState: TextType;
  setTextState: (a: TextType) => void;
};

export const TextContext = createContext<ContextType>({
  textState: "paragraph",
  setTextState: () => {},
});

export const TextProvider = ({ children }: IPropType) => {
  const [textState, setTextState] = useState<TextType>("paragraph");

  return (
    <TextContext.Provider value={{ textState, setTextState }}>
      {children}
    </TextContext.Provider>
  );
};
