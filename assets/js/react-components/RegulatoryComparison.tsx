// assets/js/react-components/RegulatoryComparison.jsx
import React from 'react';

const RegulatoryComparison = () => {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '100%' }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        color: '#333'
      }}>
        Comparative Analysis of AI Regulatory Frameworks
      </h2>

      <div style={{
        backgroundColor: '#f0f9ff',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <svg style={{ width: '1.25rem', height: '1.25rem', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>
          Comparing existing frameworks with the proposed approach. Key differences highlighted in the final row.
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          backgroundColor: 'white',
          borderCollapse: 'collapse',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>Framework</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>Approach</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>Key Strengths</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>Limitations / Key Differences</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#111827', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>EU AI Act</td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>Risk-based tiered system with four levels</td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Comprehensive legal framework for AI systems</li>
                  <li style={{ marginBottom: '0.25rem' }}>Mandatory requirements for high-risk AI systems</li>
                  <li>Clear enforcement mechanisms</li>
                </ul>
              </td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Computational thresholds exclude widely-used models like embeddings</li>
                  <li style={{ marginBottom: '0.25rem' }}>Risk assessment based on applications, not foundational models</li>
                  <li>No explicit bias measurement thresholds</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#111827', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>US AI Bill of Rights</td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>Non-binding framework focused on principles</td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Flexible path on algorithmic discrimination</li>
                  <li style={{ marginBottom: '0.25rem' }}>Emphasis on transparency</li>
                  <li>Guidance on testing</li>
                </ul>
              </td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Non-binding guidelines only</li>
                  <li style={{ marginBottom: '0.25rem' }}>No specific metrics for bias</li>
                  <li>No mandatory auditing requirements</li>
                </ul>
              </td>
            </tr>
            <tr style={{ backgroundColor: '#f0f9ff' }}>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: '500', color: '#1e40af', borderRight: '1px solid #dbeafe', borderBottom: '1px solid #e5e7eb' }}>Proposed Framework</td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e40af', borderRight: '1px solid #dbeafe', borderBottom: '1px solid #e5e7eb' }}>
                Tiered audits with certification system
              </td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e40af', borderRight: '1px solid #dbeafe', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Targets foundational bias in embedding layer</li>
                  <li style={{ marginBottom: '0.25rem' }}>Quantitative thresholds (d &lt; 0.5 for Gold, d &lt; 0.7 for Silver)</li>
                  <li>Frequency tied to application risk</li>
                </ul>
              </td>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e40af', borderBottom: '1px solid #e5e7eb' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '0' }}>
                  <li style={{ marginBottom: '0.25rem' }}>Targets foundational bias in embedding layer</li>
                  <li style={{ marginBottom: '0.25rem' }}>Quantitative thresholds (d &lt; 0.5 for Gold, d &lt; 0.7 for Silver)</li>
                  <li style={{ marginBottom: '0.25rem' }}>Frequency tied to application risk (Quarterly/Semi-Annual/Annual)</li>
                  <li>Combines mandatory audits with incentive certification</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic' }}>
        <p style={{ margin: '0.25rem 0' }}>Source: European Parliament legislative resolution of 14 June 2023 on AI Act (2021/0106(COD))</p>
        <p style={{ margin: '0.25rem 0' }}>Source: Blueprint for an AI Bill of Rights, White House OSTP, October 2022</p>
      </div>
    </div>
  );
};

export default RegulatoryComparison;