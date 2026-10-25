
import About from './components/About/About'
import LetUsTalkSection from './components/Contact/MainContact'
import SelectedWorkSection from './components/Project/Project'
import ContactSection from './components/Sections/Contact'
import Discover from './components/Sections/Discovery/Discovery'
import { ServicesGridSection } from './components/Sections/featured'
import FooterSection from './components/Sections/Footer'
import { HeroSection } from './components/Sections/Hero'
import Navbar from './components/Sections/Nav'
import WorkingTogetherSection from './components/Sections/QA'
import AboutSection from './components/Sections/SubAbout'
import './index.css'
import {  Route, Routes} from "react-router-dom";
function App() {

return (
  <>
    <Navbar />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <ServicesGridSection />
            <SelectedWorkSection />
            <AboutSection />
            
            <WorkingTogetherSection />
            <ContactSection />
            <FooterSection />
            

            
          </>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/discovery" element={<Discover />} />
      <Route path="/contact" element={<LetUsTalkSection />} />
    </Routes>
  </>
);
}

export default App
