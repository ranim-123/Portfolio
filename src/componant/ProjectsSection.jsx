import { ArrowRight, ExternalLink, Github } from "lucide-react";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A Beautiful lading page app using react,tailwind ",
      image: "public/project/project-1.webp",
      tags: ["react", "tailwind", "javascript"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "A Beautiful lading page app using react,tailwind ",
      image: "public/project/project-2.webp",
      tags: ["react", "tailwind", "css"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "A Beautiful lading page app using react,tailwind ",
      image: "public/project/project-3.webp",
      tags: ["react", "tailwind"],
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-10">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Here are some of the projects Each project was carefully designed and
          built using React, Tailwind, and other related technologies.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/15 border text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-md font-semibold mb-1 pb-2">
                {" "}
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 max-w-sm">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 p-2">
                  <a className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                  <a className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="text-center mt-15  ">
          <a  className="cosmic-button w-fit flex items-center mx-auto gap-2"
          href="
          ">check My Github <ArrowRight size={16} />

          </a>
          </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
