// assets/js/react-components/ActionGuide.jsx
import React, { useState } from 'react';

const ActionGuide = () => {
  const [openSection, setOpenSection] = useState('companies');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Simple function to render SVG icons
  const renderIcon = (type) => {
    if (type === 'server') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      );
    }
    if (type === 'building') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="9" y1="2" x2="9" y2="22"></line>
          <line x1="15" y1="2" x2="15" y2="22"></line>
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      );
    }
    if (type === 'scale') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
          <line x1="12" y1="3" x2="12" y2="21"></line>
          <polyline points="6 8 12 2 18 8"></polyline>
          <polyline points="6 16 12 22 18 16"></polyline>
        </svg>
      );
    }
    if (type === 'graduation') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f59e0b' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      );
    }
    if (type === 'list') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      );
    }
    return null;
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem',
        color: '#333'
      }}>
        Taking Action on Embedding Model Bias
      </h2>

      {/* Main accordion sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* For AI Model Providers */}
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.375rem',
          overflow: 'hidden'
        }}>
          <button 
            onClick={() => toggleSection('providers')}
            style={{ 
              width: '100%', 
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {renderIcon('server')}
              <span style={{ fontWeight: '500' }}>For AI Model Providers</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={openSection === 'providers' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>
        </div>

        {/* For Companies Using Embedding Models */}
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.375rem',
          overflow: 'hidden'
        }}>
          <button 
            onClick={() => toggleSection('companies')}
            style={{ 
              width: '100%', 
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {renderIcon('building')}
              <span style={{ fontWeight: '500' }}>For Companies Using Embedding Models</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={openSection === 'companies' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>
          
          {openSection === 'companies' && (
            <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    backgroundColor: '#e0f2fe', 
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>1</div>
                  <span>Begin bias testing using methodology from this research</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    backgroundColor: '#e0f2fe', 
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>2</div>
                  <span>Document bias levels across three dimensions (d-values)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    backgroundColor: '#e0f2fe', 
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>3</div>
                  <span>Publish transparency reports</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* For Policymakers and Regulators */}
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.375rem',
          overflow: 'hidden'
        }}>
          <button 
            onClick={() => toggleSection('policymakers')}
            style={{ 
              width: '100%', 
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {renderIcon('scale')}
              <span style={{ fontWeight: '500' }}>For Policymakers and Regulators</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={openSection === 'policymakers' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>
        </div>

        {/* Research Community */}
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.375rem',
          overflow: 'hidden'
        }}>
          <button 
            onClick={() => toggleSection('research')}
            style={{ 
              width: '100%', 
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {renderIcon('graduation')}
              <span style={{ fontWeight: '500' }}>Research Community</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points={openSection === 'research' ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Getting Started Section */}
      <div style={{ 
        marginTop: '1.5rem', 
        backgroundColor: '#f0f9ff',
        border: '1px solid #e0f2fe',
        borderRadius: '0.375rem',
        padding: '1rem'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {renderIcon('list')}
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Getting Started Today</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
          {/* For Individual Practitioners */}
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: '500', marginBottom: '0.75rem' }}>For Individual Practitioners</h4>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <span>Assess your current use of embedding models</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <span>Run basic bias tests using the methodology in this paper</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <span>Document and report findings to relevant stakeholders</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>4</div>
                <span>Join or form working groups on bias mitigation</span>
              </li>
            </ul>
          </div>
          
          {/* For Organizations */}
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: '500', marginBottom: '0.75rem' }}>For Organizations</h4>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <span>Designate a responsible team/person for embedding model oversight</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <span>Begin voluntary bias auditing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <span>Create action plans for high-risk applications</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e0f2fe', 
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>4</div>
                <span>Engage with industry groups on standards development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionGuide;