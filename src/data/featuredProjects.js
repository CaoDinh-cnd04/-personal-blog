/**
 * Manually curated list of featured projects
 * These will be prioritized over auto-fetched GitHub repos
 * 
 * Để thêm project thủ công, thêm vào array này
 */

export const featuredProjects = [
  // Example:
  // {
  //   name: 'personal-blog',
  //   description: 'Blog cá nhân được xây dựng với React, Tailwind CSS và Vite',
  //   html_url: 'https://github.com/CaoDinh-cnd04/-personal-blog',
  //   homepage: 'https://your-blog.netlify.app',
  //   stargazers_count: 5,
  //   language: 'JavaScript',
  //   topics: ['react', 'tailwindcss', 'vite', 'blog', 'portfolio'],
  //   isFeatured: true // Dùng để đánh dấu project quan trọng
  // }
]

/**
 * List of repository names to exclude from display
 * Thêm tên repos không muốn hiển thị vào đây
 */
export const excludedRepos = [
  'dotfiles',
  'config',
  '.github',
  'profile',
  // Thêm tên repos muốn ẩn vào đây
]

/**
 * Minimum criteria for a repo to be displayed
 */
export const displayCriteria = {
  minStars: 0,              // Số sao tối thiểu
  requireDescription: true,  // Bắt buộc có mô tả
  requireTopics: false,      // Bắt buộc có topics
  maxAge: 365,              // Tuổi tối đa (ngày) - repos cũ hơn sẽ bị ẩn
  maxDisplay: 12            // Số lượng projects hiển thị tối đa
}

