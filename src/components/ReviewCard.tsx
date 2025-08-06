import React from 'react';
import { Copy, CheckCircle, Shield } from 'lucide-react';

interface ReviewCardProps {
  features?: {
    icon: React.ReactNode;
    label: string;
    bg: string;
  }[];
}

const defaultFeatures = [
  {
    icon: <Copy className="w-6 h-6 text-blue-600" />,
    label: 'Copy Clean',
    bg: 'bg-blue-100',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    label: 'Instant Results',
    bg: 'bg-green-100',
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    label: 'Privacy First',
    bg: 'bg-purple-100',
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ features = defaultFeatures }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-center space-x-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2">
          <div className={`${feature.bg} p-4 rounded-xl`}>
            {feature.icon}
          </div>
          <span className="text-xs font-medium text-gray-600">{feature.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewCard;