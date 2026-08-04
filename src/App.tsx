import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import { usePortfolio } from "./hooks/usePortfolio";

export default function App() {
  const { profile, experience, projects, skills, education } = usePortfolio();

  return (
    <>
      <Navbar shortName={profile.shortName} />
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} education={education} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
