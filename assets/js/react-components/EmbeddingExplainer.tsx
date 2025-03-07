import React, { useState } from 'react';

export default function EmbeddingExplainer() {
  const [hoveredAnimal, setHoveredAnimal] = useState(null);

  const animals = [
    { name: 'Pet Cat', embedding: [0.90, 0.90], description: '// [domestic, cat-like]' },
    { name: 'Pet Dog', embedding: [0.85, 0.10], description: '// [domestic, dog-like]' },
    { name: 'Lion', embedding: [0.35, 0.85], description: '// [wild, cat-like]' },
    { name: 'Wolf', embedding: [0.15, 0.10], description: '// [wild, dog-like]' },
    { name: 'Fox', embedding: [0.40, 0.30], description: '// [wild, mixed]' },
  ];

  // Calculate SVG coordinates (flip y-axis to match conventional graph orientation)
  const scaleValue = (val) => val * 200; // Scale 0-1 to 0-200

  const renderPoint = (animal, index) => {
    const [x, y] = animal.embedding;
    const cx = scaleValue(x);
    const cy = 200 - scaleValue(y); // Invert y-axis

    return (
      <g key={index}>
        <circle
          cx={cx}
          cy={cy}
          className="animal-point"
          onMouseEnter={() => setHoveredAnimal(animal)}
          onMouseLeave={() => setHoveredAnimal(null)}
        />
        <text x={cx} y={cy - 15} className="animal-label">{animal.name}</text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Understanding Word Embeddings: Animal Classification</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {hoveredAnimal ? (
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold mb-2">{hoveredAnimal.name}</h3>
              <p className="font-mono mb-2">embedding = [{hoveredAnimal.embedding[0].toFixed(2)}, {hoveredAnimal.embedding[1].toFixed(2)}]</p>
              <p className="text-gray-600">{hoveredAnimal.description}</p>
            </div>
          ) : (
            <div className="bg-gray-100 p-4 rounded-md">
              <p>Hover over an animal to see its embedding values.</p>
            </div>
          )}
        </div>

        <div className="md:w-2/3">
          <div className="embedding-chart">
            <svg viewBox="0 0 250 250" style={{ width: '100%', height: 'auto' }}>
              {/* Axes */}
              <line x1="25" y1="200" x2="225" y2="200" stroke="#9ca3af" strokeWidth="1" />
              <line x1="25" y1="200" x2="25" y2="0" stroke="#9ca3af" strokeWidth="1" />

              {/* Axis labels */}
              <text x="125" y="230" className="axis-label">Wild→Domestic→</text>
              <text x="10" y="100" className="axis-label" transform="rotate(-90,10,100)">Cat-like→Dog-like→</text>

              {/* Scale marks */}
              <text x="25" y="220" className="axis-label">0.0</text>
              <text x="125" y="220" className="axis-label">0.5</text>
              <text x="225" y="220" className="axis-label">1.0</text>

              <text x="5" y="200" className="axis-label">0.0</text>
              <text x="5" y="100" className="axis-label">0.5</text>
              <text x="5" y="0" className="axis-label">1.0</text>

              {/* Grid lines (light) */}
              <line x1="25" y1="100" x2="225" y2="100" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="125" y1="0" x2="125" y2="200" stroke="#e5e7eb" strokeWidth="1" />

              {/* Animal points */}
              {animals.map(renderPoint)}
            </svg>
          </div>

          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <p className="text-sm">
              This visualization shows how words can be represented as points in a 2D space. Each animal's position is
              defined by two numbers (its embedding): how domestic/wild it is (0-1) and how cat-like/dog-like it is (0-1).
              Hover over points to see their exact embedding values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}