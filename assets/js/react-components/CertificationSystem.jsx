// assets/js/react-components/CertificationSystem.jsx
import React, { useState } from 'react';

const CertificationSystem = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '100%' }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#333'
      }}>
        Certification System: Promoting Excellence in Embedding Model Fairness
      </h2>

      {/* Medal icon */}
      <div style={{ marginBottom: '1rem' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M12 2v4"></path>
          <path d="M12 12v10"></path>
          <path d="M12 22c4.4 0 8-3.6 8-8"></path>
          <path d="M12 22c-4.4 0-8-3.6-8-8"></path>
        </svg>
      </div>

      {/* Certification Cards in a row */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        {/* Gold Certification */}
        <div style={{
          backgroundColor: '#fffaeb',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #fef3c7',
          flex: '1',
          minWidth: '300px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M12 2v4"></path>
              <path d="M12 12v10"></path>
            </svg>
            Gold Certification
          </h3>

          <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Quantitative Requirements:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <li style={{ marginBottom: '0.25rem' }}>No bias measure exceeding d=0.5 across all three dimensions (professional competence, leadership attributes, technical ability)</li>
            <li style={{ marginBottom: '0.25rem' }}>Average bias across dimensions &lt; 0.3</li>
            <li style={{ marginBottom: '0.25rem' }}>Leadership attribution bias &lt; 0.4</li>
          </ul>

          <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Benefits:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.25rem' }}>Reduced audit frequency (annual instead of quarterly/semi-annual)</li>
            <li style={{ marginBottom: '0.25rem' }}>Marketing rights: "Gold Certified Fair Embeddings"</li>
            <li>Eligible for government contracts</li>
          </ul>
        </div>

        {/* Silver Certification */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb',
          flex: '1',
          minWidth: '300px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M8 14h8"></path>
              <path d="M12 12v10"></path>
            </svg>
            Silver Certification
          </h3>

          <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Quantitative Requirements:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <li style={{ marginBottom: '0.25rem' }}>No bias measure exceeding d=0.7</li>
            <li style={{ marginBottom: '0.25rem' }}>Average bias across dimensions &lt; 0.5</li>
            <li style={{ marginBottom: '0.25rem' }}>Improvement plan for bias &gt; 0.5</li>
          </ul>

          <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Benefits:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Marketing rights: "Silver Certified Fair Embeddings"</li>
          </ul>
        </div>
      </div>

      {/* Expandable Sections */}
      <div style={{ marginTop: '1rem' }}>
        {/* Certification Body Section */}
        <div style={{
          marginBottom: '0.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}>
          <button
            onClick={() => toggleSection('certificationBody')}
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9fafb',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span style={{ fontWeight: '500' }}>Certification Body</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={expandedSection === 'certificationBody' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>

          {expandedSection === 'certificationBody' && (
            <div style={{ padding: '1rem', backgroundColor: 'white' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.25rem' }}>Independent non-profit organization</li>
                <li>Board representing technical experts, civil rights organizations, industry, government, and academia</li>
              </ul>
            </div>
          )}
        </div>

        {/* Assessment Process Section */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}>
          <button
            onClick={() => toggleSection('assessmentProcess')}
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9fafb',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                <path d="M16 6l4 14"></path>
                <path d="M4 6l4 14"></path>
                <path d="M20 6H4"></path>
                <path d="M15 6a4 4 0 0 0-6 0"></path>
              </svg>
              <span style={{ fontWeight: '500' }}>Assessment Process</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={expandedSection === 'assessmentProcess' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>

          {expandedSection === 'assessmentProcess' && (
            <div style={{ padding: '1rem', backgroundColor: 'white' }}>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Initial comprehensive audit:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Testing of three bias dimensions (professional competence, leadership attributes, technical ability)</li>
                  <li style={{ marginBottom: '0.25rem' }}>Each test must meet statistical significance (p &lt; 0.01)</li>
                  <li style={{ marginBottom: '0.25rem' }}>Cohen's d calculation for each dimension</li>
                  <li>Maximum allowed d-values: 0.5 for Gold, 0.7 for Silver</li>
                </ul>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Ongoing Monitoring:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Gold: Annual complete re-testing of all dimensions</li>
                  <li style={{ marginBottom: '0.25rem' }}>Silver: Semi-annual complete re-testing of all dimensions</li>
                  <li>All tests using standardized prompt sets provided by certification body</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationSystem;