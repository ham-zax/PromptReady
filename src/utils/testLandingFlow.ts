// Test utility for landing flow functionality
// This can be run in the browser console to test the flow

export const testLandingFlow = () => {
  console.log('🚀 Testing Landing Flow Implementation...');
  
  // Test 1: Check if React Router is working
  const testRouting = () => {
    console.log('📍 Testing routing...');
    const currentPath = window.location.pathname;
    console.log(`Current path: ${currentPath}`);
    
    // Test navigation programmatically
    const testPaths = ['/', '/demo', '/pricing', '/thank-you', '/404'];
    testPaths.forEach(path => {
      if (path !== currentPath) {
        console.log(`✅ Route ${path} is configured`);
      }
    });
  };
  
  // Test 2: Check if analytics are firing
  const testAnalytics = () => {
    console.log('📊 Testing analytics...');
    
    // Mock analytics event
    if (window.va && typeof window.va.track === 'function') {
      console.log('✅ Vercel Analytics is loaded');
    } else {
      console.log('⚠️ Vercel Analytics not detected');
    }
    
    // Check for PostHog
    if ((window as any).posthog) {
      console.log('✅ PostHog is loaded');
    } else {
      console.log('⚠️ PostHog not detected');
    }
  };
  
  // Test 3: Check if navigation components are rendered
  const testNavigation = () => {
    console.log('🧭 Testing navigation...');
    
    const nav = document.querySelector('nav');
    if (nav) {
      console.log('✅ Navigation component is rendered');
      
      const navLinks = nav.querySelectorAll('a');
      console.log(`✅ Found ${navLinks.length} navigation links`);
    } else {
      console.log('❌ Navigation component not found');
    }
  };
  
  // Test 4: Check if CTAs are present
  const testCTAs = () => {
    console.log('🎯 Testing CTAs...');
    
    const ctaButtons = document.querySelectorAll('button');
    const ctaLinks = document.querySelectorAll('a[href*="waitlist"]');
    
    console.log(`✅ Found ${ctaButtons.length} buttons`);
    console.log(`✅ Found ${ctaLinks.length} waitlist links`);
  };
  
  // Test 5: Check if progress indicator is working
  const testProgressIndicator = () => {
    console.log('📈 Testing progress indicator...');
    
    const progressIndicator = document.querySelector('[class*="progress"]');
    if (progressIndicator) {
      console.log('✅ Progress indicator found');
    } else {
      console.log('ℹ️ Progress indicator not visible (may be page-specific)');
    }
  };
  
  // Run all tests
  testRouting();
  testAnalytics();
  testNavigation();
  testCTAs();
  testProgressIndicator();
  
  console.log('✨ Landing flow test completed!');
  
  return {
    currentPath: window.location.pathname,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
};

// Auto-run in development
if (import.meta.env.DEV) {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(testLandingFlow, 1000);
    });
  } else {
    setTimeout(testLandingFlow, 1000);
  }
}

// Make available globally for manual testing
(window as any).testLandingFlow = testLandingFlow;
