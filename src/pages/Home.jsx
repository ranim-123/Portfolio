import ChangeThem from "../componant/ChangeThem";
import StartBackground from "@/componant/StartBackground";
import Navbar from "@/componant/Navbar";
import HomeSection from "@/componant/HomeSection";
import AboutSection from "../componant/AboutSection";
import SkillsSection from "../componant/SkillsSection";
import ProjectsSection from "../componant/projectsSection";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden  ">
        {/*theme toggle*/}
        <ChangeThem />
       

        {/*Background Effect*/}
        <StartBackground />

        {/*navbar*/}
        <Navbar />

        {/*Main Conatent*/}
        <main>
          <HomeSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection/>
        </main>

        {/*Footer*/}
      </div>
    </>
  );
}

export default Home;
