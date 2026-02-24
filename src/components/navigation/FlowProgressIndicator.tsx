import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Play, DollarSign, CheckCircle } from 'lucide-react';

const FlowProgressIndicator: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { 
      id: 'home', 
      path: '/', 
      label: 'Discover', 
      icon: Home,
      description: 'Learn about PromptReady'
    },
    { 
      id: 'demo', 
      path: '/demo', 
      label: 'Demo', 
      icon: Play,
      description: 'See it in action'
    },
    { 
      id: 'pricing', 
      path: '/pricing', 
      label: 'Pricing', 
      icon: DollarSign,
      description: 'Choose your plan'
    },
    {
      id: 'signup',
      path: '/',
      label: 'Join',
      icon: CheckCircle,
      description: 'Get early access'
    },
  ];

  const getCurrentStepIndex = () => {
    const currentStep = steps.findIndex(step => step.path === location.pathname);
    return currentStep === -1 ? 0 : currentStep;
  };

  const currentStepIndex = getCurrentStepIndex();

  // Handle step navigation
  const handleStepClick = (step: typeof steps[0], index: number) => {
    // Allow navigation to completed steps or the next step
    if (index <= currentStepIndex + 1) {
      // Special handling for the Join step - redirect to waitlist
      if (step.id === 'signup') {
        const waitlistUrl = import.meta.env.VITE_WAITLIST_URL || 'https://waitlister.me/p/promptready';
        window.open(waitlistUrl, '_blank');
      } else {
        navigate(step.path);
      }
    }
  };

  // Only show on specific pages
  const shouldShow = ['/demo', '/pricing'].includes(location.pathname);

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-3 left-1/2 z-40 -translate-x-1/2 sm:bottom-6">
      <motion.div
        className="scale-95 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm sm:scale-100 sm:px-6 sm:py-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;

            const isClickable = index <= currentStepIndex + 1;

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center gap-2 ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                  onClick={() => handleStepClick(step, index)}
                >
                  <div
                    className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500 text-white'
                        : isCompleted
                        ? 'bg-emerald-500/85 text-white'
                        : 'bg-slate-200 text-slate-600'
                    } ${isClickable ? 'hover:scale-105' : 'opacity-60'}`}
                  >
                    <Icon className="h-4 w-4" />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-emerald-400"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  <div className="hidden sm:block">
                    <div
                      className={`text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-emerald-600'
                          : isCompleted
                            ? 'text-emerald-600'
                            : 'text-slate-600'
                      } ${isClickable ? 'hover:text-emerald-500' : ''}`}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`mx-3 h-0.5 w-8 transition-colors ${
                      isCompleted ? 'bg-emerald-500' : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FlowProgressIndicator;
