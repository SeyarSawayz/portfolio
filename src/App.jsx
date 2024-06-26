import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/clientServices/Services";
import Work from "./components/work/Work";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { ThemeProvider } from "./context/theme";
import { TranslationProvider } from "./context/TranslationProvider";
import { Element } from "react-scroll";

const App = () => {
  const [dark, setDark] = useState(true);
  const [themeMode, setThemeMode] = useState("light");
  const [activeNav, setActiveNav] = useState("home");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <TranslationProvider>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Header
          dark={dark}
          setDark={setDark}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <div className="relative container mx-auto md:px-48 px-4 py-10 ">
          <main>
            <Home activeNav={activeNav} setActiveNav={setActiveNav} />
            <Element>
              <About />
              <Skills />
              <Services />
              <Work />
              <ContactMe />
            </Element>
          </main>
        </div>
        <Footer />
        <ToastContainer position="bottom-center" />
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default App;
