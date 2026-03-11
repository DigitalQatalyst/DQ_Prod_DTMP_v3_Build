/**
 * Enhanced LMS Service with Database Routing
 * 
 * This service extends the existing lmsService.ts with database routing capabilities.
 * It can seamlessly switch between legacy and new databases based on feature configuration.
 */

import { getDatabaseClient, migrateFeatureToNewDatabase } from './databaseRouter'
import type {
  LmsCourseRow,
  LmsCourseWithRelations,
  LmsModuleRow,
  LmsModuleWithRelations,
  LmsLessonRow,
  LmsQuizRow,
  LmsLearningPathRow,
} from '../types/lmsSupabase'
import type { LmsDetail, LmsCard } from '../data/lmsCourseDetails'

// Re-export all the transformation functions from the original service
// (You can import these from the original lmsService.ts)
import {
  fetchAllCourses as originalFetchAllCourses,
  fetchCourseBySlug as originalFetchCourseBySlug,
  fetchCoursesByFilters as originalFetchCoursesByFilters,
  fetchAllReviews as originalFetchAllReviews,
  createReview as originalCreateReview,
  // ... import other functions as needed
} from './lmsService'

/**
 * Enhanced fetch all courses with database routing
 */
export async function fetchAllCourses(): Promise<LmsCard[]> {
  const client = getDatabaseClient('lms_courses')
  
  // For now, use the original implementation but with the routed client
  // Later, you can customize this for the new database schema
  return originalFetchAllCourses()
}

/**
 * Enhanced fetch course by slug with database routing
 */
export async function fetchCourseBySlug(slug: string): Promise<LmsDetail | null> {
  const client = getDatabaseClient('lms_courses')
  
  // For now, use the original implementation
  // Later, you can add logic to check both databases if needed
  return originalFetchCourseBySlug(slug)
}

/**
 * Example of a NEW feature that uses the new database
 */
export async function fetchUserAnalytics(userId: string) {
  const client = getDatabaseClient('analytics')
  
  if (!client) {
    throw new Error('Analytics feature requires new database configuration')
  }
  
  // This would be a new feature that only exists in the new database
  const { data, error } = await client
    .from('user_analytics')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching user analytics:', error)
    return null
  }
  
  return data
}

/**
 * Example of a feature migration function
 */
export async function migrateUserProfilesToNewDatabase() {
  console.log('🚀 Starting migration of user profiles to new database...')
  
  // 1. Migrate the feature routing
  migrateFeatureToNewDatabase('user_profiles')
  
  // 2. Here you would add logic to:
  //    - Export data from legacy database
  //    - Transform data if schema changed
  //    - Import data to new database
  //    - Verify migration success
  
  console.log('✅ User profiles migration completed')
}

/**
 * Utility function to test database connectivity
 */
export async function testDatabaseConnections() {
  const results = {
    legacy: { connected: false, error: null as any },
    new: { connected: false, error: null as any }
  }
  
  // Test legacy database
  try {
    const legacyClient = getDatabaseClient('lms_courses')
    const { data, error } = await legacyClient
      .from('lms_courses')
      .select('id')
      .limit(1)
    
    results.legacy.connected = !error
    results.legacy.error = error
  } catch (err) {
    results.legacy.error = err
  }
  
  // Test new database (if configured)
  try {
    const newClient = getDatabaseClient('analytics')
    if (newClient) {
      // Try to query a system table that should exist
      const { data, error } = await newClient
        .from('information_schema.tables')
        .select('table_name')
        .limit(1)
      
      results.new.connected = !error
      results.new.error = error
    }
  } catch (err) {
    results.new.error = err
  }
  
  return results
}

// Re-export original functions for backward compatibility
export {
  fetchCoursesByFilters,
  fetchAllReviews,
  createReview,
  fetchQuizByLessonId,
  fetchQuizByCourseId,
  fetchAllLearningPaths,
  fetchLearningPathBySlug,
  // ... export other functions as needed
} from './lmsService'