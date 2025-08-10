// src/hooks/useEnhancedAnalytics.ts

import { usePostHog } from 'posthog-js/react';
import { trackEvent } from './useAnalytics';
import { useFeatureFlags, FEATURE_FLAGS } from './useFeatureFlags';
import type { AnalyticsPayload } from '../types';

/**
 * Enhanced analytics hook that automatically includes feature flag context
 * and provides specialized tracking functions for A/B testing
 */
export const useEnhancedAnalytics = () => {
  const posthog = usePostHog();
  
  // Get all current feature flag values
  const featureFlags = useFeatureFlags(Object.values(FEATURE_FLAGS), { trackExposure: false });

  /**
   * Track an event with automatic feature flag context
   */
  const trackWithContext = (eventName: string, payload: AnalyticsPayload = {}) => {
    // Filter out null values from feature flags and convert to safe format
    const safeFeatureFlags: Record<string, string> = {};
    Object.entries(featureFlags).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        safeFeatureFlags[key] = value;
      }
    });

    const enhancedPayload: AnalyticsPayload = {
      ...payload,
      // Add feature flag context (only non-null values)
      ...(Object.keys(safeFeatureFlags).length > 0 && { feature_flags: safeFeatureFlags }),
      // Add session context (only if available)
      ...(posthog?.get_session_id?.() && { session_id: posthog.get_session_id() }),
      ...(posthog?.get_distinct_id?.() && { distinct_id: posthog.get_distinct_id() }),
      timestamp: Date.now(),
    };

    trackEvent(eventName, enhancedPayload);
  };

  /**
   * Track A/B test conversion events
   */
  const trackConversion = (
    conversionType: string,
    value?: number,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('conversion', {
      conversion_type: conversionType,
      conversion_value: value,
      ...additionalData,
    });
  };

  /**
   * Track user engagement with specific elements
   */
  const trackEngagement = (
    elementType: string,
    action: string,
    elementId?: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('user_engagement', {
      element_type: elementType,
      action,
      element_id: elementId,
      ...additionalData,
    });
  };

  /**
   * Track CTA clicks with variant information
   */
  const trackCtaClick = (
    ctaLocation: string,
    ctaText: string,
    variant?: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('cta_click', {
      cta_location: ctaLocation,
      cta_text: ctaText,
      cta_variant: variant,
      ...additionalData,
    });
  };

  /**
   * Track video interactions
   */
  const trackVideoInteraction = (
    action: 'play' | 'pause' | 'complete' | 'seek',
    videoId: string,
    currentTime?: number,
    duration?: number,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('video_interaction', {
      video_action: action,
      video_id: videoId,
      current_time: currentTime,
      video_duration: duration,
      completion_percentage: currentTime && duration ? (currentTime / duration) * 100 : null,
      ...additionalData,
    });
  };

  /**
   * Track form interactions
   */
  const trackFormInteraction = (
    formId: string,
    action: 'start' | 'submit' | 'error' | 'abandon',
    fieldName?: string,
    errorMessage?: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('form_interaction', {
      form_id: formId,
      form_action: action,
      field_name: fieldName,
      error_message: errorMessage,
      ...additionalData,
    });
  };

  /**
   * Track scroll depth milestones
   */
  const trackScrollMilestone = (
    percentage: number,
    pagePath: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('scroll_milestone', {
      scroll_percentage: percentage,
      page_path: pagePath,
      ...additionalData,
    });
  };

  /**
   * Track page section views (when sections come into viewport)
   */
  const trackSectionView = (
    sectionName: string,
    sectionId?: string,
    timeToView?: number,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('section_view', {
      section_name: sectionName,
      section_id: sectionId,
      time_to_view: timeToView,
      ...additionalData,
    });
  };

  /**
   * Track feature usage
   */
  const trackFeatureUsage = (
    featureName: string,
    action: string,
    success: boolean = true,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('feature_usage', {
      feature_name: featureName,
      feature_action: action,
      success,
      ...additionalData,
    });
  };

  /**
   * Track user journey milestones
   */
  const trackJourneyMilestone = (
    milestone: string,
    stepNumber?: number,
    timeFromStart?: number,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('journey_milestone', {
      milestone,
      step_number: stepNumber,
      time_from_start: timeFromStart,
      ...additionalData,
    });
  };

  /**
   * Track errors and exceptions
   */
  const trackError = (
    errorType: string,
    errorMessage: string,
    errorStack?: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('error_occurred', {
      error_type: errorType,
      error_message: errorMessage,
      error_stack: errorStack,
      ...additionalData,
    });
  };

  /**
   * Track performance metrics
   */
  const trackPerformance = (
    metricName: string,
    value: number,
    unit: string = 'ms',
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit,
      ...additionalData,
    });
  };

  return {
    // Core tracking
    trackWithContext,
    
    // Specialized tracking functions
    trackConversion,
    trackEngagement,
    trackCtaClick,
    trackVideoInteraction,
    trackFormInteraction,
    trackScrollMilestone,
    trackSectionView,
    trackFeatureUsage,
    trackJourneyMilestone,
    trackError,
    trackPerformance,
    
    // Feature flag context
    featureFlags,
    
    // PostHog instance for advanced usage
    posthog,
  };
};

export default useEnhancedAnalytics;
