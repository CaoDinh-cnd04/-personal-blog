/**
 * Generate SEO-friendly URL slug from title
 * @param {string} title - Title to convert
 * @returns {string} URL-safe slug
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
}

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 160) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Extract plain text from markdown
 * @param {string} markdown - Markdown content
 * @returns {string} Plain text
 */
export const extractPlainText = (markdown) => {
  return markdown
    .replace(/^###?\s+/gm, '')      // Remove headings
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1')     // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/`(.+?)`/g, '$1')       // Remove code
    .replace(/```[\s\S]*?```/g, '')  // Remove code blocks
    .replace(/^\s*[-*+]\s+/gm, '')   // Remove list markers
    .trim()
}

/**
 * Generate meta description from content
 * @param {string} content - Full content
 * @param {number} maxLength - Maximum length (default: 160)
 * @returns {string} Meta description
 */
export const generateMetaDescription = (content, maxLength = 160) => {
  const plainText = extractPlainText(content)
  return truncateText(plainText, maxLength)
}

/**
 * Generate keywords from text
 * @param {string} text - Text to analyze
 * @param {number} limit - Maximum number of keywords
 * @returns {string[]} Array of keywords
 */
export const extractKeywords = (text, limit = 10) => {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'i',
    'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who', 'when',
    'where', 'why', 'how'
  ])

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.has(word))

  const wordFreq = {}
  words.forEach(word => {
    wordFreq[word] = (wordFreq[word] || 0) + 1
  })

  return Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word)
}

