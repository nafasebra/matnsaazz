import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextView from "./components/TextView";
import { TextProvider } from "./context/TextContext";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <div className="w-[90%] md:w-[600px] mx-auto">
        <ThemeProvider initialTheme="light">
          <Hero />
          <TextProvider>
            <Header />
            <TextView />
          </TextProvider>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
