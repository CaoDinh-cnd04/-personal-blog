import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiBookOpen,
  FiClock,
  FiCalendar,
  FiTag,
  FiLayers,
  FiTarget,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import SEO from "../components/SEO";
import AnimatedSection from "../components/AnimatedSection";

// Featured blog posts about IT, work, and technology
const featuredBlogPosts = [
  {
    slug: "hoc-it-nhu-the-nao",
    title: "Học IT Như Thế Nào? Kinh Nghiệm Từ Sinh Viên IT",
    excerpt:
      "Chia sẻ hành trình học IT từ con số 0, những sai lầm thường gặp, và cách học hiệu quả cho sinh viên IT. Từ lý thuyết đến thực hành, từ học thuật đến dự án thực tế.",
    date: "2024-01-28",
    readTime: "12 phút đọc",
    tags: ["Học Tập", "IT", "Kinh Nghiệm", "Sinh Viên"],
    gradient: "from-purple-500 to-pink-500",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/freecodecamp.svg",
  },
  {
    slug: "react-fundamentals-2024",
    title: "React Fundamentals: Từ Cơ Bản Đến Thực Hành",
    excerpt:
      "Hướng dẫn React từ cơ bản: components, props, state, hooks. Áp dụng vào dự án thực tế như Hotel Web và Personal Blog với React.",
    date: "2024-01-18",
    readTime: "10 phút đọc",
    tags: ["React", "JavaScript", "Frontend", "Tutorial"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  },
  {
    slug: "trip-hotel-fullstack-flutter",
    title:
      "Xây Dựng Trip Hotel Full-Stack với Flutter: Hành Trình Từ Ý Tưởng Đến Sản Phẩm",
    excerpt:
      "Chia sẻ kinh nghiệm xây dựng ứng dụng đặt phòng khách sạn full-stack với Flutter (Dart). Từ thiết kế UI/UX, tích hợp API, quản lý state đến deploy ứng dụng mobile.",
    date: "2024-01-25",
    readTime: "15 phút đọc",
    tags: ["Flutter", "Dart", "Mobile", "Full-Stack", "Project"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg",
  },
  {
    slug: "10-cong-cu-developer-nen-biet-2024",
    title: "10 Công Cụ Developer Nên Biết Năm 2024: Tăng Năng Suất Làm Việc",
    excerpt:
      "Tổng hợp 10 công cụ developer hàng đầu năm 2024 giúp tăng năng suất làm việc: từ code editor, version control, API testing đến deployment tools. Công cụ nào đáng học nhất?",
    date: "2024-01-30",
    readTime: "14 phút đọc",
    tags: ["Tools", "Developer", "Productivity", "2024", "Tips"],
    gradient: "from-orange-500 to-red-500",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg",
  },
];

// Skills showcase
const skills = [
  {
    name: "Frontend",
    icon: "🎨",
    tech: ["React", "JavaScript", "HTML/CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend",
    icon: "⚙️",
    tech: ["Node.js", "Express", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Mobile",
    icon: "📱",
    tech: ["Flutter", "Dart"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tools",
    icon: "🛠️",
    tech: ["Git", "Postman", "VS Code"],
    color: "from-orange-500 to-red-500",
  },
];

// Stats
const stats = [
  { label: "Dự Án", value: "10+", icon: FiLayers },
  { label: "Bài Viết", value: "20+", icon: FiBookOpen },
  { label: "Công Nghệ", value: "15+", icon: FiCode },
  { label: "Kinh Nghiệm", value: "2+", icon: FiAward },
];

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Blog cá nhân của sinh viên IT - Chia sẻ kiến thức về lập trình, công nghệ, và kinh nghiệm học tập"
      />

      {/* Hero Section with Enhanced Animation */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-custom py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="mb-6"
                >
                  <motion.span
                    className="inline-block px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full text-sm font-semibold text-primary-light dark:text-primary-dark mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👨‍💻 Sinh Viên IT | Developer
                  </motion.span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Xin chào, tôi là{" "}
                  <span className="bg-gradient-to-r from-primary-light via-cyan-400 to-blue-500 dark:from-primary-dark dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
                    Cao Nhất Đỉnh
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl mb-4 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="text-primary-light dark:text-primary-dark">
                    Software Engineer
                  </span>{" "}
                  & <span className="text-cyan-400">Developer</span>
                </motion.p>

                <motion.p
                  className="text-base md:text-lg mb-8 opacity-80 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Sinh viên IT đam mê lập trình và chia sẻ kiến thức. Chuyên
                  phát triển ứng dụng web full-stack với React, Node.js. Viết
                  blog về công nghệ, kinh nghiệm học tập, và hành trình từ sinh
                  viên đến developer.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/blog"
                      className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 min-h-[56px]"
                    >
                      Đọc Blog
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/projects"
                      className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4 min-h-[56px]"
                    >
                      Xem Dự Án
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4 min-h-[56px]"
                    >
                      Liên Hệ
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Side - Profile Photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <motion.img
                    src="/images/profile.png"
                    alt="Cao Nhất Đỉnh"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-800 bg-gradient-to-br from-primary-light/20 to-cyan-500/20 dark:from-primary-dark/20 dark:to-cyan-500/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    onError={(e) => {
                      // Try .jpg if .png fails
                      if (e.target.src.includes(".png")) {
                        e.target.src = "/images/profile.jpg";
                      } else {
                        // Fallback to a placeholder avatar
                        e.target.src = `https://ui-avatars.com/api/?name=Cao+Nhat+Dinh&size=400&background=3b82f6&color=fff&bold=true`;
                      }
                    }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-light/20 to-cyan-500/20 dark:from-primary-dark/20 dark:to-cyan-500/20 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md border border-text-light/10 dark:border-text-dark/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mb-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <Icon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-primary-light dark:text-primary-dark mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm opacity-70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Bài Viết{" "}
                <span className="text-primary-light dark:text-primary-dark">
                  Nổi Bật
                </span>
              </motion.h2>
              <motion.p
                className="text-lg opacity-80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Chia sẻ kiến thức về IT, công nghệ, và kinh nghiệm học tập từ
                góc nhìn sinh viên
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {featuredBlogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block h-full group">
                  <motion.div
                    className="h-full overflow-hidden rounded-2xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border border-text-light/10 dark:border-text-dark/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Gradient Header */}
                    <div
                      className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                      >
                        {post.icon.startsWith("http") ||
                        post.icon.startsWith("/") ? (
                          <motion.img
                            src={post.icon}
                            alt="Technology logo"
                            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg z-10"
                            style={{
                              filter:
                                "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                            }}
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <span className="text-7xl z-10 drop-shadow-lg">
                            {post.icon}
                          </span>
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-xs opacity-70">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("vi-VN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="opacity-80 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-surface-light dark:bg-background-dark rounded-lg text-xs flex items-center gap-1"
                          >
                            <FiTag className="w-3 h-3 opacity-60" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-primary-light dark:text-primary-dark font-semibold text-sm mt-4"
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
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/blog"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Xem Tất Cả Bài Viết
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Kỹ Năng &{" "}
                <span className="text-primary-light dark:text-primary-dark">
                  Công Nghệ
                </span>
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Các công nghệ và kỹ năng tôi đang học và sử dụng
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="card h-full text-center relative overflow-hidden group">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    className="text-5xl mb-4 relative z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    {skill.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 justify-center relative z-10">
                    {skill.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-lg text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + techIndex * 0.1,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full text-sm font-semibold text-primary-light dark:text-primary-dark mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Về Tôi
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sinh Viên IT Đam Mê{" "}
                <span className="text-primary-light dark:text-primary-dark">
                  Lập Trình
                </span>
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                Tôi là sinh viên IT đang theo đuổi đam mê lập trình và công
                nghệ. Với niềm yêu thích học hỏi và chia sẻ, tôi viết blog về
                những gì mình học được, những dự án đã làm, và kinh nghiệm từ
                hành trình trở thành developer.
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Blog này là nơi tôi chia sẻ kiến thức về web development, mobile
                development, và những công nghệ mới. Hy vọng những bài viết của
                tôi có thể giúp ích cho các bạn sinh viên IT khác.
              </p>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                Tìm Hiểu Thêm
                <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: FiCode,
                  label: "Full-Stack Development",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: FiBookOpen,
                  label: "Viết Blog & Chia Sẻ",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: FiTarget,
                  label: "Học Tập Liên Tục",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: FiUsers,
                  label: "Cộng Đồng Developer",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <item.icon className="w-8 h-8 mb-3" />
                  </motion.div>
                  <div className="font-semibold text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light/10 to-cyan-500/10 dark:from-primary-dark/10 dark:to-cyan-500/10">
        <div className="container-custom">
          <AnimatedSection>
            <motion.div
              className="card text-center max-w-3xl mx-auto relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-cyan-500/5 dark:from-primary-dark/5 dark:to-cyan-500/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ☕
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Cùng Chia Sẻ & Học Hỏi
                </h2>
                <p className="text-lg opacity-80 mb-8">
                  Bạn có câu hỏi về IT, lập trình, hoặc muốn trao đổi kinh
                  nghiệm? Hãy liên hệ với tôi, tôi rất vui được trò chuyện!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Liên Hệ Ngay
                    <FiArrowRight />
                  </Link>
                  <Link
                    to="/blog"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Đọc Blog
                    <FiBookOpen />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
