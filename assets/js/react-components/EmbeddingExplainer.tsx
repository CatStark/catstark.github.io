import React, { useState } from 'react';

const EmbeddingVisualization = () => {
  const [hoveredAnimal, setHoveredAnimal] = useState(null);

  const animals = [
    {
      id: 1,
      label: "Pet Cat",
      domestic: 0.9,
      catlike: 0.9,
      embedding: [0.9, 0.9]
    },
    {
      id: 2,
      label: "Lion",
      domestic: 0.1,
      catlike: 0.9,
      embedding: [0.1, 0.9]
    },
    {
      id: 3,
      label: "Pet Dog",
      domestic: 0.95,
      catlike: 0.1,
      embedding: [0.95, 0.1]
    },
    {
      id: 4,
      label: "Wolf",
      domestic: 0.15,
      catlike: 0.1,
      embedding: [0.15, 0.1]
    },
    {
      id: 5,
      label: "Fox",
      domestic: 0.3,
      catlike: 0.3,
      embedding: [0.3, 0.3]
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Understanding Word Embeddings: Animal Classification</h2>

      <div className="relative h-96 w-full bg-white rounded-lg p-4 border border-gray-200">
        {/* Grid lines */}
        <div className="absolute left-8 bottom-8 w-4/5 h-4/5">
          <div className="w-full h-full grid grid-cols-2 grid-rows-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border border-gray-100" />
            ))}
          </div>
        </div>

        {/* Axis labels */}
        <div className="absolute left-8 bottom-8 w-4/5 flex justify-between text-sm font-medium text-gray-700">
          <span>← Wild</span>
          <span>Domestic →</span>
        </div>
        <div className="absolute left-0 top-4 h-4/5 flex flex-col justify-between items-start text-sm font-medium text-gray-700">
          <span>Cat-like</span>
          <span>Dog-like</span>
        </div>

        {/* Coordinate system */}
        <div className="absolute left-8 bottom-8 h-0.5 w-4/5 bg-gray-300" />
        <div className="absolute left-8 bottom-8 h-4/5 w-0.5 bg-gray-300" />

        {/* X-axis values */}
        <div className="absolute left-8 bottom-2 w-4/5 flex justify-between text-xs font-medium text-gray-600">
          <span>0.0</span>
          <span>0.5</span>
          <span>1.0</span>
        </div>

        {/* Y-axis values */}
        <div className="absolute left-2 bottom-8 h-4/5 flex flex-col justify-between items-center text-xs font-medium text-gray-600">
          <span>1.0</span>
          <span>0.5</span>
          <span>0.0</span>
        </div>

        {/* Light axis markers */}
        <div className="absolute left-8 bottom-8 w-4/5 h-4/5">
          <div className="absolute left-1/2 bottom-0 h-2 w-px bg-gray-300 -mb-2" />
          <div className="absolute left-0 top-1/2 h-px w-2 bg-gray-300 -ml-2" />
        </div>

        {/* Plot points */}
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${animal.domestic * 80 + 10}%`,
              top: `${(1 - animal.catlike) * 80 + 10}%`,
            }}
            onMouseEnter={() => setHoveredAnimal(animal)}
            onMouseLeave={() => setHoveredAnimal(null)}
          >
            <div className={`h-3 w-3 rounded-full mb-1 mx-auto transition-all duration-200 bg-purple-600 shadow-sm
              ${hoveredAnimal?.id === animal.id ? 'scale-150 shadow-md ring-2 ring-purple-200' : ''}`}
            />
            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{animal.label}</span>
          </div>
        ))}

        {/* Hover tooltip */}
        {hoveredAnimal && (
          <div
            className="absolute bg-white p-4 rounded-lg shadow-xl border border-gray-200 text-sm z-10"
            style={{
              left: `${hoveredAnimal.domestic * 80 + 10}%`,
              top: `${(1 - hoveredAnimal.catlike) * 80 - 10}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <p className="font-bold text-gray-900 mb-2">{hoveredAnimal.label}</p>
            <div className="bg-gray-100 p-3 rounded-md">
              <code className="font-mono text-xs text-gray-900">
                embedding = [{hoveredAnimal.embedding.map(n => n.toFixed(2)).join(", ")}]
              </code>
              <br />
              <code className="font-mono text-xs text-gray-600">
                // [domestic, cat-like]
              </code>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
        This visualization shows how words can be represented as points in a 2D space.
        Each animal&apos;s position is defined by two numbers (its embedding): how domestic/wild it is (0-1) and how cat-like/dog-like it is (0-1).
        Hover over points to see their exact embedding values.
      </p>
    </div>
  );
};

export default EmbeddingVisualization;