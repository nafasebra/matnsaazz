import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextView from "./components/TextView";
import ToggleButton from "./components/ToggleButton";
import { TextProvider } from "./context/TextContext";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider initialTheme="light">
        <div className=" bg-secondary mx-auto px-4 flex justify-center items-center">
          <div className="w-[90%] md:w-[600px] relative">
            <ToggleButton />
            <Hero />
            <TextProvider>
              <Header />
              <TextView />
            </TextProvider>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
