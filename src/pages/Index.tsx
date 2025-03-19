
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ProjectShowcase from "../components/ProjectShowcase";
import Contact from "../components/Contact";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow the preloader animation to play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      
      <main className="bg-[#141516]">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ProjectShowcase />
        <Contact />
      </main>
    </>
  );
};

export default Index;
