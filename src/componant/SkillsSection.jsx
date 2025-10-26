import React, { useState } from "react";

function SkillsSection() {
  const skills = [
    { name: "html/css", level: 85, category: "Frontend" },
    { name: "tailwind", level: 84, category: "Frontend" },
    { name: "javascript", level: 80, category: "Frontend" },
    { name: "react", level: 79, category: "Frontend" },
    { name: "nodejs", level: 10, category: "Backend" },
    { name: "express", level: 19, category: "Backend" },
    { name: "mongodb", level: 9, category: "Backend" },
    { name: "git", level: 79, category: "Tools" },
  ];

  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Tools"];

  function filterthecategory(category) {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter((skill) => skill.category === category));
    }
  }

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-10">
          my <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => filterthecategory(category)}
              className={`px-5 py-2 rounded-full border border-primary/30 transition-all duration-300 capitalize active:scale-90 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="text-left mb-4 grid grid-cols-[1fr_auto]">
                <h3 className="font-bold text-lg capitalize">{skill.name}</h3>
                <p className="text-md">{skill.level}%</p>
              </div>

              <div className="w-full bg-secondary/50 rounded-full border overflow-hidden">
                <div
                  className="h-4 bg-primary transition-[width] duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
