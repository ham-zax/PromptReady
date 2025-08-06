import React, { useState } from 'react';
import { 
  Download, 
  Zap, 
  Brain, 
  Settings, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Copy,
  Sparkles,
  Clock,
  Users,
  Star,
  Play,
  Award,
  Globe,
  Lock
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [signupStatus, setSignupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Track user behavior to validate conversion issues
  React.useEffect(() => {
    const startTime = Date.now();
    console.log('📊 PAGE_LOAD: User landed on page', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });

    // Track scroll behavior to see if users reach signup
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 75) {
        console.log('📈 SCROLL: User reached 75% of page');
      }
    };

    // Track time spent on page
    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime;
      const signupElement = document.getElementById('signup');
      console.log('⏱️ EXIT: User leaving page', {
        timeOnPage: `${timeOnPage}ms`,
        scrollPosition: window.scrollY,
        reachedSignup: signupElement ? signupElement.getBoundingClientRect().top < window.innerHeight : false
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Auto-rotate testimonials carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus('submitting');
    
    // Track conversion attempt
    console.log('🎯 CONVERSION: User attempted signup', {
      timestamp: new Date().toISOString(),
      email: email,
      name: name,
      scrollPosition: window.scrollY,
      timeOnPage: performance.now()
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSignupStatus('success');
    console.log('✅ CONVERSION: Signup successful');
    setEmail('');
    setName('');
    
    // Reset after 3 seconds
    setTimeout(() => setSignupStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="mb-8">
              {/* Enhanced badges with glow effect */}
              <div className="flex justify-center flex-wrap gap-4 mb-8 animate-slide-up">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Lock className="w-4 h-4 mr-2" />
                  100% Client-Side Privacy
                </div>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-4 h-4 mr-2" />
                  Lightning Fast
                </div>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Award className="w-4 h-4 mr-2" />
                  Manifest V3 Compliant
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
                Stop Wasting Time on{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Messy Web Copies
                </span>
              </h1>
              
              <p className="text-2xl font-semibold text-gray-800 mb-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
                PromptReady Delivers Perfect, LLM-Ready Text in 1 Click
              </p>
              
              <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.6s'}}>
                Save 2+ hours weekly copying web content. Get clean, AI-ready text instantly—works offline or with optional AI enhancement for perfect formatting.
              </p>
              
              {/* Enhanced CTA with glow effect */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
                <button
                  onClick={() => {
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="glow-effect bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group relative overflow-hidden"
                >
                  <span className="relative z-10">Join the Private Beta</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="flex items-center text-gray-700 bg-white px-6 py-3 rounded-full shadow-lg">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9★ • Join 500+ testers in our private beta</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Mode Toggle Demo */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '1s'}}>
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">See How It Works</h3>
                </div>
                
                {/* Browser Mockup with Enhanced Visual */}
                <div className="browser-mockup floating-card max-w-4xl mx-auto">
                  <div className="browser-header">
                    <div className="browser-dot bg-red-500"></div>
                    <div className="browser-dot bg-yellow-500"></div>
                    <div className="browser-dot bg-green-500"></div>
                    <div className="ml-4 bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-600 font-medium">
                      example-article.com
                    </div>
                    <div className="ml-auto">
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        <Sparkles className="w-3 h-3 mr-1" />
                        PromptReady Active
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Before Section */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-red-800 text-lg flex items-center">
                          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                          Before: Messy Copy
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-red-100 border border-red-300 p-3 rounded-lg">
                            <div className="text-red-700 font-medium">🎯 LIMITED TIME OFFER! 50% OFF!</div>
                          </div>
                          <div className="text-gray-700 leading-relaxed">
                            Important article content about AI and machine learning trends in 2024...
                          </div>
                          <div className="bg-yellow-100 border border-yellow-300 p-3 rounded-lg">
                            <div className="text-yellow-700 font-medium">📧 Subscribe to our newsletter!</div>
                          </div>
                          <div className="text-gray-700 leading-relaxed">
                            More valuable content mixed with promotional elements...
                          </div>
                          <div className="bg-gray-100 border border-gray-300 p-3 rounded-lg">
                            <div className="text-gray-600 text-xs">Footer • Privacy Policy • Terms of Service</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* After Section */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-green-800 text-lg flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                          After: PromptReady
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="font-semibold text-gray-900 text-lg">
                            # AI and Machine Learning Trends in 2024
                          </div>
                          <div className="text-gray-700 leading-relaxed space-y-2">
                            <p>Clean, structured content ready for AI processing.</p>
                            <p>No ads, no distractions, just pure information.</p>
                            <p>Perfectly formatted for ChatGPT, Claude, or any LLM.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Demo Video Placeholder */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '1.2s'}}>
              <div className="browser-mockup floating-card max-w-4xl mx-auto">
                <div className="browser-header">
                  <div className="browser-dot bg-red-500"></div>
                  <div className="browser-dot bg-yellow-500"></div>
                  <div className="browser-dot bg-green-500"></div>
                  <div className="ml-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-1 text-sm font-medium">
                    🎬 Quick Demo (30s)
                  </div>
                </div>
                <div
                  className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-200 hover:via-purple-200 hover:to-pink-200 transition-all duration-300 group"
                  onClick={() => {
                    console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
                    alert('Video demo coming soon! This click shows user interest in seeing the product in action.');
                  }}
                >
                  <div className="text-center">
                    <div className="bg-white rounded-full p-6 mb-4 shadow-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-blue-600" />
                    </div>
                    <p className="text-gray-800 font-bold text-lg mb-2">Watch: Install → Copy Clean Text → Paste Anywhere</p>
                    <p className="text-blue-600 font-semibold">Coming after validation • Click to show interest!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  End the Web Copy Nightmare
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ads, footers, and broken formats waste your time—especially for AI workflows.
                </p>
              </div>
              
              {/* Social Proof Card - Repositioned and Redesigned */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                {/* Consistent rounded accent instead of sharp line */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
                <div className="ml-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 fill-current opacity-50" />
                    </div>
                    {/* Improved contrast for accessibility */}
                    <span className="text-sm font-semibold text-gray-800">4.5★ Rating</span>
                  </div>
                  <p className="text-gray-700 italic font-medium">"Transformed my research workflow!" – Developer</p>
                </div>
              </div>
            </div>

            {/* Solution Section - Enhanced Visual Separation */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  PromptReady: Simple, Secure, and Smart
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dual modes deliver instant results offline or AI-enhanced structuring online, all client-side for ultimate privacy.
                </p>
              </div>
              
              {/* Enhanced Icon Group with Better Visual Hierarchy */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <Copy className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Copy Clean</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-green-100 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Instant Results</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-purple-100 p-4 rounded-xl">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Privacy First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features, Simple Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get perfect results with instant text extraction and optional AI enhancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-xs text-yellow-700 font-medium">Instant Parsing</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">Get clean text in under 100ms, even offline</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-xs text-purple-700 font-medium">AI Enhancement</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart AI Features</h3>
              <p className="text-gray-600 leading-relaxed">Auto-generate summaries and perfect LLM formatting</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xs text-blue-700 font-medium">Customization</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Formatting</h3>
              <p className="text-gray-600 leading-relaxed">Adjust headings, lists & more with one click</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-green-700 font-medium">Privacy First</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Speed</h3>
              <p className="text-gray-600 leading-relaxed">All processing locally for maximum security & performance</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full text-sm font-medium text-gray-700 border">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              Freemium Model: Start Free, Upgrade for Pro Features Like Advanced Summaries
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-6">
              <Play className="w-4 h-4 mr-2" />
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Started in{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform how you copy content forever with our simple installation and intuitive interface
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                {/* Animated GIF Placeholder */}
                <div className="browser-mockup floating-card mx-auto max-w-sm">
                  <div className="browser-header">
                    <div className="browser-dot bg-red-500"></div>
                    <div className="browser-dot bg-yellow-500"></div>
                    <div className="browser-dot bg-green-500"></div>
                    <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                      Chrome Web Store
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                        <Download className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-sm text-blue-700 font-medium">🎬 Installation Demo</div>
                      <div className="text-xs text-blue-600 mt-1">Click → Install → Done!</div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Install Extension
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add PromptReady to Chrome, Firefox, or Edge in seconds. One-click installation from the official store.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                {/* Animated GIF Placeholder */}
                <div className="browser-mockup floating-card mx-auto max-w-sm">
                  <div className="browser-header">
                    <div className="browser-dot bg-red-500"></div>
                    <div className="browser-dot bg-yellow-500"></div>
                    <div className="browser-dot bg-green-500"></div>
                    <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                      example.com
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-sm text-green-700 font-medium">🎬 Mode Selection</div>
                      <div className="text-xs text-green-600 mt-1">Offline ⟷ AI Enhanced</div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                Choose Your Mode
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Toggle between offline mode for speed or AI-enhanced mode for intelligent formatting and summaries.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                {/* Animated GIF Placeholder */}
                <div className="browser-mockup floating-card mx-auto max-w-sm">
                  <div className="browser-header">
                    <div className="browser-dot bg-red-500"></div>
                    <div className="browser-dot bg-yellow-500"></div>
                    <div className="browser-dot bg-green-500"></div>
                    <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                      article.com
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-white rounded-full p-4 mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                        <Copy className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="text-sm text-purple-700 font-medium">🎬 Clean Copy Action</div>
                      <div className="text-xs text-purple-600 mt-1">Select → Copy → Perfect!</div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Copy & Paste
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Click the PromptReady button, customize formatting if needed, and paste clean text anywhere.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white rounded-full font-semibold text-gray-700 shadow-xl">
              <Award className="w-5 h-5 mr-3 text-green-600" />
              Manifest V3 Compliant • Compatible with Chrome, Firefox, Edge
              <Sparkles className="w-5 h-5 ml-3 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What to Expect in the Beta
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get early access to new features, help shape the product, and enjoy exclusive updates.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">FREE FOREVER</div>
              <p className="text-lg text-gray-700 mb-4">Instant clean text extraction, offline processing, basic AI features</p>
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                Enterprise-Ready • Privacy-First • Manifest V3
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-700 to-green-700 hover:from-blue-800 hover:to-green-800 text-white px-8 py-4 h-12 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Early Access
          </button>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Loved by Developers
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Users{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Love PromptReady
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of developers, content creators, and professionals who've transformed their workflow
            </p>
          </div>
          
          {/* Rotating Testimonials Carousel */}
          <div className="testimonial-carousel max-w-5xl mx-auto mb-16 px-4">
            <div className="testimonial-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {/* Testimonial 1 */}
              <div className="testimonial-slide px-4">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex text-yellow-400 mr-3 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">5.0★</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                    "Saves me hours weekly on research! The offline mode is incredibly fast and the AI features are game-changing for content creation."
                  </blockquote>
                  <div className="text-center space-y-2">
                    <div className="text-gray-800 font-semibold text-lg">Alex Chen</div>
                    <div className="text-sm text-gray-500">Senior Developer, Reddit</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="testimonial-slide px-4">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex text-yellow-400 mr-3 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">5.0★</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                    "Privacy-first approach is exactly what our team needed. No more worrying about sensitive data being processed externally."
                  </blockquote>
                  <div className="text-center space-y-2">
                    <div className="text-gray-800 font-semibold text-lg">Sarah Mitchell</div>
                    <div className="text-sm text-gray-500">IT Security Manager, Enterprise Corp</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="testimonial-slide px-4">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex text-yellow-400 mr-3 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <Star className="w-5 h-5 fill-current opacity-50" />
                    </div>
                    <span className="text-lg font-semibold text-gray-700">4.5★</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                    "Finally, clean copies without the junk! Perfect for feeding content to ChatGPT and Claude. This is a must-have tool."
                  </blockquote>
                  <div className="text-center space-y-2">
                    <div className="text-gray-800 font-semibold text-lg">Marcus Johnson</div>
                    <div className="text-sm text-gray-500">Content Creator, YouTube</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center items-center space-x-3 mt-12">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    currentTestimonial === index
                      ? 'bg-blue-600 w-12 h-4'
                      : 'bg-gray-300 hover:bg-gray-400 w-4 h-4'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">2hrs+</div>
              <div className="text-gray-600">Time Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Privacy Protected</div>
            </div>
          </div>
          
          {/* Signup Form */}
          <div id="signup" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Waitlist for Exclusive Early Access
                </h3>
                <p className="text-gray-600">
                  Get notified when PromptReady launches and receive exclusive updates
                </p>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium animate-pulse">
                  <Clock className="w-4 h-4 mr-2" />
                  Limited Spots – Sign Up Before We Launch!
                </div>
              </div>
              
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={signupStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {signupStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Joining Waitlist...
                    </span>
                  ) : signupStatus === 'success' ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Successfully Added to Waitlist!
                    </span>
                  ) : (
                    'Join the Waitlist for Free'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Copy className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold text-white">PromptReady</span>
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                Available in 10+ Languages
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              © 2025 PromptReady - Making web content extraction simple and powerful
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
            <div className="text-sm text-gray-500">
              Follow us on X/Twitter and Reddit for updates • Open-Source on GitHub for Transparency
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;