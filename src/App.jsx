import './assets/scss/style.scss';
import AboutSection from './components/AboutSection';
import HeroArea from './components/HeroArea';
import SectionTitle from './components/SectionTitle';
import ThemeToggler from './components/ThemeToggler';

function App() {

  return (
    <div className="container">
      <ThemeToggler />
      <HeroArea/>

      <SectionTitle title="About Me" subtitle="Brief Information about me"/>

      <AboutSection/>
    </div>
  )
}

export default App
