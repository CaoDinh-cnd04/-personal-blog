/**
 * Format date string to readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @param {string} format - 'full' | 'short' | 'medium'
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString, format = 'full') => {
  const date = new Date(dateString)
  
  const options = {
    full: { year: 'numeric', month: 'long', day: 'numeric' },
    medium: { year: 'numeric', month: 'short', day: 'numeric' },
    short: { month: 'short', day: 'numeric' }
  }
  
  return date.toLocaleDateString('en-US', options[format] || options.full)
}

/**
 * Get relative time string (e.g., "2 days ago")
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Relative time string
 */
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now - date
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

/**
 * Calculate reading time based on word count
 * @param {string} text - Text content
 * @param {number} wordsPerMinute - Average reading speed (default: 200)
 * @returns {string} Reading time string (e.g., "5 min read")
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

