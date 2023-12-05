import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import TextView from "@/components/ui/TextView";
import ToggleButton from "@/components/ui/ToggleButton";
import { TextProvider } from "@/context/TextContext";
import ThemeProvider from "@/context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
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
