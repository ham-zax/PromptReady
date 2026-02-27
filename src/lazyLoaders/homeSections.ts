export const loadVideoDemo = () => import('../components/VideoDemo');
export const loadHowItWorks = () => import('../components/HowItWorks');
export const loadProblemSolution = () => import('../components/ProblemSolution');
export const loadFeatures = () => import('../components/Features');
export const loadSocialProof = () => import('../components/SocialProof');
export const loadPricing = () => import('../components/Pricing');
export const loadFAQ = () => import('../components/FAQ');
export const loadFooter = () => import('../components/Footer');

export const homeSectionLoaders = [
  loadVideoDemo,
  loadHowItWorks,
  loadProblemSolution,
  loadFeatures,
  loadSocialProof,
  loadPricing,
  loadFAQ,
  loadFooter,
];
