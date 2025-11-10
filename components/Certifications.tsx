export default function Certifications() {
  const certifications = [
    {
      name: 'SQL (Advanced)',
      issuer: 'HackerRank',
      date: '2025',
      image: '/cert-sql.jpg',
      link: 'https://www.hackerrank.com/certificates/iframe/c14346684e95'
    },
    {
      name: 'Data Analytics and Visualization',
      issuer: 'Accenture (Forage)',
      date: '2024',
      image: '/cert-accenture.jpg',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_Ci2PHfLk38PKn6c2h_1715001784521_completion_certificate.pdf'
    },
    {
      name: 'Foundations: Data, Data, Everywhere',
      issuer: 'Google (Coursera)',
      date: '2023',
      image: '/cert-google-data.jpg',
      link: 'https://www.coursera.org/account/accomplishments/verify/27Z4L5Z3TU6T'
    },
    {
      name: 'Python (Basic)',
      issuer: 'HackerRank',
      date: '2022',
      image: '/cert-python.jpg',
      link: 'https://www.hackerrank.com/certificates/iframe/66062fd7e4d0'
    },
    {
      name: 'Technical Support Fundamentals',
      issuer: 'Google (Coursera)',
      date: '2023',
      image: '/cert-technical.jpg',
      link: 'https://www.coursera.org/account/accomplishments/verify/G6GDS8E8D9WM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    },
    
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:bg-slate-800/40 hover:border-sky-400/40 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-400 mb-1">
                {cert.issuer}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {cert.date}
              </p>
              
              <a 
                href={cert.link} 
                className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
