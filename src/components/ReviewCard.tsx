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
    icon: <Copy className="h-6 w-6 text-blue-600" />,
    label: 'Copy Clean',
    bg: 'bg-blue-100',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
    label: 'Instant Results',
    bg: 'bg-green-100',
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    label: 'Privacy First',
    bg: 'bg-purple-100',
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ features = defaultFeatures }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-center space-x-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2">
          <div className={`${feature.bg} rounded-xl p-4`}>{feature.icon}</div>
          <span className="text-xs font-medium text-gray-600">{feature.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewCard;
