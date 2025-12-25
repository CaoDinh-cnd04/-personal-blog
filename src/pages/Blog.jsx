import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock, FiArrowRight, FiSearch, FiTag, FiCalendar, FiTrendingUp } from 'react-icons/fi'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

// Blog posts - Based on actual projects and skills from GitHub
const blogPosts = [
  {
    slug: 'hoc-it-nhu-the-nao',
    title: 'Học IT Như Thế Nào? Kinh Nghiệm Từ Sinh Viên IT',
    excerpt: 'Chia sẻ hành trình học IT từ con số 0, những sai lầm thường gặp, và cách học hiệu quả cho sinh viên IT. Từ lý thuyết đến thực hành, từ học thuật đến dự án thực tế.',
    date: '2024-01-28',
    readTime: '12 phút đọc',
    tags: ['Học Tập', 'IT', 'Kinh Nghiệm', 'Sinh Viên'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '📚',
    featured: true,
    source: 'Kinh nghiệm cá nhân từ hành trình học IT',
  },
  {
    slug: 'kinh-nghiem-thuc-tap-it',
    title: 'Kinh Nghiệm Thực Tập IT: Từ Sinh Viên Đến Developer',
    excerpt: 'Những điều cần biết khi đi thực tập IT: cách tìm công ty phù hợp, chuẩn bị CV, phỏng vấn, và những kỹ năng cần thiết. Kinh nghiệm thực tế từ góc nhìn sinh viên.',
    date: '2024-01-26',
    readTime: '10 phút đọc',
    tags: ['Thực Tập', 'Công Việc', 'IT', 'Career'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💼',
    featured: false,
    source: 'Kinh nghiệm thực tế từ quá trình tìm việc và thực tập',
  },
  {
    slug: 'cong-nghe-moi-2024',
    title: 'Công Nghệ Mới 2024: Xu Hướng Cho Developer',
    excerpt: 'Tổng hợp các công nghệ mới nổi bật trong năm 2024: AI/ML, Web3, Serverless, và những framework mới. Cập nhật xu hướng công nghệ cho developer trẻ.',
    date: '2024-01-24',
    readTime: '15 phút đọc',
    tags: ['Công Nghệ', 'Trend', '2024', 'Developer'],
    gradient: 'from-green-500 to-emerald-500',
    icon: '🚀',
    featured: false,
    source: 'Tổng hợp từ các nguồn công nghệ uy tín và xu hướng thị trường',
  },
  {
    slug: 'tips-sinh-vien-it',
    title: '10 Tips Cho Sinh Viên IT: Từ Học Tập Đến Sự Nghiệp',
    excerpt: '10 lời khuyên hữu ích cho sinh viên IT: cách học code hiệu quả, xây dựng portfolio, tham gia cộng đồng, và chuẩn bị cho sự nghiệp developer.',
    date: '2024-01-22',
    readTime: '8 phút đọc',
    tags: ['Tips', 'Sinh Viên', 'Career', 'IT'],
    gradient: 'from-orange-500 to-red-500',
    icon: '💡',
    featured: false,
    source: 'Tổng hợp từ kinh nghiệm cá nhân và cộng đồng developer',
  },
  {
    slug: 'trip-hotel-fullstack-flutter',
    title: 'Xây Dựng Trip Hotel Full-Stack với Flutter: Hành Trình Từ Ý Tưởng Đến Sản Phẩm',
    excerpt: 'Chia sẻ kinh nghiệm xây dựng ứng dụng đặt phòng khách sạn full-stack với Flutter (Dart). Từ thiết kế UI/UX, tích hợp API, quản lý state đến deploy ứng dụng mobile.',
    date: '2024-01-25',
    readTime: '15 phút đọc',
    tags: ['Flutter', 'Dart', 'Mobile', 'Full-Stack', 'Project'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏨',
    featured: true,
    source: 'Dựa trên dự án thực tế: https://github.com/CaoDinh-cnd04/trip-hotel-fullstack',
  },
  {
    slug: 'firebase-authentication-firestore',
    title: 'Firebase Authentication & Firestore: Hướng Dẫn Tích Hợp Vào Ứng Dụng',
    excerpt: 'Hướng dẫn chi tiết cách tích hợp Firebase Authentication và Firestore vào ứng dụng web/mobile. Từ setup project, authentication flows đến real-time database operations.',
    date: '2024-01-23',
    readTime: '12 phút đọc',
    tags: ['Firebase', 'Authentication', 'Firestore', 'Backend'],
    gradient: 'from-orange-500 to-yellow-500',
    icon: '🔥',
    featured: false,
    source: 'Tham khảo: Firebase Official Documentation - https://firebase.google.com/docs',
  },
  {
    slug: 'nodejs-express-rest-api',
    title: 'Node.js & Express.js: Xây Dựng RESTful API Chuyên Nghiệp',
    excerpt: 'Hướng dẫn xây dựng RESTful API với Node.js và Express.js. Bao gồm routing, middleware, error handling, JWT authentication và best practices từ thực tế.',
    date: '2024-01-20',
    readTime: '11 phút đọc',
    tags: ['Node.js', 'Express', 'REST API', 'Backend', 'JWT'],
    gradient: 'from-green-600 to-green-400',
    icon: '🟢',
    featured: false,
    source: 'Tham khảo: Express.js Documentation - https://expressjs.com/',
  },
  {
    slug: 'react-fundamentals-2024',
    title: 'React Fundamentals: Từ Cơ Bản Đến Thực Hành',
    excerpt: 'Hướng dẫn React từ cơ bản: components, props, state, hooks. Áp dụng vào dự án thực tế như Hotel Web và Personal Blog với React.',
    date: '2024-01-18',
    readTime: '10 phút đọc',
    tags: ['React', 'JavaScript', 'Frontend', 'Tutorial'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: '⚛️',
    featured: false,
    source: 'Dựa trên dự án: https://github.com/CaoDinh-cnd04/hotel_web',
  },
  {
    slug: 'mongodb-schema-design',
    title: 'MongoDB Schema Design: Best Practices và Kinh Nghiệm Thực Tế',
    excerpt: 'Kinh nghiệm thiết kế schema MongoDB cho dự án thực tế. Từ data modeling, indexing, aggregation pipeline đến tối ưu performance cho ứng dụng booking system.',
    date: '2024-01-15',
    readTime: '12 phút đọc',
    tags: ['MongoDB', 'Database', 'Best Practices', 'Backend'],
    gradient: 'from-green-700 to-emerald-500',
    icon: '🍃',
    featured: false,
    source: 'Tham khảo: MongoDB Documentation - https://www.mongodb.com/docs/',
  },
  {
    slug: 'flutter-dart-basics',
    title: 'Flutter & Dart: Bắt Đầu Với Mobile Development',
    excerpt: 'Hướng dẫn Flutter và Dart cho người mới bắt đầu. Từ cài đặt, widgets, state management đến build ứng dụng đầu tiên. Kinh nghiệm từ dự án Trip Hotel Full-Stack.',
    date: '2024-01-12',
    readTime: '14 phút đọc',
    tags: ['Flutter', 'Dart', 'Mobile', 'Tutorial'],
    gradient: 'from-blue-600 to-indigo-600',
    icon: '📱',
    featured: false,
    source: 'Dựa trên dự án: https://github.com/CaoDinh-cnd04/trip-hotel-fullstack',
  },
  {
    slug: 'git-github-workflow',
    title: 'Git & GitHub: Workflow và Best Practices Cho Developer',
    excerpt: 'Hướng dẫn sử dụng Git và GitHub hiệu quả. Từ basic commands, branching strategies, pull requests đến collaboration workflows cho team projects.',
    date: '2024-01-10',
    readTime: '9 phút đọc',
    tags: ['Git', 'GitHub', 'DevOps', 'Tools'],
    gradient: 'from-gray-700 to-gray-900',
    icon: '🔀',
    featured: false,
    source: 'Tham khảo: Git Documentation - https://git-scm.com/doc',
  },
  {
    slug: 'postman-api-testing',
    title: 'Postman: Testing và Debugging API Hiệu Quả',
    excerpt: 'Hướng dẫn sử dụng Postman để test API, tạo collections, environment variables, và automation testing. Công cụ không thể thiếu cho backend developer.',
    date: '2024-01-08',
    readTime: '8 phút đọc',
    tags: ['Postman', 'API', 'Testing', 'Tools'],
    gradient: 'from-orange-600 to-red-600',
    icon: '📬',
    featured: false,
    source: 'Tham khảo: Postman Documentation - https://learning.postman.com/',
  },
  {
    slug: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals: Những Khái Niệm Quan Trọng',
    excerpt: 'Tổng hợp các khái niệm JavaScript quan trọng: variables, functions, objects, arrays, async/await, promises. Nền tảng cho React, Node.js và web development.',
    date: '2024-01-05',
    readTime: '10 phút đọc',
    tags: ['JavaScript', 'Fundamentals', 'Frontend', 'Backend'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: '📘',
    featured: false,
    source: 'Tham khảo: MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    slug: 'html-css-responsive-design',
    title: 'HTML & CSS: Xây Dựng Responsive Web Design',
    excerpt: 'Hướng dẫn HTML/CSS cơ bản và responsive design. Từ layout, flexbox, grid đến media queries. Áp dụng vào các dự án WebBanHang và Hotel Web.',
    date: '2024-01-03',
    readTime: '9 phút đọc',
    tags: ['HTML', 'CSS', 'Frontend', 'Responsive Design'],
    gradient: 'from-pink-500 to-purple-500',
    icon: '🎨',
    featured: false,
    source: 'Dựa trên dự án: https://github.com/CaoDinh-cnd04/WebBanHang',
  },
  {
    slug: 'csharp-dotnet-basics',
    title: 'C# & .NET: Lập Trình Desktop và Backend',
    excerpt: 'Giới thiệu C# và .NET framework. Từ Windows Forms applications đến backend development. Kinh nghiệm từ các dự án Windows Forms và Web Bán Hàng.',
    date: '2023-12-28',
    readTime: '11 phút đọc',
    tags: ['C#', '.NET', 'Backend', 'Desktop'],
    gradient: 'from-purple-600 to-indigo-600',
    icon: '💻',
    featured: false,
    source: 'Dựa trên dự án: https://github.com/CaoDinh-cnd04/windows_form',
  },
  {
    slug: 'deploy-react-netlify-vercel',
    title: 'Deploy React Apps: Netlify vs Vercel - So Sánh Chi Tiết',
    excerpt: 'So sánh Netlify và Vercel cho việc deploy React applications. Ưu nhược điểm, pricing, features và hướng dẫn deploy step-by-step từ kinh nghiệm thực tế.',
    date: '2023-12-25',
    readTime: '8 phút đọc',
    tags: ['Deployment', 'React', 'Netlify', 'Vercel', 'DevOps'],
    gradient: 'from-cyan-600 to-blue-600',
    icon: '🚀',
    featured: false,
    source: 'Dựa trên kinh nghiệm deploy dự án Personal Blog',
  },
]

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')

  // Get all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))]

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0]
  const regularPosts = filteredPosts.filter(post => post.slug !== featuredPost.slug)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3
      }
    })
  }

  return (
    <>
      <SEO 
        title="Blog"
        description="Read my latest blog posts about web development, programming, AI, and technology"
      />
      
      <div className="pt-24 pb-20 min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Hero Section with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <span className="bg-gradient-to-r from-primary-light via-cyan-400 to-blue-500 dark:from-primary-dark dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Blog
                </span>
                <motion.span
                  className="absolute -top-4 -right-4 text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✍️
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl opacity-80 max-w-4xl mx-auto leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Thoughts, tutorials, and insights about web development, programming, AI, and technology.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Chia sẻ kiến thức và kinh nghiệm từ hành trình phát triển bản thân.
            </motion.p>
          </motion.div>

          {/* Enhanced Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16 space-y-8"
          >
            {/* Search Bar with Animation */}
            <motion.div 
              className="relative max-w-2xl mx-auto"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-cyan-500/20 dark:from-primary-dark/20 dark:to-cyan-500/20 rounded-2xl blur-xl opacity-0"
                animate={{
                  opacity: searchQuery ? [0, 0.5, 0] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 z-10" />
              <motion.input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-2xl border-2 border-text-light/10 dark:border-text-dark/10 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark focus:ring-4 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 transition-all shadow-lg relative z-10"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-light dark:text-primary-dark hover:scale-110 transition-transform"
                >
                  ✕
                </motion.button>
              )}
            </motion.div>

            {/* Enhanced Tag Filter with Stagger Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 justify-center px-4"
            >
              <AnimatePresence mode="wait">
                {allTags.map((tag, index) => (
                  <motion.button
                    key={tag}
                    custom={index}
                    variants={tagVariants}
                    onClick={() => setSelectedTag(tag)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-primary-light to-cyan-500 dark:from-primary-dark dark:to-cyan-400 text-white shadow-2xl shadow-primary-light/50 dark:shadow-primary-dark/50 scale-110'
                        : 'bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-surface-dark/80 text-text-light dark:text-text-dark border border-text-light/10 dark:border-text-dark/10'
                    }`}
                    whileHover={{ 
                      scale: selectedTag === tag ? 1.1 : 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedTag === tag && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light to-cyan-500 dark:from-primary-dark dark:to-cyan-400 opacity-75 blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tag === 'all' ? 'Tất cả' : tag}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Enhanced Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-20"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <motion.div
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-white/70 dark:from-surface-dark/90 dark:to-surface-dark/70 backdrop-blur-xl border border-text-light/10 dark:border-text-dark/10 shadow-2xl"
                  whileHover={{ 
                    y: -12,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-cyan-500/10 to-blue-500/10 dark:from-primary-dark/10 dark:via-cyan-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                    {/* Enhanced Image/Gradient Section */}
                    <motion.div
                      className={`h-80 lg:h-full min-h-[400px] bg-gradient-to-br ${featuredPost.gradient} relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                          }}
                          animate={{
                            x: [0, 40, 0],
                            y: [0, 40, 0]
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-9xl z-10 drop-shadow-2xl">{featuredPost.icon}</span>
                      </motion.div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Enhanced Content Section */}
                    <div className="flex flex-col justify-center p-8 lg:p-12 space-y-6">
                      <motion.div
                        className="flex items-center gap-3 flex-wrap"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <motion.span
                          className="px-4 py-1.5 bg-gradient-to-r from-primary-light to-cyan-500 dark:from-primary-dark dark:to-cyan-400 text-white rounded-full font-bold text-sm shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          <FiTrendingUp className="inline mr-1" />
                          Featured
                        </motion.span>
                        <div className="flex items-center gap-2 text-sm opacity-70">
                          <FiCalendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('vi-VN', { 
                            day: 'numeric',
                            month: 'long', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm opacity-70">
                          <FiClock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </motion.div>
                      
                      <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                      >
                        {featuredPost.title}
                      </motion.h2>
                      
                      <motion.p
                        className="text-lg opacity-80 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        {featuredPost.excerpt}
                      </motion.p>
                      
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        {featuredPost.tags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1.5 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium border border-primary-light/20 dark:border-primary-dark/20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      {featuredPost.source && (
                        <motion.p
                          className="text-xs opacity-60 italic"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        >
                          📚 {featuredPost.source}
                        </motion.p>
                      )}
                      
                      <motion.div
                        className="flex items-center gap-2 text-primary-light dark:text-primary-dark font-bold text-lg mt-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 }}
                        whileHover={{ x: 10 }}
                      >
                        Đọc thêm
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FiArrowRight className="w-5 h-5" />
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )}

          {/* Enhanced Blog Posts Grid */}
          {regularPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full group">
                      <motion.div
                        className="h-full flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border border-text-light/10 dark:border-text-dark/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                        whileHover={{ 
                          y: -12,
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary-light/0 via-primary-light/0 to-primary-light/0 dark:from-primary-dark/0 dark:via-primary-dark/0 dark:to-primary-dark/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        />

                        {/* Enhanced Gradient Header */}
                        <div className={`h-56 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                          {/* Animated Pattern */}
                          <motion.div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                              backgroundSize: '30px 30px'
                            }}
                            animate={{
                              x: [0, 30, 0],
                              y: [0, 30, 0]
                            }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.span
                              className="text-7xl z-10 drop-shadow-lg"
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              {post.icon}
                            </motion.span>
                          </motion.div>
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-colors" />
                          
                          {/* Shine Effect on Hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '200%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        
                        {/* Enhanced Content */}
                        <div className="flex-1 flex flex-col p-6 space-y-4">
                          <motion.div
                            className="flex items-center gap-3 text-xs opacity-70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <div className="flex items-center gap-1">
                              <FiCalendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString('vi-VN', { 
                                day: 'numeric',
                                month: 'short', 
                                year: 'numeric' 
                              })}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <FiClock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </motion.div>
                          
                          <motion.h3
                            className="text-xl font-bold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors line-clamp-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {post.title}
                          </motion.h3>
                          
                          <motion.p
                            className="opacity-80 text-sm leading-relaxed flex-1 line-clamp-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {post.excerpt}
                          </motion.p>
                          
                          <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {post.tags.slice(0, 3).map((tag) => (
                              <motion.span
                                key={tag}
                                className="px-2.5 py-1 bg-surface-light dark:bg-background-dark rounded-lg text-xs flex items-center gap-1 border border-text-light/5 dark:border-text-dark/5"
                                whileHover={{ scale: 1.1 }}
                              >
                                <FiTag className="w-3 h-3 opacity-60" />
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                          
                          {post.source && (
                            <motion.p
                              className="text-xs opacity-60 italic line-clamp-1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 + 0.6 }}
                            >
                              📚 {post.source}
                            </motion.p>
                          )}
                          
                          <motion.div
                            className="flex items-center gap-2 text-primary-light dark:text-primary-dark font-semibold text-sm mt-auto pt-3 border-t border-text-light/5 dark:border-text-dark/5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                            whileHover={{ x: 8 }}
                          >
                            Đọc thêm
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                            >
                              <FiArrowRight className="w-4 h-4" />
                            </motion.span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-xl opacity-70 mb-2">Không tìm thấy bài viết nào</p>
              <p className="opacity-60">Thử thay đổi từ khóa tìm kiếm hoặc tag</p>
            </motion.div>
          )}

          {/* Enhanced Stats Section */}
          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { label: 'Bài viết', value: blogPosts.length, icon: '📝' },
              { label: 'Chủ đề', value: allTags.length - 1, icon: '🏷️' },
              { label: 'Lượt đọc', value: '1.2K+', icon: '👁️' },
              { label: 'Năm viết blog', value: '2024', icon: '📅' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md border border-text-light/10 dark:border-text-dark/10 p-6 text-center shadow-lg"
                whileHover={{ 
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-cyan-500/10 dark:from-primary-dark/10 dark:to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity"
                />
                
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm opacity-70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Blog
