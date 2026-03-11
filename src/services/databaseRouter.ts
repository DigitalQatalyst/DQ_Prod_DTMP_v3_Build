/**
 * Database Router Service
 * 
 * This service determines which database to use for different operations
 * during the migration from the existing LMS database to the new project database.
 * 
 * Migration Strategy:
 * 1. Start with new features on new database
 * 2. Gradually migrate existing features
 * 3. Maintain backward compatibility
 */

import { lmsSupabaseClient } from '../lib/lmsSupabaseClient'
import { newProjectSupabaseClient, isNewProjectDatabaseAvailable } from '../lib/newProjectSupabaseClient'

// Define which features should use which database
export const DATABASE_ROUTING = {
  // Features that should use NEW database (when available)
  NEW_DATABASE_FEATURES: [
    'user_profiles',           // New user management
    'new_course_categories',   // New course categorization
    'analytics',              // New analytics features
    'notifications',          // New notification system
    // Add more features as you migrate them
  ],
  
  // Features that should stay on LEGACY database for now
  LEGACY_DATABASE_FEATURES: [
    'lms_courses',            // Existing course data
    'lms_modules',            // Existing module data
    'lms_lessons',            // Existing lesson data
    'lms_course_reviews',     // Existing reviews
    'lms_course_progress',    // Existing progress tracking
    'lms_learning_paths',     // Existing learning paths
    // These will be migrated gradually
  ]
}

/**
 * Get the appropriate Supabase client for a given feature/table
 */
export function getDatabaseClient(feature: string) {
  // If new database is not available, always use legacy
  if (!isNewProjectDatabaseAvailable()) {
    console.log(`Using legacy database for ${feature} (new database not configured)`)
    return lmsSupabaseClient
  }
  
  // Check if this feature should use the new database
  if (DATABASE_ROUTING.NEW_DATABASE_FEATURES.includes(feature)) {
    console.log(`Using new database for ${feature}`)
    return newProjectSupabaseClient!
  }
  
  // Default to legacy database
  console.log(`Using legacy database for ${feature}`)
  return lmsSupabaseClient
}

/**
 * Helper function to migrate a feature from legacy to new database
 */
export function migrateFeatureToNewDatabase(feature: string) {
  if (!DATABASE_ROUTING.NEW_DATABASE_FEATURES.includes(feature)) {
    DATABASE_ROUTING.NEW_DATABASE_FEATURES.push(feature)
    
    // Remove from legacy if it was there
    const legacyIndex = DATABASE_ROUTING.LEGACY_DATABASE_FEATURES.indexOf(feature)
    if (legacyIndex > -1) {
      DATABASE_ROUTING.LEGACY_DATABASE_FEATURES.splice(legacyIndex, 1)
    }
    
    console.log(`✅ Migrated ${feature} to new database`)
  }
}

/**
 * Get database status for debugging
 */
export function getDatabaseStatus() {
  return {
    newDatabaseAvailable: isNewProjectDatabaseAvailable(),
    newDatabaseFeatures: DATABASE_ROUTING.NEW_DATABASE_FEATURES,
    legacyDatabaseFeatures: DATABASE_ROUTING.LEGACY_DATABASE_FEATURES,
    newDatabaseUrl: import.meta.env.VITE_NEW_PROJECT_SUPABASE_URL || 'Not configured',
    legacyDatabaseUrl: import.meta.env.VITE_LMS_SUPABASE_URL || 'Not configured'
  }
}