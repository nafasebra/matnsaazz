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
        <div className="w-[90%] bg-secondary md:w-[600px] mx-auto relative">
          <ToggleButton />
          <Hero />
          <TextProvider>
            <Header />
            <TextView />
          </TextProvider>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
