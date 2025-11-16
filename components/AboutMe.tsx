"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutMe() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineItems = Array.from(document.querySelectorAll('.timeline-item')) as HTMLElement[];
    const timelineSection = timelineRef.current;
    let activeItems = new Set<HTMLElement>();
    
    if (!timelineSection || timelineItems.length === 0) return;
    
    // Calculate timeline line height based on scroll position
    const updateTimelineProgress = () => {
      const timelineLine = timelineSection.querySelector('.timeline-line') as HTMLElement;
      if (!timelineLine) return;

      // Get timeline section bounds
      const sectionRect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // More responsive scroll calculation
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      
      // Start growing line when section enters viewport, finish when fully scrolled through
      let scrollProgress = 0;
      
      if (sectionTop <= windowHeight * 0.9) {
        // Calculate progress based on how much we've scrolled through the section
        const scrolledDistance = (windowHeight * 0.9) - sectionTop;
        const totalScrollDistance = sectionHeight + windowHeight * 0.4;
        scrollProgress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance));
      }
      
      // Set timeline line height based on scroll progress with faster response
      const lineHeight = scrollProgress * 100;
      timelineLine.style.height = `${lineHeight}%`;
      timelineLine.style.opacity = scrollProgress > 0.1 ? '1' : '0';

      // Handle individual timeline items
      timelineItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const isVisible = itemRect.top < windowHeight * 0.8 && itemRect.bottom > windowHeight * 0.2;
        
        if (isVisible && !activeItems.has(item)) {
          // Item entering view
          setTimeout(() => {
            item.classList.remove('animate-out');
            item.classList.add('animate-timeline-item');
            activeItems.add(item);
          }, index * 100);
        } else if (!isVisible && activeItems.has(item)) {
          // Item leaving view
          item.classList.remove('animate-timeline-item');
          item.classList.add('animate-out');
          activeItems.delete(item);
        }
      });
    };

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateTimelineProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    updateTimelineProgress();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-network relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-700/80 z-0"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          
          {/* Image and Text Side by Side */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image 
                src="/profile.png" 
                alt="Tarun Kumar Rudrabhatla" 
                width={192}
                height={192}
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-2xl shadow-gray-500/30 transition-all duration-300 hover:scale-105 hover:shadow-gray-500/50"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-300/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Text Content */}
            <p className="text-gray-400 text-lg text-justify italic flex-1">
              I am a graduate student interested in both data analytics and software development. I love working with data, discovering patterns, and developing applications that actually help people. I enjoy solving problems and learning new technologies along the way. I am always looking for opportunities to grow and apply my knowledge in real projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg text-center transition-all duration-300 hover:bg-slate-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer">
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-gray-400">Projects Created</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center transition-all duration-300 hover:bg-slate-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer">
                <h4 className="text-3xl font-bold text-white">8+</h4>
                <p className="text-gray-400">Months Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Timeline Line Container */}
            <div className="absolute left-0.5 top-0 w-0.5 h-full z-10" style={{transform: 'translateX(-50%)'}}>
              <div className="w-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 timeline-line rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-8 ml-12">Education</h3>
            <div className="space-y-8">
              <div className="timeline-item relative pl-12 group opacity-0 translate-y-8 transition-all duration-700 ease-out">
                {/* Timeline Dot */}
                <div className="absolute left-0.5 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50" style={{transform: 'translateX(-50%) scale(0)'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white">Master's in Applied Computing</h4>
                  <p className="text-gray-300 font-medium">Wilfrid Laurier University, Canada</p>
                  <p className="text-gray-400 text-sm">Sep 2024 – Dec 2025</p>
                </div>
              </div>
              
              <div className="timeline-item relative pl-12 group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
                {/* Timeline Dot */}
                <div className="absolute left-0.5 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50" style={{transform: 'translateX(-50%) scale(0)'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Technology – Computer Science</h4>
                  <p className="text-gray-300 font-medium">CMR College of Engineering and Technology, Hyderabad</p>
                  <p className="text-gray-400 text-sm">2019 – 2023</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-12 mb-8 ml-12">Work Experience</h3>
            <div className="space-y-8">
              <div className="timeline-item relative pl-12 group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-600">
                {/* Timeline Dot */}
                <div className="absolute left-0.5 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50" style={{transform: 'translateX(-50%) scale(0)'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white">Full Stack Developer, Co-op</h4>
                  <p className="text-gray-300 font-medium">Ppg</p>
                  <p className="text-gray-400 text-sm mb-2">September 2025 – Present</p>
                  <p className="text-gray-300">Developing scalable web applications using Next.js, Django, Rest Api and Postgresql. Leading frontend architecture and API design.</p>
                </div>
              </div>
              
              <div className="timeline-item relative pl-12 group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-800">
                {/* Timeline Dot */}
                <div className="absolute left-0.5 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50" style={{transform: 'translateX(-50%) scale(0)'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white">Ui/Ux Designer, Co-op</h4>
                  <p className="text-gray-300 font-medium">Wilfrid Laurier University</p>
                  <p className="text-gray-400 text-sm mb-2">Jan 2025 – April 2025</p>
                  <p className="text-gray-300">Designed and built interactive prototypes in Figma.</p>
                </div>
              </div>
              
              <div className="timeline-item relative pl-12 group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-1000">
                {/* Timeline Dot */}
                <div className="absolute left-0.5 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50" style={{transform: 'translateX(-50%) scale(0)'}}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white">Frontend Developer, Intern</h4>
                  <p className="text-gray-300 font-medium">Rajtek Solutions</p>
                  <p className="text-gray-400 text-sm mb-2">Jan 2023 – August 2023</p>
                  <p className="text-gray-300">Worked on building web applications using the React.js framework.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
