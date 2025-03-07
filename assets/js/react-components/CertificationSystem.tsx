import React from 'react'
import { ChevronDown, ChevronUp, Medal, Shield, Scale, Building } from 'lucide-react'

export default function CertificationSystem() {
  const [activeSection, setActiveSection] = React.useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    {
      title: 'Certification Body',
      icon: <Building className="w-5 h-5 text-blue-600" />,
      content: (
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Independent non-profit organization</li>
                <li>Board representing technical experts, civil rights organizations, industry, government, and academia</li>
              </ul>
            )
    },
    {
      title: 'Assessment Process',
      icon: <Scale className="w-5 h-5 text-purple-600" />,
      content: (
              <div className="text-gray-700">
                <div className="mb-4">
                  <p className="font-bold mb-2">Initial comprehensive audit:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Testing of three bias dimensions (professional competence, leadership attributes, technical ability)</li>
                    <li>Each test must meet statistical significance (p &lt; 0.01)</li>
                    <li>Cohen's d calculation for each dimension</li>
                    <li>Maximum allowed d-values: 0.5 for Gold, 0.7 for Silver</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Ongoing Monitoring:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Gold: Annual complete re-testing of all dimensions</li>
                    <li>Silver: Semi-annual complete re-testing of all dimensions</li>
                    <li>All tests using standardized prompt sets provided by certification body</li>
                  </ul>
                </div>
              </div>
            )
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Certification System: Promoting Excellence in Embedding Model Fairness
      </h2>

      {/* Certification Levels */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
          <div className="flex items-center mb-4">
            <Medal className="w-6 h-6 text-yellow-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Gold Certification</h3>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-gray-800">Quantitative Requirements:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>No bias measure exceeding d=0.5 across all three dimensions (professional competence, leadership attributes, technical ability)</li>
              <li>Average bias across dimensions &lt; 0.3</li>
              <li>Leadership attribution bias &lt; 0.4</li>
            </ul>
            <p className="font-medium text-gray-800 mt-4">Benefits:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Reduced audit frequency (annual instead of quarterly/semi-annual)</li>
              <li>Marketing rights: "Gold Certified Fair Embeddings"</li>
              <li>Eligible for government contracts</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-gray-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Silver Certification</h3>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-gray-800">Quantitative Requirements:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>No bias measure exceeding d=0.7</li>
              <li>Average bias across dimensions &lt; 0.5</li>
              <li>Improvement plan for bias &gt; 0.5</li>
            </ul>
            <p className="font-medium text-gray-800 mt-4">Benefits:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Marketing rights: "Silver Certified Fair Embeddings"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  {section.icon}
                </div>
                <span className="font-medium text-gray-800">{section.title}</span>
              </div>
              {activeSection === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {activeSection === index && (
              <div className="p-6 bg-white rounded-b-lg">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}