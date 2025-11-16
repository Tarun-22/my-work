export default function Skills() {
  const skills = [
    { category: 'Programming Languages', items: ['Python', 'React.js', 'Next.js', 'Java', 'C'] },
    { category: 'Backend', items: ['Django', 'PostgreSQL', 'MySQL', 'REST API', 'Flask'] },
    { category: 'Tools', items: ['Github', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {skills.map((skillSet, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 w-72 hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300 mx-auto bg-transparent">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 text-center">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
