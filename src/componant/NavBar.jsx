import React, { useState, useEffect } from "react";
import { cn } from "../lib/Utilites.js";

function NavBar() {
  const NewItem = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full h-20 z-40 transition-all duration-300",
        isScrolling
          ? "py-4 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">PedroTech</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop view */}
        <div className="hidden lg:flex space-x-8">
          {NewItem.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="transition-all duration-300 text-lg font-medium text-foreground/80 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className=" lg:hidden text-foreground z-[60] text-lg mr-5 font-medium ${menuOpen ? 'tetx-primary*2' : 'block'}"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile view overlay */}
        {menuOpen && (
          <div className="fixed min-h-screen min-w-screen inset-0 bg-background/80 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6">
            {NewItem.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-xl font-semibold text-foreground hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
