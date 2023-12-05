import { createContext, useState } from "react";
import { DataType, data } from "@/data";
import { ShuffleArray } from "@/helper";

type IPropType = {
  children: JSX.Element[] | JSX.Element;
};

type TextType = "paragraph" | "sentence" | "word";

type ContextType = {
  textState: TextType;
  textData: DataType | any;
  setTextState: (a: TextType) => void;
  setTextData: (d: DataType) => void;
};

export const TextContext = createContext<ContextType>({} as ContextType);

export const TextProvider = ({ children }: IPropType) => {
  const [textState, setTextState] = useState<TextType>("paragraph");
  const [textData, setTextData] = useState<DataType | any>(ShuffleArray(data));

  return (
    <TextContext.Provider
      value={{ textState, textData, setTextState, setTextData }}
    >
      {children}
    </TextContext.Provider>
  );
};
