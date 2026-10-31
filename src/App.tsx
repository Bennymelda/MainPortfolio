
import About from './components/About/About';
import LetUsTalkSection from './components/Contact/MainContact';
import { SelectedWorkSection } from './components/Project/Project.tsx';
import { projects } from './components/Project/Project';
import ContactSection from './components/Sections/Contact';
import Discover from './components/Sections/Discovery/Discovery';
import { ServicesGridSection } from './components/Sections/featured';
import FooterSection from './components/Sections/Footer';
import { HeroSection } from './components/Sections/Hero';
import Navbar from './components/Sections/Nav';
import WorkingTogetherSection from './components/Sections/QA';
import ScrollToTop from './components/Sections/ScrollTop';
import AboutSection from './components/Sections/SubAbout';
import ProjectDetails from './components/Project/ProjectDetails';
import './index.css';

import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import BuiltToStandOutSection from './components/Project/MainProject.tsx';

const createSlug = (title: string) =>
  title.toLowerCase().replace(/\s+/g, '-');

function ProjectDetailsPage() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => createSlug(item.title) === projectTitle
  );

  if (!project) {
    return <p className="p-10">Project not found.</p>;
  }

  return (
    <ProjectDetails
      project={project}
      onBack={() => navigate('/#selected-work')}
    />
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
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

        <Route
          path="/projects/:projectTitle"
          element={<ProjectDetailsPage />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/discovery" element={<Discover />} />
        <Route path="/contact" element={<LetUsTalkSection />} />
        <Route path="/work" element={<BuiltToStandOutSection />} />
        
      </Routes>
    </>
  );
}

export default App;
