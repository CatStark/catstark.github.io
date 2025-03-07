import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, Cell } from 'recharts';
import { Info } from 'lucide-react';

export default function BiasVisualization() {
  const [isMounted, setIsMounted] = useState(false);
  const [chartDimensions, setChartDimensions] = useState({ width: 800, height: 400 });
  const [selectedCategory, setSelectedCategory] = useState('career');

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const wrapper = document.querySelector('.chart-wrapper');
      if (wrapper) {
        setChartDimensions({
          width: Math.min(800, wrapper.clientWidth - 40),
          height: 400
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    career: [
      { model: 'Voyage-2-multi', value: 0.1030, p: 0.0059 },
      { model: 'Voyage-3', value: 0.0099, p: 0.7888 },
      { model: 'Voyage-law-2', value: 0.0891, p: 0.0153 },
      { model: 'Voyage-3-finance', value: 0.1028, p: 0.0073 },
      { model: 'Cohere-3-multi', value: 0.2146, p: 0.0000 },
      { model: 'Cohere-3-en', value: 0.2000, p: 0.0000 },
      { model: 'OpenAI-3-multi', value: 0.1672, p: 0.0000 }
    ],
    intelligence: [
      { model: 'Voyage-2-multi', value: 0.3397, p: 0.0000 },
      { model: 'Voyage-3', value: 0.3117, p: 0.0000 },
      { model: 'Voyage-law-2', value: 0.2810, p: 0.0000 },
      { model: 'Voyage-3-finance', value: 0.3545, p: 0.0000 },
      { model: 'Cohere-3-multi', value: 0.3416, p: 0.0000 },
      { model: 'Cohere-3-en', value: 0.2506, p: 0.0000 },
      { model: 'OpenAI-3-multi', value: 0.2856, p: 0.0000 }
    ],
    leadership: [
      { model: 'Voyage-2-multi', value: 0.6165, p: 0.0000 },
      { model: 'Voyage-3', value: 0.3574, p: 0.0000 },
      { model: 'Voyage-law-2', value: 0.5392, p: 0.0000 },
      { model: 'Voyage-3-finance', value: 0.3988, p: 0.0000 },
      { model: 'Cohere-3-multi', value: 0.4245, p: 0.0000 },
      { model: 'Cohere-3-en', value: 0.5408, p: 0.0000 },
      { model: 'OpenAI-3-multi', value: 0.5830, p: 0.0000 }
    ]
  };

  const getBarColor = (value) => {
    if (Math.abs(value) >= 0.8) return '#dc2626'; // red-600
    if (Math.abs(value) >= 0.5) return '#fcd34d'; // yellow-300
    if (Math.abs(value) >= 0.2) return '#3b82f6'; // blue-500
    return '#22c55e'; // green-500
  };

  const explanations = {
    career: "Career bias measures association between gender terms and career-related concepts. Positive values indicate stronger male-career associations.",
    intelligence: "Intelligence bias measures gender associations with intellectual capacity. Positive values indicate stronger male-intelligence associations.",
    leadership: "Leadership bias examines how gender terms relate to leadership qualities. Higher values show stronger male-leadership associations."
  };

  if (!isMounted) {
    return <div className="p-4 text-gray-800 bg-white rounded-lg shadow">Loading visualization...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">AI Model Bias Analysis</h1>

        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Gender Bias in AI Models</h2>
          <div className="relative group">
            <Info className="h-5 w-5 text-blue-500 cursor-help" />
            <div className="hidden group-hover:block absolute z-10 w-64 p-2 text-sm bg-gray-800 text-white rounded shadow-lg">
              Hover over bars for detailed statistics. Colors indicate bias severity.
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6">
          <div className="font-medium text-gray-800 mb-2">Understanding the Visualization</div>
          <p className="text-gray-700">{explanations[selectedCategory]}</p>
        </div>

        <div className="chart-wrapper bg-white p-6 rounded-lg border border-gray-200">
          <BarChart
            data={data[selectedCategory]}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
            width={chartDimensions.width}
            height={chartDimensions.height}
          >
            <XAxis
              type="number"
              domain={[-1, 1]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#374151' }} // text-gray-700
            />
            <YAxis
              dataKey="model"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#374151' }} // text-gray-700
            />
            <ReferenceLine x={0} stroke="#6b7280" strokeWidth={2} /> {/* gray-500 */}
            <ReferenceLine x={0.2} stroke="#22c55e" strokeDasharray="3 3" /> {/* green */}
            <ReferenceLine x={0.5} stroke="#fcd34d" strokeDasharray="3 3" /> {/* yellow */}
            <ReferenceLine x={0.8} stroke="#dc2626" strokeDasharray="3 3" /> {/* red */}
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || payload.length === 0) return null;
                const data = payload[0];
                return (
                  <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                    <p className="font-bold text-gray-800 mb-1">{data.payload.model}</p>
                    <p className="text-sm text-gray-700">Effect size (d): {data.payload.value.toFixed(4)}</p>
                    <p className="text-sm text-gray-700">p-value: {data.payload.p.toFixed(4)}</p>
                  </div>
                );
              }}
            />
            <Bar dataKey="value">
              {data[selectedCategory].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-700 font-medium">Negligible Bias (d &lt; 0.2)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-700 font-medium">Small Bias (0.2 ≤ d &lt; 0.5)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
            <span className="text-sm text-gray-700 font-medium">Medium Bias (0.5 ≤ d &lt; 0.8)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <span className="text-sm text-gray-700 font-medium">Large Bias (d ≥ 0.8)</span>
          </div>
        </div>
      </div>
    </div>
  );
}