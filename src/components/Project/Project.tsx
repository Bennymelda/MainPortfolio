
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { projects } from './Project';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
interface SelectedWorkSectionProps {
  isMainProjectPage?: boolean;
}


export const SelectedWorkSection: React.FC<SelectedWorkSectionProps>  = ({
  isMainProjectPage = false,
}) => {

  
const navigate = useNavigate();

useGSAP(() => {
  const heading = new SplitText(".work-heading", {
    type: "chars",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#selected-work",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(heading.chars, {
    yPercent: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.04,
    ease: "power3.out",
  }).from(
    ".work-project",
    {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5,
      ease: "power3.out",
    },
    "-=0.4"
  );
}, []);


  return (
    <section
     id="selected-work"
       className={`w-full  text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans ${
        isMainProjectPage
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-[#f3f1ec] dark:bg-[#f3f1ec]'
      }`}
     >
      <div className="max-w-8xl mx-auto">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3 block">
              A VIEW OF THE WORK WE DO
            </span>
            <h2 
            className={`work-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${
        isMainProjectPage
          ? 'text-black dark:text-white'
          : 'text-gray-900'
      }`}
          >
              All work.
            </h2>
          </div>

          {/* Filter Pills & Explore Portfolio Link */}
          <div className="flex flex-wrap items-center gap-3">
           
            <a
              href="#portfolio"
              className="hidden xl:inline-flex items-center gap-1.5 text-base font-semibold text-gray-900  border-b border-gray-600/80 p-2   transition-colors "
            >
              <span>Explore the portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        

        {/* 2-Column Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.filter(p => !p.featured).map((project, idx) => (
            <div key={idx}
             onClick={() =>
    navigate(
      `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`
    )
  }
             className="work-project flex flex-col group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden bg-zinc-900 aspect-[16/10] shadow-lg ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md uppercase tracking-wider">
                  {project.tag}
                </div>
              </div>
              <div className="flex items-start justify-between mt-2">
                <div>
                  <h3 
                   className={`text-xl sm:text-2xl font-bold  group-hover:text-[#94B49F] transition-colors ${
        isMainProjectPage
          ? 'text-black dark:text-white'
          : 'text-gray-900'
      }`}
                  >
                    {project.title}
                  </h3>
                  <p 
                     className={`text-xs sm:text-sm mt-1${
        isMainProjectPage
          ? 'text-zinc-400 dark:text-zinc-400'
          : 'text-gray-600'
      }`}
                  >
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center group-hover:bg-[#94B49F] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 dark:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorkSection;