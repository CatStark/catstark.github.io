// assets/js/react-components/BiasVisualization.jsx
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, Cell } from 'recharts';

export default function BiasVisualization() {
  const [isMounted, setIsMounted] = useState(false);
  const [chartDimensions, setChartDimensions] = useState({ width: 800, height: 400 });
  const [selectedCategory, setSelectedCategory] = useState('leadership');

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const container = document.getElementById('bias-visualization-container');
      if (container) {
        setChartDimensions({
          width: Math.min(800, container.clientWidth - 40),
          height: 400
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data for different categories
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

  // Determine bar color based on bias level
  const getBarColor = (value) => {
    if (Math.abs(value) >= 0.8) return '#dc2626'; // red
    if (Math.abs(value) >= 0.5) return '#fcd34d'; // yellow
    if (Math.abs(value) >= 0.2) return '#3b82f6'; // blue
    return '#22c55e'; // green
  };

  // Category explanations
  const explanations = {
    career: "Career bias measures association between gender terms and career-related concepts. Positive values indicate stronger male-career associations.",
    intelligence: "Intelligence bias measures gender associations with intellectual capacity. Positive values indicate stronger male-intelligence associations.",
    leadership: "Leadership bias examines how gender terms relate to leadership qualities. Higher values show stronger male-leadership associations."
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload e|| payload.length === 0) return null;
    const data = payload[0];
    return (
      <div className="bias-viz-tooltip">
        <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{data.payload.model}</p>
        <p style={{ fontSize: '14px' }}>Effect size (d): {data.payload.value.toFixed(4)}</p>
        <p style={{ fontSize: '14px' }}>p-value: {data.payload.p.toFixed(4)}</p>
      </div>
    );
  };

  if (!isMounted) {
    return <div>Loading visualization...</div>;
  }

  return (
    <div className="bias-viz-container">

      <div className="bias-viz-header">
        <h2 className="bias-viz-subtitle">Gender Bias in AI Models</h2>
      </div>

      <div className="bias-viz-buttons">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'bias-viz-button-active' : 'bias-viz-button'}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="bias-viz-info-box">
        <div className="bias-viz-info-title">Understanding the Visualization</div>
        <p style={{ fontSize: '14px' }}>{explanations[selectedCategory]}</p>
      </div>

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
        />
        <YAxis
          dataKey="model"
          type="category"
          tickLine={false}
          axisLine={false}
        />
        <ReferenceLine x={0} stroke="#6b7280" strokeWidth={2} />
        <ReferenceLine x={0.2} stroke="#22c55e" strokeDasharray="3 3" />
        <ReferenceLine x={0.5} stroke="#fcd34d" strokeDasharray="3 3" />
        <ReferenceLine x={0.8} stroke="#dc2626" strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value">
          {data[selectedCategory].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
          ))}
        </Bar>
      </BarChart>

      <div className="bias-viz-legend">
        <div className="bias-viz-legend-item">
          <div className="bias-viz-legend-color negligible"></div>
          <span>Negligible Bias (d &lt; 0.2)</span>
        </div>
        <div className="bias-viz-legend-item">
          <div className="bias-viz-legend-color small"></div>
          <span>Small Bias (0.2 ≤ d &lt; 0.5)</span>
        </div>
        <div className="bias-viz-legend-item">
          <div className="bias-viz-legend-color medium"></div>
          <span>Medium Bias (0.5 ≤ d &lt; 0.8)</span>
        </div>
        <div className="bias-viz-legend-item">
          <div className="bias-viz-legend-color large"></div>
          <span>Large Bias (d ≥ 0.8)</span>
        </div>
      </div>
    </div>
  );
}