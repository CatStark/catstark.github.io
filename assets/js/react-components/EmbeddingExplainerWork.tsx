import React, { useState } from 'react';

const ProfessionalEmbeddingVisualization = () => {
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

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Understanding Word Embeddings: Professional roles</h2>

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
          <span>← Low Authority</span>
          <span>High Authority →</span>
        </div>
        <div className="absolute left-0 top-4 h-4/5 flex flex-col justify-between items-start text-sm font-medium text-gray-700">
          <span>High Technical</span>
          <span>Low Technical</span>
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

        {/* Plot points */}
        {dataPoints.map((point) => (
          <div
            key={point.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${point.authority * 80 + 10}%`,
              top: `${(1 - point.technical) * 80 + 10}%`,
            }}
            onMouseEnter={() => setHoveredRole(point)}
            onMouseLeave={() => setHoveredRole(null)}
          >
            <div className={`h-3 w-3 rounded-full mb-1 mx-auto transition-all duration-200 shadow-sm
              ${point.type === 'gender' ? 'bg-red-500' : 'bg-blue-500'}
              ${hoveredRole?.id === point.id ? 'scale-150 ring-2 ring-opacity-50' : ''}
              ${hoveredRole?.id === point.id && point.type === 'gender' ? 'ring-red-200' : 'ring-blue-200'}`}
            />
            <span className={`text-xs font-medium whitespace-nowrap
              ${point.type === 'gender' ? 'text-red-600' : 'text-blue-600'}`}>
              {point.label}
            </span>
          </div>
        ))}

        {/* Enhanced Hover tooltip */}
        {hoveredRole && (
          <div
            className="absolute bg-white p-4 rounded-lg shadow-xl border border-gray-200 text-sm z-10"
            style={{
              left: `${hoveredRole.authority * 80 + 10}%`,
              top: `${(1 - hoveredRole.technical) * 80 - 10}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <p className="font-bold text-gray-900 mb-2">{hoveredRole.label}</p>
            <div className="bg-gray-100 p-3 rounded-md">
              <code className="font-mono text-xs text-gray-900">
                embedding = [{hoveredRole.embedding.map(n => n.toFixed(2)).join(", ")}]
              </code>
              <br />
              <code className="font-mono text-xs text-gray-600">
                // [authority, technical]
              </code>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-start gap-8 mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">Professional Roles</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">Gender Terms</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
        Notice how leadership roles cluster near male-associated terms in the high authority quadrant, while
        support roles align closer to female-associated terms. These are not just abstract relationships—they
        influence how AI systems evaluate professional capabilities.
      </p>
    </div>
  );
};

export default ProfessionalEmbeddingVisualization;