// src/hooks/useEnhancedAnalytics.ts

import { useCallback, useMemo } from 'react';
import { usePostHog } from 'posthog-js/react';
import { trackEvent } from './useAnalytics';
import { useFeatureFlags, FEATURE_FLAGS } from './useFeatureFlags';
import type { AnalyticsPayload } from '../types';

// FIXED: Create a stable reference for the flag keys array to prevent infinite re-renders
const ALL_FEATURE_FLAG_KEYS = Object.values(FEATURE_FLAGS);

/**
 * Enhanced analytics hook that automatically includes feature flag context
 * and provides specialized tracking functions for A/B testing
 */
export const useEnhancedAnalytics = () => {
  const posthog = usePostHog();
  
  // Get all current feature flag values with stable flag keys reference
  const featureFlags = useFeatureFlags(ALL_FEATURE_FLAG_KEYS, { trackExposure: false });

  /**
   * Track an event with automatic feature flag context
   */
  const trackWithContext = useCallback((eventName: string, payload: AnalyticsPayload = {}) => {
    // FIXED: Flatten feature flags into individual properties instead of nested object
    // This prevents the "feature_flags object not allowed" error
    const flagProperties: AnalyticsPayload = {};
    Object.entries(featureFlags).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        // Prefix with ff_ to avoid naming conflicts and make it clear these are feature flags
        flagProperties[`ff_${key.replace(/-/g, '_')}`] = value;
      }
    });

    const enhancedPayload: AnalyticsPayload = {
      ...payload,
      // Add flattened feature flag properties
      ...flagProperties,
      // Add session context (only if available)
      ...(posthog?.get_session_id?.() && { session_id: posthog.get_session_id() }),
      ...(posthog?.get_distinct_id?.() && { distinct_id: posthog.get_distinct_id() }),
      timestamp: Date.now(),
    };

    trackEvent(eventName, enhancedPayload);
  }, [featureFlags, posthog]);

  /**
   * Track A/B test conversion events
   */
  const trackConversion = useCallback((
    conversionType: string,
    value?: number,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('conversion', {
      conversion_type: conversionType,
      conversion_value: value,
      ...additionalData,
    });
  }, [trackWithContext]);

  /**
   * Track user engagement with specific elements
   */
  const trackEngagement = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track CTA clicks with variant information
   */
  const trackCtaClick = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track video interactions
   */
  const trackVideoInteraction = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track form interactions
   */
  const trackFormInteraction = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track scroll depth milestones
   */
  const trackScrollMilestone = useCallback((
    percentage: number,
    pagePath: string,
    additionalData: AnalyticsPayload = {}
  ) => {
    trackWithContext('scroll_milestone', {
      scroll_percentage: percentage,
      page_path: pagePath,
      ...additionalData,
    });
  }, [trackWithContext]);

  /**
   * Track page section views (when sections come into viewport)
   */
  const trackSectionView = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track feature usage
   */
  const trackFeatureUsage = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track user journey milestones
   */
  const trackJourneyMilestone = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track errors and exceptions
   */
  const trackError = useCallback((
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
  }, [trackWithContext]);

  /**
   * Track performance metrics
   */
  const trackPerformance = useCallback((
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
  }, [trackWithContext]);

  // FIXED: Memoize the returned object to prevent new object references
  // This is critical to prevent infinite re-renders in components that use these functions
  return useMemo(() => ({
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
  }), [
    trackWithContext,
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
    featureFlags,
    posthog,
  ]);
};
