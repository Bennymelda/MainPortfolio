
import { ArrowUpRight } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {

  const projects = [
    {
      title: 'TiempOS',
      category: 'Web design / Full-stack development / Automation',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1400',
      tag: 'SaaS',
      featured: true,
    },
    {
      title: 'Dobson Ranch Golf Course',
      category: 'Website / Booking experience / Local search',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800',
      tag: 'Local business',
      featured: false,
    },
    {
      title: 'Bali Hai Golf Club',
      category: 'Web design / Ecommerce',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800',
      tag: 'Local business, ecommerce',
      featured: false,
    },
    {
      title: 'ProPlaintiff.ai',
      category: 'Full-stack engineering / Integrations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tag: 'SaaS, enterprise AI',
      featured: false,
    },
    {
      title: 'Palm Beach National',
      category: 'Web design / Ecommerce',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
      tag: 'Local business, ecommerce',
      featured: false,
    },
  ];

  return (
    <section className="w-full bg-[#f3f1ec] text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-8xl mx-auto">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3 block">
              A VIEW OF THE WORK WE DO
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Selected work.
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
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[16/10] shadow-lg ">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#94B49F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center group-hover:bg-[#94B49F] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
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