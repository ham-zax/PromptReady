import React from 'react';
import { Copy, CheckCircle, Shield } from '@/components/ui/Icons';

interface ReviewCardProps {
  features?: {
    icon: React.ReactNode;
    label: string;
    bg: string;
  }[];
}

const defaultFeatures = [
  {
    icon: <Copy className="h-6 w-6 text-brand-accent" />,
    label: 'Copy Clean',
    bg: 'bg-brand-accent/10',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-success" />,
    label: 'Instant Results',
    bg: 'bg-brand-success/10',
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-muted" />,
    label: 'Privacy First',
    bg: 'bg-brand-surface-soft',
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ features = defaultFeatures }) => (
  <div className="rounded-xl border border-brand-border bg-brand-surface p-4 shadow-sm">
    <div className="flex items-center justify-center space-x-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2">
          <div className={`${feature.bg} rounded-xl p-4`}>{feature.icon}</div>
          <span className="text-xs font-medium text-brand-muted">{feature.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewCard;
