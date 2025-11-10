export default function Projects() {
  const projects = [
    {
      title: 'Geek Connekt',
      description: 'A full-stack e-commerce solution built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/project1.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/Tarun-22/mini-project'
    },
    {
      title: 'E-Commerce Website',
      description: 'A collaborative project management tool with real-time updates',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      image: '/project2.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/Tarun-22/EMarting'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/project3.jpg',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect rounded-xl overflow-hidden hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Project Image</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-sky-500/20 text-sky-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
