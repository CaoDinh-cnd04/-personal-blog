import { Link } from 'react-router-dom'
import { FiClock, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

// Sample blog posts - in a real app, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React in 2024',
    excerpt: 'Hướng dẫn chi tiết cách bắt đầu với React, từ cơ bản đến nâng cao với các best practices hiện đại.',
    date: '2024-01-15',
    readTime: '5 phút đọc',
    tags: ['React', 'JavaScript', 'Tutorial'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '⚛️',
  },
  {
    slug: 'xay-dung-blog-ca-nhan-voi-react',
    title: 'Xây Dựng Blog Cá Nhân Với React và Tailwind CSS',
    excerpt: 'Hướng dẫn từng bước xây dựng blog cá nhân responsive, SEO-friendly với React, Tailwind CSS và deploy lên Netlify.',
    date: '2024-01-20',
    readTime: '10 phút đọc',
    tags: ['React', 'Tailwind CSS', 'Blog', 'Tutorial'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '✍️',
  },
  {
    slug: 'ai-va-web-development',
    title: 'AI và Web Development: Tương Lai Đã Đến',
    excerpt: 'Khám phá cách áp dụng AI và Machine Learning vào phát triển web, từ chatbots đến recommendation systems.',
    date: '2024-01-18',
    readTime: '8 phút đọc',
    tags: ['AI', 'Machine Learning', 'Web Development'],
    gradient: 'from-green-500 to-teal-500',
    icon: '🤖',
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: Tips và Tricks',
    excerpt: 'Những kỹ thuật nâng cao và best practices để xây dựng UI đẹp mắt với Tailwind CSS.',
    date: '2024-01-10',
    readTime: '7 phút đọc',
    tags: ['CSS', 'Tailwind', 'Design'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🎨',
  },
  {
    slug: 'nodejs-best-practices-2024',
    title: 'Node.js Best Practices 2024',
    excerpt: 'Tổng hợp các best practices khi phát triển backend với Node.js: security, performance, và architecture.',
    date: '2024-01-12',
    readTime: '9 phút đọc',
    tags: ['Node.js', 'Backend', 'Best Practices'],
    gradient: 'from-green-600 to-green-400',
    icon: '🟢',
  },
  {
    slug: 'deploying-react-apps',
    title: 'Deploy React Apps: Vercel vs Netlify',
    excerpt: 'So sánh chi tiết và hướng dẫn deploy ứng dụng React lên Vercel và Netlify, nên chọn platform nào?',
    date: '2024-01-05',
    readTime: '6 phút đọc',
    tags: ['Deployment', 'DevOps', 'React'],
    gradient: 'from-orange-500 to-red-500',
    icon: '🚀',
  },
  {
    slug: 'docker-cho-developer',
    title: 'Docker Cho Beginner: Từ Zero Đến Hero',
    excerpt: 'Hướng dẫn Docker từ cơ bản đến nâng cao, giúp bạn containerize ứng dụng một cách dễ dàng.',
    date: '2024-01-08',
    readTime: '12 phút đọc',
    tags: ['Docker', 'DevOps', 'Tutorial'],
    gradient: 'from-blue-600 to-indigo-600',
    icon: '🐳',
  },
  {
    slug: 'state-management-in-react',
    title: 'State Management trong React: Chọn Gì Cho Dự Án?',
    excerpt: 'Phân tích các giải pháp state management: Context API, Redux, Zustand, Recoil - khi nào dùng cái gì?',
    date: '2023-12-28',
    readTime: '8 phút đọc',
    tags: ['React', 'State Management', 'Architecture'],
    gradient: 'from-violet-500 to-purple-500',
    icon: '📦',
  },
  {
    slug: 'typescript-cho-javascript-developer',
    title: 'TypeScript Cho JavaScript Developer',
    excerpt: 'Tại sao nên học TypeScript? Hướng dẫn chuyển đổi từ JavaScript sang TypeScript một cách suôn sẻ.',
    date: '2023-12-25',
    readTime: '7 phút đọc',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
    gradient: 'from-blue-500 to-blue-700',
    icon: '📘',
  },
  {
    slug: 'mongodb-tips-and-tricks',
    title: 'MongoDB Tips & Tricks: Tối Ưu Query và Schema',
    excerpt: 'Những kỹ thuật tối ưu hóa MongoDB: indexing, aggregation pipeline, schema design patterns.',
    date: '2023-12-20',
    readTime: '10 phút đọc',
    tags: ['MongoDB', 'Database', 'Performance'],
    gradient: 'from-green-700 to-emerald-500',
    icon: '🍃',
  },
  {
    slug: 'git-workflow-cho-team',
    title: 'Git Workflow Cho Team: Từ Lý Thuyết Đến Thực Hành',
    excerpt: 'Áp dụng Git Flow, GitHub Flow hiệu quả cho team. Tránh conflict, merge như thế nào?',
    date: '2023-12-15',
    readTime: '8 phút đọc',
    tags: ['Git', 'Team Work', 'DevOps'],
    gradient: 'from-orange-600 to-red-600',
    icon: '🔀',
  },
  {
    slug: 'nextjs-vs-react',
    title: 'Next.js vs Create React App: Nên Chọn Gì?',
    excerpt: 'So sánh chi tiết Next.js và CRA, khi nào dùng framework và khi nào dùng library.',
    date: '2023-12-10',
    readTime: '6 phút đọc',
    tags: ['Next.js', 'React', 'Comparison'],
    gradient: 'from-gray-700 to-gray-900',
    icon: '⚡',
  },
]

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog"
        description="Read my latest blog posts about web development, programming, and technology"
      />
      
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Thoughts, tutorials, and insights about web development and programming.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <AnimatedSection delay={0.2}>
              <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-12">
                <div className="card overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`h-64 md:h-auto bg-gradient-to-br ${blogPosts[0].gradient} rounded-lg flex items-center justify-center`}>
                      <span className="text-9xl">{blogPosts[0].icon}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm opacity-70 mb-3">
                        <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-3 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      
                      <p className="text-lg opacity-80 mb-4">
                        {blogPosts[0].excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blogPosts[0].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary-light dark:text-primary-dark font-medium">
                        Read More
                        <FiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.slug} delay={0.1 * (index + 1)}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="card h-full flex flex-col hover:shadow-xl transition-shadow">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                      <span className="text-6xl">{post.icon}</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm opacity-70 mb-3">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="opacity-80 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-surface-light dark:bg-background-dark rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

