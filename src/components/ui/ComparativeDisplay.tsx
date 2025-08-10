// src/components/ui/ComparativeDisplay.tsx

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Trash2, Sparkles, Wand2, ShieldX } from 'lucide-react';
import { cn } from '@/lib/utils'; // Make sure you have this utility function

// --- Define the variants for the "Before" column ---
const beforeVariants = cva('border-2 border-dashed rounded-xl p-6 flex flex-col', {
  variants: {
    variant: {
      'red-green': 'bg-red-50/60 border-red-200/80 shadow-md',
      'blue-purple': 'bg-blue-50/60 border-blue-200/80 shadow-md',
    },
  },
  defaultVariants: {
    variant: 'red-green',
  },
});

// --- Define the variants for the "After" column ---
const afterVariants = cva('border-2 border-solid rounded-xl p-6 flex flex-col shadow-lg', {
  variants: {
    variant: {
      'red-green': 'bg-green-50/60 border-green-300 shadow-green-500/10',
      'blue-purple': 'bg-purple-50/60 border-purple-300 shadow-purple-500/10',
    },
  },
  defaultVariants: {
    variant: 'red-green',
  },
});

// --- Define content for each variant ---
const variantContent = {
  'red-green': {
    before: { icon: Trash2, label: 'Before', color: 'text-red-600' },
    after: {
      icon: Sparkles,
      label: 'After',
      color: 'text-green-700',
      shimmer: 'before:via-green-200/30',
      text: 'text-green-900',
    },
  },
  'blue-purple': {
    before: { icon: ShieldX, label: 'Without AI', color: 'text-blue-600' },
    after: {
      icon: Wand2,
      label: 'With AI Enhancement',
      color: 'text-purple-700',
      shimmer: 'before:via-purple-200/30',
      text: 'text-purple-900',
    },
  },
};

// --- Define the component props, extending the CVA variants ---
export interface ComparativeDisplayProps extends VariantProps<typeof beforeVariants> {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  className?: string;
}

export const ComparativeDisplay: React.FC<ComparativeDisplayProps> = ({
  className,
  variant,
  beforeContent,
  afterContent,
}) => {
  const v = variant || 'red-green'; // Fallback to default
  const content = variantContent[v];
  const BeforeIcon = content.before.icon;
  const AfterIcon = content.after.icon;

  return (
    <div className={cn('mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:gap-8', className)}>
      {/* Before Column */}
      <div className={cn(beforeVariants({ variant }))}>
        <div className={cn('mb-4 flex items-center font-semibold', content.before.color)}>
          <BeforeIcon className="mr-2 h-5 w-5 flex-shrink-0" />
          <span>{content.before.label}</span>
        </div>
        <div className="font-mono text-sm leading-relaxed text-slate-800/80">{beforeContent}</div>
      </div>

      {/* After Column */}
      <div className={cn(afterVariants({ variant }))}>
        <div className={cn('mb-4 flex items-center font-semibold', content.after.color)}>
          <AfterIcon className="mr-2 h-5 w-5 flex-shrink-0" />
          <span>{content.after.label}</span>
        </div>
        <div
          className={cn(
            "relative font-sans before:absolute before:inset-0 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:to-transparent before:bg-[length:200%_100%] before:content-['']",
            content.after.shimmer,
            content.after.text,
          )}
        >
          {afterContent}
        </div>
      </div>
    </div>
  );
};
