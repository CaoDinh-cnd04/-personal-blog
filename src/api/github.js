const GITHUB_USERNAME = 'CaoDinh-cnd04'
const GITHUB_API_BASE = 'https://api.github.com'

/**
 * Fetch GitHub user profile information
 */
export const fetchUserProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`)
    if (!response.ok) {
      throw new Error('Failed to fetch user profile')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching user profile:', error)
    throw error
  }
}

/**
 * Fetch all public repositories for the user
 * Only returns significant/featured projects (not all repos)
 */
export const fetchRepositories = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }
    const repos = await response.json()
    
    // Filter criteria for featured projects:
    // 1. Not a fork
    // 2. Has description
    // 3. Has at least 1 star OR has topics OR updated in last year
    // 4. Not a config/dotfiles repo
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    
    const excludedNames = ['dotfiles', 'config', '.github', 'profile']
    
    return repos
      .filter(repo => {
        // Exclude forks
        if (repo.fork) return false
        
        // Exclude repos with excluded names
        if (excludedNames.some(name => repo.name.toLowerCase().includes(name))) {
          return false
        }
        
        // Include if has description
        if (!repo.description || repo.description.trim() === '') return false
        
        // Include if has stars
        if (repo.stargazers_count > 0) return true
        
        // Include if has topics (indicates it's tagged/featured)
        if (repo.topics && repo.topics.length > 0) return true
        
        // Include if updated recently (within last year)
        const updatedDate = new Date(repo.updated_at)
        if (updatedDate > oneYearAgo) return true
        
        return false
      })
      .sort((a, b) => {
        // Sort by stars first, then by update date
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return new Date(b.updated_at) - new Date(a.updated_at)
      })
      .slice(0, 12) // Limit to 12 featured projects
  } catch (error) {
    console.error('Error fetching repositories:', error)
    throw error
  }
}

/**
 * Fetch detailed information about a specific repository
 */
export const fetchRepositoryDetails = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`)
    if (!response.ok) {
      throw new Error('Failed to fetch repository details')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching repository details:', error)
    throw error
  }
}

/**
 * Fetch languages used in a repository
 */
export const fetchRepositoryLanguages = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`)
    if (!response.ok) {
      throw new Error('Failed to fetch repository languages')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching repository languages:', error)
    throw error
  }
}

/**
 * Extract tech stack from repository topics and languages
 */
export const extractTechStack = (repo, languages = {}) => {
  const techStack = new Set()
  
  // Add languages
  Object.keys(languages).forEach(lang => techStack.add(lang))
  
  // Add topics if available
  if (repo.topics && Array.isArray(repo.topics)) {
    repo.topics.forEach(topic => techStack.add(topic))
  }
  
  return Array.from(techStack)
}

/**
 * Get repository thumbnail/image
 * This tries to find an image from the repo or uses a placeholder
 */
export const getRepositoryThumbnail = (repo) => {
  // Check for social preview image
  if (repo.owner && repo.owner.avatar_url) {
    // Default to user avatar as fallback
    return `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`
  }
  // GitHub's OpenGraph image for repositories
  return `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`
}

