import { Briefcase, Code, User } from "lucide-react";
function AboutSection() {
  return (
    <section id="about" className="py-27 px-4 relative ">
      <div className="container max-w5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
          <span> About </span>
          <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-border-muted rounded-lg p-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {" "}
              Passionate web Developer & Tech Creater
            </h3>
            <p className="text-muted-foreground">
              I am a web developer with a strong background in front-end and
              back-end development.
              JavaScript, and various front-end frameworks like React and
              Angular. I am also proficient in back-end technologies such as
              Node.js, Express.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Grt In Touch
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                    I have a deep understanding of React, JavaScript,tailwind
                    
                  </p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design </h4>
                    <p className="text-muted-foreground">
                   designing and creating user interfaces for web applications.
                    
                  </p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p className="text-muted-foreground">
                    Leading and managing web development projects from start to finish.
                    
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
