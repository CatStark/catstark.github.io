import React from 'react';
import ReactMarkdown from 'react-markdown';
import BiasVisualization from './BiasVisualization';

export default function PresentationPage() {
  const introContent = `
# AI Bias Analysis Project

## Introduction

This research project examines gender bias patterns across various AI language models.
Through systematic analysis, we've identified several key patterns in how different models
handle gender-related concepts.

## Methodology

Our analysis focused on three key dimensions:
- Career associations
- Leadership qualities
- Intelligence attribution

Each model was tested using a standardized set of prompts designed to reveal potential
gender-based associations.

## Key Findings
  `;

  const analysisContent = `
## Analysis
i
The visualization above demonstrates several key patterns:

1. **Career Bias**: Most models show minimal career-related gender bias, with values
   below 0.2, suggesting improved equity in career-related associations.

2. **Leadership Gap**: Several models display moderate bias in leadership associations,
   with some reaching into the medium bias range (0.5-0.8).

3. **Intelligence Attribution**: The bias patterns in intelligence attribution vary
   significantly across models, though generally remaining in the small to medium range.

## Implications

These findings have significant implications for:
- AI deployment in professional contexts
- Hiring and recruitment applications
- Leadership assessment tools
- Educational applications

## Recommendations

Based on our analysis, we recommend:
1. Regular bias auditing of AI models
2. Implementation of bias mitigation strategies
3. Careful consideration when deploying AI in sensitive contexts
4. Continued research into bias patterns and their effects
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-3xl font-bold text-gray-900">AI Model Bias Research</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Introduction Section */}
          <div className="prose max-w-none">
            <ReactMarkdown>{introContent}</ReactMarkdown>
          </div>

          {/* Visualization Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 my-8">
            <BiasVisualization />
          </div>

          {/* Analysis Section */}
          <div className="prose max-w-none">
            <ReactMarkdown>{analysisContent}</ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © 2024 AI Bias Research Project
          </p>
        </footer>
      </main>
    </div>
  );
}