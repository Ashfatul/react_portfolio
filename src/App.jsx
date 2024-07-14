import './assets/scss/style.scss';
import AboutSection from './components/AboutSection';
import EducationExperience from './components/EducationExperience';
import HeroArea from './components/HeroArea';
import SectionTitle from './components/SectionTitle';
import TechnologySection from './components/TechnologySection';
import ThemeToggler from './components/ThemeToggler';
import ToolsSection from './components/ToolsSection';

function App() {

  return (
    <div className="container">
      <ThemeToggler />

      <HeroArea/>

      <SectionTitle title="About Me" subtitle="Brief Information About Me"/>

      <AboutSection/>

      <SectionTitle title="Technology" subtitle="Technology I Have Worked With"/>

      <TechnologySection/>

      <SectionTitle title="Tools" subtitle="Tools I Have Worked With"/>

      <ToolsSection/>

      <SectionTitle title="Education & Experience" subtitle="Education and experience through out the years"/>

      <EducationExperience/>
    </div>
  )
}

export default App
