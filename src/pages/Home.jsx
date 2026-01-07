import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackgroud } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";
import { TimeLine } from "../components/TimeLineSection";

export const Home = () => {
    return (
    <div className="main-h-screnn bg-background text-foreground overflow-x-hidden"> 

        {/* Theme Toggle */}
           <ThemeToggle/> 

        {/* Bckground Effect */}
            <StarBackgroud/>
            
        {/* Navbar */}
            <Navbar/>

        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <TimeLine/>
            <SkillSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>

        {/* Footer */}
            <Footer />
     </div>
    )
};