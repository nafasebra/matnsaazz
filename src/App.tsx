import TextView from "@/components/ui/TextView";
import { TextProvider } from "@/context/TextContext";
import ThemeProvider from "@/context/ThemeContext";
import Layout from "./components/layout";
import Options from "./components/ui/Options";

function App() {
  return (
    <>
      <ThemeProvider>
        <TextProvider>
          <Layout>
            <Options />
            <TextView />
          </Layout>
        </TextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
