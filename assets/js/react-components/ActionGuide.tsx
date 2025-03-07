import React, { useState } from 'react';
import {
  Server,
  Building2,
  Scale,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Clock,
  CircleDot,
  GanttChart,
  ArrowRight
} from 'lucide-react';

const TimelineSection = ({ duration, title, items }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="flex-shrink-0 py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
        {duration}
      </div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="space-y-2 ml-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CircleDot className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ActionGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'policymakers',
      title: 'For Policymakers and Regulators',
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      timeline: [
        {
          duration: '0-12 months',
          title: 'Research and Consultation',
          items: [
            'Review current regulatory frameworks for gaps in embedding model coverage',
            'Conduct stakeholder consultations on proposed certification system',
            'Assess economic feasibility and implementation costs'
          ]
        },
        {
          duration: '12-36 months',
          title: 'Policy Development',
          items: [
            'Develop certification standards with industry input',
            'Create framework for voluntary compliance',
            'Design enforcement mechanisms based on feasibility findings'
          ]
        }
      ]
    },
    {
      id: 'providers',
      title: 'For AI Model Providers',
      icon: <Server className="w-6 h-6 text-violet-600" />,
      timeline: [
        {
          duration: '0-6 months',
          title: 'Immediate Actions',
          items: [
            'Implement regular bias auditing using the methodology outlined in this research',
            'Publish transparency reports with bias metrics',
            'Create documentation about known biases in their models'
          ]
        },
        {
          duration: '6-18 months',
          title: 'Medium-term Actions',
          items: [
            'Create tools for users to test their specific use cases for bias',
            'Participate in creating industry standards for bias measurement'
          ]
        }
      ]
    },
    {
      id: 'research',
      title: 'Research Community',
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      items: [
        'Expand testing methodology to other biases',
        'Develop standardized test sets',
        'Study impact on downstream applications',
        'Research for multimodal models'
      ]
    }
  ];

  const quickStart = {
    individual: {
      title: 'For Individual Practitioners',
      items: [
        'Assess your current use of embedding models',
        'Run basic bias tests using the methodology in this paper',
        'Document and report findings to relevant stakeholders',
        'Join or form working groups on bias mitigation'
      ]
    },
    organization: {
      title: 'For Organizations',
      items: [
        'Designate a responsible team/person for embedding model oversight',
        'Begin voluntary bias auditing',
        'Create action plans for high-risk applications',
        'Engage with industry groups on standards development'
      ]
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Taking Action on Embedding Model Bias
      </h2>

      {/* Main Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border rounded-lg shadow-sm">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gray-50 shadow-sm">
                  {section.icon}
                </div>
                <span className="font-semibold text-gray-800">{section.title}</span>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="p-6 border-t bg-gray-50">
                {section.timeline ? (
                  section.timeline.map((phase, idx) => (
                    <TimelineSection key={idx} {...phase} />
                  ))
                ) : (
                  <ul className="space-y-2 ml-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CircleDot className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionGuide;