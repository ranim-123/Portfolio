import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

function HomeSection() {
  const [isScrolling, setIsScrolling] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
    setIsScrolling(window.scrollY > 0);
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <section
      className="relative min-h-screen flex items-center justify-centerflex-col px-4"
      id="home"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-delay-1">  Ranim</span>
          <span className="text-gredient opacity-0 animate-fade-delay-2"> Taieb</span>
        </h1>
        <p className=" p-6 text-lg md:text-xl text-muted-fotrground max-2-2xl opacity-0 text-gredient opacity-0 animate-fade-delay-3 m-3 ">
            I'create stellar web experiences with modern technologies.
            Specilizing in frond-end development, I build interfaces that are
            both beautiful and functional
        </p>
        <div>
            <a href="#projects" className=" cosmic-button opacity-0 animate-fade-delay-4 m-2">
                view my work
            </a>
        </div>
      </div>
      {!isScrolling && <div className="absolute bottom-8 left-1/2 right-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce an ">
        <span className="text-sm font-bold text-muted-fotrground opacity-0  mb-2 animate-fade-delay-4">Scroll </span>
        <ArrowDown className="opacity-0 animate-fade-delay-4 h-5 w-5" />
      </div>}
      
    </section>
  );
}
export default HomeSection;
