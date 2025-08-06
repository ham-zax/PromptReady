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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex justify-center flex-wrap gap-4 mb-6 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Lock className="w-4 h-4 mr-2" />
                  100% Client-Side Privacy
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  100% Client-Side Processing
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Manifest V3 Compliant
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight" data-optimize-experiment-id="HERO_TITLE" data-optimize-variant="0">
                Stop Wasting Time on Messy Web Copies—PromptReady Delivers Perfect Text in 1 Click
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Save 2+ hours weekly copying web content. Get clean, AI-ready text instantly—works offline or with optional AI enhancement for perfect formatting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    console.log('🎯 HERO_CTA: User clicked main CTA button');
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-12 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center group"
                >
                  Start Copying Clean Text Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Join 500+ Waitlisters</span>
                </div>
              </div>
            </div>
            
            {/* Video Demo */}
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl mx-auto border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-600">
                    Quick Demo (30s)
                  </div>
                </div>
                <div
                  className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-200 transition-all"
                  onClick={() => {
                    console.log('🎬 VIDEO_CLICK: User clicked video demo placeholder');
                    alert('Video demo coming soon! This click shows user interest in seeing the product in action.');
                  }}
                >
                  <div className="text-center">
                    <div className="bg-white rounded-full p-4 mb-4 shadow-lg inline-block">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Watch: Install → Copy Clean Text → Paste Anywhere</p>
                    <p className="text-sm text-blue-600 mt-2 font-medium">Video demo coming after validation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="mt-12 relative">
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl mx-auto border">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-600">
                    browser-tab.com
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 w-full">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 w-full">
                    <h4 className="font-semibold text-red-800 mb-2">Before: Messy Copy</h4>
                    <div className="text-xs text-red-600 space-y-1">
                      <div className="bg-red-100 p-2 rounded">Ad: Buy Now! Limited Time!</div>
                      <div>Important article content here...</div>
                      <div className="bg-red-100 p-2 rounded">Subscribe to Newsletter!</div>
                      <div>More content mixed with junk...</div>
                      <div className="bg-red-100 p-2 rounded">Footer links | Privacy | Terms</div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full">
                    <h4 className="font-semibold text-green-800 mb-2">After: Promp tReady</h4>
                    <div className="text-xs text-green-600 space-y-1">
                      <div className="font-medium"># Article Title</div>
                      <div>Clean, structured content ready for AI processing.</div>
                      <div>No ads, no distractions, just pure information.</div>
                      <div>Perfectly formatted for ChatGPT, Claude, or any LLM.</div>
                    </div>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                End the Web Copy Nightmare
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ads, footers, and broken formats waste your time—especially for AI workflows.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <Star className="w-4 h-4 fill-current opacity-50" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">4.5★ Rating</span>
                </div>
                <p className="text-gray-700 italic">"Transformed my research workflow!" – Developer</p>
              </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                PromptReady: Simple, Secure, and Smart
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dual modes deliver instant results offline or AI-enhanced structuring online, all client-side for ultimate privacy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Copy className="w-6 h-6 text-blue-600" />
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-purple-600" />
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
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-xs text-yellow-700 font-medium">Instant Parsing</div>
                </div>
              </div>
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">Get clean text in under 100ms, even offline</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-xs text-purple-700 font-medium">AI Enhancement</div>
                </div>
              </div>
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart AI Features</h3>
              <p className="text-gray-600 leading-relaxed">Auto-generate summaries and perfect LLM formatting</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xs text-blue-700 font-medium">Customization</div>
                </div>
              </div>
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Formatting</h3>
              <p className="text-gray-600 leading-relaxed">Adjust headings, lists & more with one click</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border hover:border-blue-200">
              <div className="mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-green-700 font-medium">Privacy First</div>
                </div>
              </div>
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How PromptReady Works in 3 Easy Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in seconds and transform how you copy content forever
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Download className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-blue-700 font-medium">Animated GIF: Install Process</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-6xl font-bold text-blue-600 mb-2">1</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Install the Extension</h3>
              <p className="text-gray-600">Add to Chrome (or your browser) in seconds.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Settings className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-sm text-green-700 font-medium">Animated GIF: Mode Toggle</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-6xl font-bold text-green-600 mb-2">2</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Mode</h3>
              <p className="text-gray-600">Toggle offline for speed or online for AI smarts.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Copy className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm text-purple-700 font-medium">Animated GIF: Copy Action</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Copy className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-6xl font-bold text-purple-600 mb-2">3</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Copy & Go</h3>
              <p className="text-gray-600">Click the button, customize if needed, and paste perfect text anywhere.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
              <Award className="w-4 h-4 mr-2 text-green-600" />
              Manifest V3 Compliant - Compatible with Chrome, Firefox, Edge
            </div>
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Start Free, Always Free Core Features
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Like Grammarly, PromptReady starts free and scales with your needs.
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
              console.log('🎯 PRICING_CTA: User clicked pricing section CTA');
              document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 h-12 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started Free Now
          </button>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Users Love PromptReady
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Saves me hours weekly on research! The offline mode is incredibly fast and the AI features are game-changing for content creation."
              </p>
              <div className="text-sm text-gray-600">– Developer, Reddit</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Offline mode is a privacy game-changer. No more struggling with messy copies when I'm on the go or have poor internet."
              </p>
              <div className="text-sm text-gray-600">– IT Manager</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 fill-current opacity-50" />
                </div>
                <span className="ml-2 text-sm text-gray-600">4.5★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finally, clean copies without the junk! Perfect for feeding content to ChatGPT and Claude."
              </p>
              <div className="text-sm text-gray-600">– Content Creator</div>
            </div>
          </div>
          
          {/* Signup Form */}
          <div id="signup" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Waitlist for Early Beta Access
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
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 h-12 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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