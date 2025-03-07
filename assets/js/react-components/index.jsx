import React from 'react';
import { createRoot } from 'react-dom/client';
import BiasVisualization from './BiasVisualization';
import ActionGuide from './ActionGuide';
import RegulatoryComparison from './RegulatoryComparison';
import EmbeddingExplainer from './EmbeddingExplainer';
import EmbeddingExplainerWork from './EmbeddingExplainerWork';
import CertificationSystem from './CertificationSystem';


console.log("React bundle initialization");

// Function to render a component if its container exists
function renderComponent(Component, elementId) {
  const container = document.getElementById(elementId);
  if (container) {
    try {
      const root = createRoot(container);
      root.render(React.createElement(Component));
      console.log(`Successfully rendered component in ${elementId}`);
    } catch (error) {
      console.error(`Error rendering component in ${elementId}:`, error);
    }
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded, initializing React components");

  renderComponent(BiasVisualization, 'bias-visualization-container');
  renderComponent(ActionGuide, 'action-guide-container');
  renderComponent(RegulatoryComparison, 'regulatory-comparison-container');
  renderComponent(EmbeddingExplainer, 'embedding-explainer-container');
  renderComponent(EmbeddingExplainerWork, 'embedding-explainer-work-container');
  renderComponent(CertificationSystem, 'certification-system-container');

});