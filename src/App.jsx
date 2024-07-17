import './assets/scss/style.scss';
import AboutSection from './components/AboutSection';
import ColorSettings from './components/ColorSettings';
import EducationExperience from './components/EducationExperience';
import Footer from './components/Footer';
import HeroArea from './components/HeroArea';
import Projects from './components/Projects';
import SectionTitle from './components/SectionTitle';
import TechnologySection from './components/TechnologySection';
import ToolsSection from './components/ToolsSection';

function App() {

  return (
    <>
      <div className="container">
        <ColorSettings />

        <HeroArea />

        <SectionTitle title="About Me" subtitle="Brief Information About Me" />

        <AboutSection />

        <SectionTitle title="Technology" subtitle="Technology I Have Worked With" />

        <TechnologySection />

        <SectionTitle title="Tools" subtitle="Tools I Have Worked With" />

        <ToolsSection />

        <SectionTitle title="Education & Experience" subtitle="Education and experience through out the years" />

        <EducationExperience />

        <SectionTitle title="My Projects" subtitle="Projects I have worked on" />

        <Projects />

      </div>
      <Footer />
    </>
  )
}

export default App
