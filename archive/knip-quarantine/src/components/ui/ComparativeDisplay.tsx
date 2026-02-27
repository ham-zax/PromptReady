// src/components/ui/ComparativeDisplay.tsx

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Trash2, Sparkles, Wand2, ShieldX } from '@/components/ui/Icons';
import { cn } from '@/lib/utils'; // Make sure you have this utility function

// --- Define the variants for the "Before" column ---
const beforeVariants = cva('border-2 border-dashed rounded-xl p-6 flex flex-col', {
  variants: {
    variant: {
      'red-green': 'border-brand-border bg-brand-surface-soft shadow-sm',
      'blue-purple': 'border-brand-border bg-brand-surface-soft shadow-sm',
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
      'red-green': 'border-brand-success/35 bg-brand-surface shadow-brand-success/10',
      'blue-purple': 'border-brand-accent/35 bg-brand-surface shadow-brand-accent/10',
    },
  },
  defaultVariants: {
    variant: 'red-green',
  },
});

// --- Define content for each variant ---
const variantContent = {
  'red-green': {
    before: { icon: Trash2, label: 'Before', color: 'text-brand-accent' },
    after: {
      icon: Sparkles,
      label: 'After',
      color: 'text-brand-success',
      shimmer: 'before:via-brand-success/20',
      text: 'text-brand-ink',
    },
  },
  'blue-purple': {
    before: { icon: ShieldX, label: 'Without AI', color: 'text-brand-muted' },
    after: {
      icon: Wand2,
      label: 'With AI Enhancement',
      color: 'text-brand-accent',
      shimmer: 'before:via-brand-accent/20',
      text: 'text-brand-ink',
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
        <div className="font-mono text-sm leading-relaxed text-brand-muted">{beforeContent}</div>
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
