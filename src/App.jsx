import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  // const [darkMode, setDarkMode] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (darkMode === null) return; // wait until loaded

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    AOS.refresh();
  }, [darkMode]);

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved === "dark") {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   const newMode = !darkMode;
  //   setDarkMode(newMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  //Toggle (clean)
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
          : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
      }
    >
      <Toaster
        toastOptions={{
          style: {
            background: darkMode
              ? "linear-gradient(to bottom right, #374151, #000000)"
              : "linear-gradient(to bottom right, #fed7aa, #ffffff)",
            color: darkMode ? "#fff" : "#000",
          },
        }}
      />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
