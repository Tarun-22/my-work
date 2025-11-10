export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 italic text-center">
          Hi, I'm <span className="text-white">Tarun Kumar Rudrabhatla</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
          Data Analyst
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
          I create elegant solutions to complex problems. Passionate about building user-friendly 
          applications and constantly learning new technologies.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center">
            View My Work
          </a>
          <a href="#connect" className="glass-effect hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-lg border border-sky-400/50 hover:border-sky-400 text-center">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
