import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextView from "./components/TextView";
import { TextProvider } from "./context/TextContext";

function App() {
  return (
    <>
      <div className="w-[90%] md:w-[600px] mx-auto">
        <Hero />
        <TextProvider>
          <Header />
          <TextView />
        </TextProvider>
      </div>
    </>
  );
}

export default App;
