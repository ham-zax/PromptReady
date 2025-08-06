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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSignupStatus('success');
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Lock className="w-4 h-4 mr-2" />
                100% Client-Side Privacy – No Data Shared
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                CleanCopy: Instant, Privacy-First{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Text Extraction
                </span>{' '}
                for Any Page
              </h1>
              <div className="mb-6">
                <p className="text-lg text-gray-500 italic">A/B Test Variant:</p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
                  Boost Productivity with CleanCopy's AI + Offline Modes
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Copy clean, LLM-ready content without the clutter. Free offline mode for speed, optional AI for power—trusted by developers and enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center group"
                >
                  Join Waitlist Now
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
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white rounded-full p-4 mb-4 shadow-lg inline-block">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Watch: Install → Toggle Mode → Copy Clean Text</p>
                    <p className="text-sm text-gray-500 mt-2">Video Demo Coming Soon</p>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Before: Messy Copy</h4>
                    <div className="text-xs text-red-600 space-y-1">
                      <div className="bg-red-100 p-2 rounded">Ad: Buy Now! Limited Time!</div>
                      <div>Important article content here...</div>
                      <div className="bg-red-100 p-2 rounded">Subscribe to Newsletter!</div>
                      <div>More content mixed with junk...</div>
                      <div className="bg-red-100 p-2 rounded">Footer links | Privacy | Terms</div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">After: Clean Copy</h4>
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
                CleanCopy: Simple, Secure, and Smart
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
              Choose your extraction mode and get perfect results every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Hours with Instant Offline Parsing</h3>
              <p className="text-gray-600 leading-relaxed">
                Strip HTML to clean text in under 100ms—no internet needed. Perfect for quick copies on the go.
              </p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Structuring</h3>
              <p className="text-gray-600 leading-relaxed">
                Add summaries, formatting, and LLM-ready Markdown with OpenRouter or your own key (BYOK) for unlimited power.
              </p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progressive Customization</h3>
              <p className="text-gray-600 leading-relaxed">
                One-click copy with optional toggles for titles, spacing, and more—all styled intuitively.
              </p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Client-Side</h3>
              <p className="text-gray-600 leading-relaxed">
                No data leaves your browser in offline mode; control your API in online mode.
              </p>
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
              How CleanCopy Works in 3 Easy Steps
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

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Tier – Free Forever Basics, Power for Pros
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Like Grammarly, Start Free and Scale. 93% of Enterprises Use Extensions—CleanCopy Fits Right In.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b">
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Approved for Teams - Enterprise Ready</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tier</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Offline Free</td>
                    <td className="px-6 py-4 text-gray-600">Instant parsing, basic cleanup</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Online Free</td>
                    <td className="px-6 py-4 text-gray-600">Rate-limited AI</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">BYOK</td>
                    <td className="px-6 py-4 text-gray-600">Unlimited AI with your key</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Free (your costs)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gradient-to-r from-blue-50 to-purple-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Pro (Coming Soon)</td>
                    <td className="px-6 py-4 text-gray-600">Premium models, integrations</td>
                    <td className="px-6 py-4">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">$4.99/mo</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Sign Up Now and Get Notified for Pro Launch
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Users Love CleanCopy
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
                  Get notified when CleanCopy launches and receive exclusive updates
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
              <span className="text-2xl font-bold text-white">CleanCopy</span>
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                Available in 10+ Languages
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              © 2025 CleanCopy - Making web content extraction simple and powerful
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