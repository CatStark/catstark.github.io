// assets/js/react-components/EmbeddingExplainerWork.jsx
import React, { useState } from 'react';

const EmbeddingExplainerWork = () => {
  const [hoveredRole, setHoveredRole] = useState(null);

  const dataPoints = [
    {
      id: 1,
      label: "CEO",
      authority: 0.9,
      technical: 0.85,
      type: "role",
      embedding: [0.9, 0.85]
    },
    {
      id: 2,
      label: "Director",
      authority: 0.8,
      technical: 0.75,
      type: "role",
      embedding: [0.8, 0.75]
    },
    {
      id: 3,
      label: "Manager",
      authority: 0.7,
      technical: 0.65,
      type: "role",
      embedding: [0.7, 0.65]
    },
    {
      id: 4,
      label: "he/his",
      authority: 0.85,
      technical: 0.6,
      type: "gender",
      embedding: [0.85, 0.6]
    },
    {
      id: 5,
      label: "she/her",
      authority: 0.3,
      technical: 0.6,
      type: "gender",
      embedding: [0.3, 0.6]
    },
    {
      id: 6,
      label: "Assistant",
      authority: 0.2,
      technical: 0.4,
      type: "role",
      embedding: [0.2, 0.4]
    },
    {
      id: 7,
      label: "Support",
      authority: 0.25,
      technical: 0.35,
      type: "role",
      embedding: [0.25, 0.35]
    }
  ];

  const svgWidth = 600;
  const svgHeight = 400;
  const margin = 60;
  const plotWidth = svgWidth - (margin * 2);
  const plotHeight = svgHeight - (margin * 2);

  // Convert data coordinates to SVG coordinates
  const xScale = (value) => margin + (value * plotWidth);
  const yScale = (value) => margin + ((1 - value) * plotHeight);

  // Tooltip positioning
  const getTooltipStyle = (point) => {
    let left = xScale(point.authority);
    let top = yScale(point.technical);

    // Keep tooltip within SVG bounds
    if (point.authority > 0.7) left -= 150;
    if (point.technical > 0.7) top -= 100;

    return {
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      padding: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      width: '200px'
    };
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
        Understanding Word Embeddings: Professional roles
      </h2>

      <div style={{ position: 'relative', width: `${svgWidth}px`, height: `${svgHeight}px`, margin: '0 auto' }}>
        <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
          {/* Grid lines */}
          <line x1={margin} y1={margin} x2={margin} y2={svgHeight - margin} stroke="#e2e8f0" strokeWidth="1" />
          <line x1={margin} y1={svgHeight - margin} x2={svgWidth - margin} y2={svgHeight - margin} stroke="#e2e8f0" strokeWidth="1" />

          {/* Middle grid lines */}
          <line x1={margin} y1={margin + plotHeight/2} x2={svgWidth - margin} y2={margin + plotHeight/2} stroke="#e2e8f0" strokeDasharray="4" />
          <line x1={margin + plotWidth/2} y1={margin} x2={margin + plotWidth/2} y2={svgHeight - margin} stroke="#e2e8f0" strokeDasharray="4" />

          {/* X-axis labels */}
          <text x={margin} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">0.0</text>
          <text x={margin + plotWidth/2} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">0.5</text>
          <text x={svgWidth - margin} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">1.0</text>

          {/* X-axis title */}
          <text x={margin} y={svgHeight - margin/4} textAnchor="start" fontSize="12" fill="#334155" fontWeight="500">← Low Authority</text>
          <text x={svgWidth - margin} y={svgHeight - margin/4} textAnchor="end" fontSize="12" fill="#334155" fontWeight="500">High Authority →</text>

          {/* Y-axis labels */}
          <text x={margin/2} y={svgHeight - margin} textAnchor="middle" fontSize="12" fill="#64748b">0.0</text>
          <text x={margin/2} y={margin + plotHeight/2} textAnchor="middle" fontSize="12" fill="#64748b">0.5</text>
          <text x={margin/2} y={margin} textAnchor="middle" fontSize="12" fill="#64748b">1.0</text>

          {/* Y-axis title */}
          <text x={margin/4} y={margin} textAnchor="start" fontSize="12" fill="#334155" fontWeight="500">High Technical</text>
          <text x={margin/4} y={svgHeight - margin} textAnchor="start" fontSize="12" fill="#334155" fontWeight="500">Low Technical</text>

          {/* Data points */}
          {dataPoints.map((point) => (
            <g
              key={point.id}
              onMouseEnter={() => setHoveredRole(point)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              <circle
                cx={xScale(point.authority)}
                cy={yScale(point.technical)}
                r={5}
                fill={point.type === 'role' ? '#3b82f6' : '#ef4444'} // Blue for roles, red for gender
                style={{ cursor: 'pointer' }}
              />
              <text
                x={xScale(point.authority)}
                y={yScale(point.technical) - 10}
                textAnchor="middle"
                fontSize="12"
                fill={point.type === 'role' ? '#3b82f6' : '#ef4444'}
              >
                {point.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredRole && (
          <div style={getTooltipStyle(hoveredRole)}>
            <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{hoveredRole.label}</p>
            <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px' }}>
              <div>embedding = [{hoveredRole.authority.toFixed(2)}, {hoveredRole.technical.toFixed(2)}]</div>
              <div style={{ color: '#64748b' }}>// [authority, technical]</div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginTop: '1rem',
        padding: '0.75rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div>
          <span style={{ fontSize: '0.875rem', color: '#334155' }}>Professional Roles</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
          <span style={{ fontSize: '0.875rem', color: '#334155' }}>Gender Terms</span>
        </div>
      </div>

      {/* Description */}
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.25rem',
        border: '1px solid #dbeafe',
        fontSize: '0.875rem',
        color: '#1e40af'
      }}>
        <p>
          This visualization reveals how embedding models encode concerning gender biases in professional contexts. Notice how leadership roles cluster near male-associated terms in the high authority quadrant, while support roles align closer to female-associated terms. These are not just abstract relationships—they influence how AI systems evaluate professional capabilities.
        </p>
      </div>
    </div>
  );
};

export default EmbeddingExplainerWork;