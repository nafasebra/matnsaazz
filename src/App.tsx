import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import TextView from "@/components/ui/TextView";
import ToggleButton from "@/components/ui/ToggleButton";
import { TextProvider } from "@/context/TextContext";
import ThemeProvider from "@/context/ThemeContext";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <ThemeProvider>
        <Container>
          <ToggleButton />
          <Hero />
          <TextProvider>
            <Header />
            <TextView />
          </TextProvider>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
