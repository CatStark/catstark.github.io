// assets/js/react-components/EmbeddingExplainer.jsx
import React, { useState } from 'react';

const EmbeddingExplainer = () => {
  const [hoveredAnimal, setHoveredAnimal] = useState(null);

  const animals = [
    { id: 'pet-cat', label: 'House Cat', x: 0.9, y: 0.9 },
    { id: 'lion', label: 'Lion', x: 0.1, y: 0.9 },
    { id: 'pet-dog', label: 'Pet Dog', x: 0.95, y: 0.1 },
    { id: 'wolf', label: 'Wolf', x: 0.15, y: 0.1 },
    { id: 'fox', label: 'Fox', x: 0.35, y: 0.35 }
  ];

  const svgWidth = 600; // Increased width
  const svgHeight = 400;
  const margin = 60;
  const plotWidth = svgWidth - (margin * 2);
  const plotHeight = svgHeight - (margin * 2);

  // Convert data coordinates to SVG coordinates
  const xScale = (value) => margin + (value * plotWidth);
  const yScale = (value) => svgHeight - margin - (value * plotHeight);

  // Tooltip positioning
  const getTooltipStyle = (animal) => {
    let left = xScale(animal.x);
    let top = yScale(animal.y);

    // Keep tooltip within SVG bounds
    if (animal.x > 0.7) left -= 150;
    if (animal.y > 0.7) top -= 100;

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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        Understanding Word Embeddings: Animal Classification
      </h2>

      <div style={{ position: 'relative', width: `${svgWidth}px`, height: `${svgHeight}px`, margin: '0 auto' }}>
        <svg width={svgWidth} height={svgHeight} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
          {/* Grid lines */}
          <line x1={margin} y1={margin} x2={margin} y2={svgHeight - margin} stroke="#cbd5e1" strokeWidth="1" />
          <line x1={margin} y1={svgHeight - margin} x2={svgWidth - margin} y2={svgHeight - margin} stroke="#cbd5e1" strokeWidth="1" />

          {/* Middle grid lines */}
          <line x1={margin} y1={svgHeight - margin - plotHeight/2} x2={svgWidth - margin} y2={svgHeight - margin - plotHeight/2} stroke="#e2e8f0" strokeDasharray="4" />
          <line x1={margin + plotWidth/2} y1={margin} x2={margin + plotWidth/2} y2={svgHeight - margin} stroke="#e2e8f0" strokeDasharray="4" />

          {/* X-axis labels */}
          <text x={margin} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">0.0</text>
          <text x={margin + plotWidth/2} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">0.5</text>
          <text x={svgWidth - margin} y={svgHeight - margin/2} textAnchor="middle" fontSize="12" fill="#64748b">1.0</text>

          {/* Updated X-axis title to match reference image */}
          <text x={margin} y={svgHeight - margin/4} textAnchor="start" fontSize="12" fill="#475569" fontWeight="500">← Wild</text>
          <text x={svgWidth - margin} y={svgHeight - margin/4} textAnchor="end" fontSize="12" fill="#475569" fontWeight="500">Domestic →</text>

          {/* Y-axis labels */}
          <text x={margin/2} y={svgHeight - margin} textAnchor="middle" fontSize="12" fill="#64748b">0.0</text>
          <text x={margin/2} y={svgHeight - margin - plotHeight/2} textAnchor="middle" fontSize="12" fill="#64748b">0.5</text>
          <text x={margin/2} y={margin} textAnchor="middle" fontSize="12" fill="#64748b">1.0</text>

          {/* Updated Y-axis title to match reference image */}
          <text x={margin/4} y={svgHeight - margin} textAnchor="start" fontSize="12" fill="#475569" fontWeight="500" transform="rotate(270, 15, 340)">Canine</text>
          <text x={margin/4} y={margin} textAnchor="start" fontSize="12" fill="#475569" fontWeight="500" transform="rotate(270, 15, 60)">Feline</text>

          {/* Animal points */}
          {animals.map((animal) => (
            <g key={animal.id}>
              <circle
                cx={xScale(animal.x)}
                cy={yScale(animal.y)}
                r={animal.id === 'fox' ? 8 : 6} // Make Fox slightly larger
                fill="#8b5cf6"
                onMouseEnter={() => setHoveredAnimal(animal)}
                onMouseLeave={() => setHoveredAnimal(null)}
                style={{ cursor: 'pointer' }}
              />
              <text
                x={xScale(animal.x)}
                y={yScale(animal.y) - 10}
                textAnchor="middle"
                fontSize="12"
                fill="#334155"
              >
                {animal.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredAnimal && (
          <div style={getTooltipStyle(hoveredAnimal)}>
            <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{hoveredAnimal.label}</p>
            <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px' }}>
              <div>embedding = [{hoveredAnimal.x.toFixed(2)}, {hoveredAnimal.y.toFixed(2)}]</div>
              <div style={{ color: '#64748b' }}>// [domestic, feline]</div>
            </div>
          </div>
        )}
      </div>

      <div style={{
        maxWidth: `${svgWidth}px`,
        margin: '1rem auto',
        padding: '1rem',
        backgroundColor: '#f0f9ff',
        border: '1px solid #e0f2fe',
        borderRadius: '4px',
        fontSize: '0.875rem',
        color: '#1e40af'
      }}>
        This visualization shows how words can be represented as points in a 2D space. Each animal's position is
        defined by two numbers (its embedding): how domestic/wild it is (0-1) and how feline/canine it is (0-1).
        Hover over points to see their exact embedding values.
      </div>
    </div>
  );
};

export default EmbeddingExplainer;