import React from 'react';

const RegulatoryComparison = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Comparative Analysis of AI Regulatory Frameworks
      </h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-blue-700">
          Comparing existing frameworks with the proposed approach. Key differences highlighted in the final row.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Framework</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Approach</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Key Strengths</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Limitations / Key Differences</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-800 border-r">EU AI Act</td>
              <td className="px-6 py-4 text-sm text-gray-600 border-r">Risk-based tiered system with four levels</td>
              <td className="px-6 py-4 text-sm text-gray-600 border-r">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Comprehensive legal framework for AI systems</li>
                  <li>Mandatory requirements for high-risk AI systems</li>
                  <li>Clear enforcement mechanisms</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Computational thresholds exclude widely-used models like embeddings</li>
                  <li>Risk assessment based on applications, not foundational models</li>
                  <li>No explicit bias measurement thresholds</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-800 border-r">US AI Bill of Rights</td>
              <td className="px-6 py-4 text-sm text-gray-600 border-r">Non-binding framework focused on principles</td>
              <td className="px-6 py-4 text-sm text-gray-600 border-r">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Flexible path on algorithmic discrimination</li>
                  <li>Emphasis on transparency</li>
                  <li>Guidance on testing</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Non-binding guidelines only</li>
                  <li>No specific metrics for bias</li>
                  <li>No mandatory auditing requirements</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 text-sm font-medium text-blue-800 border-r">Proposed Framework</td>
              <td className="px-6 py-4 text-sm text-blue-700 border-r">
                Tiered audits with certification system
              </td>
              <td className="px-6 py-4 text-sm text-blue-700 border-r">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Targets foundational bias in embedding layer</li>
                  <li>Quantitative thresholds (d &lt; 0.5 for Gold, d &lt; 0.7 for Silver)</li>
                  <li>Frequency tied to application risk</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm text-blue-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Targets foundational bias in embedding layer</li>
                  <li>Quantitative thresholds (d &lt; 0.5 for Gold, d &lt; 0.7 for Silver)</li>
                  <li>Frequency tied to application risk (Quarterly/Semi-Annual/Annual)</li>
                  <li>Combines mandatory audits with incentive certification</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500 italic">
        <p>Source: European Parliament legislative resolution of 14 June 2023 on AI Act (2021/0106(COD))</p>
        <p>Source: Blueprint for an AI Bill of Rights, White House OSTP, October 2022</p>
      </div>
    </div>
  );
};

export default RegulatoryComparison;