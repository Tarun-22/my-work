'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="connect" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Social Connect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* GitHub Card */}
          <div className="glass-effect rounded-xl p-8 text-center hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center border border-sky-400/50">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">GitHub</h3>
            <p className="text-gray-400 mb-6">
              Check out my repositories and contributions
            </p>
            <a 
              href="https://github.com/Tarun-22" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 border border-sky-400/50 hover:border-sky-400"
            >
              Connect
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-effect rounded-xl p-8 text-center hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center border border-sky-400/50">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>
            <p className="text-gray-400 mb-6">
              Let's connect professionally
            </p>
            <a 
              href="https://www.linkedin.com/in/tarun-kumar-rudrabhatla-13b13a1b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwoL0y8VhQ5yHUMQItQZ3Zg%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 border border-sky-400/50 hover:border-sky-400"
            >
              Connect
            </a>
          </div>

          {/* Email Card */}
          <div className="glass-effect rounded-xl p-8 text-center hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center border border-sky-400/50">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <p className="text-gray-400 mb-6">
              kumartk2823@gmail.com
            </p>
            <a 
              href="mailto:kumartk2823@gmail.com" 
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 border border-sky-400/50 hover:border-sky-400"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </section>
  )
}
