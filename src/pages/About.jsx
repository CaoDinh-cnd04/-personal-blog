import { useEffect, useState } from 'react'
import { FiGithub, FiMapPin, FiUsers, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import Loading from '../components/Loading'
import { fetchUserProfile } from '../api/github'

const About = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchUserProfile()
        setProfile(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [])

  const skills = {
    'Frontend': ['JavaScript', 'HTML', 'CSS', 'React'],
    'Mobile Development': ['Dart', 'Flutter'],
    'Backend': ['Node.js', 'Express.js', 'C#', '.NET'],
    'Database & Services': ['Firebase Authentication', 'Firestore', 'MongoDB'],
    'Tools': ['Git', 'GitHub', 'Postman', 'VS Code'],
    'Projects': ['Trip Hotel Full-Stack (Flutter)', 'Hotel Web (JavaScript)', 'Web Bán Hàng (HTML/C#)', 'Windows Forms (C#)'],
  }

  const courses = [
    {
      name: 'Complete Web Development Bootcamp',
      platform: 'Udemy',
      instructor: 'Angela Yu',
      completed: '2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
    },
    {
      name: 'Advanced React Patterns',
      platform: 'Frontend Masters',
      instructor: 'Kent C. Dodds',
      completed: '2023',
      skills: ['React', 'Hooks', 'Context API', 'Custom Hooks'],
      url: 'https://frontendmasters.com/courses/advanced-react-patterns/'
    },
    {
      name: 'Machine Learning A-Z',
      platform: 'Udemy',
      instructor: 'Kirill Eremenko',
      completed: '2024',
      skills: ['Python', 'ML', 'Data Science', 'AI'],
      url: 'https://www.udemy.com/course/machinelearning/'
    },
    {
      name: 'Full Stack Open',
      platform: 'University of Helsinki',
      instructor: 'Online Course',
      completed: '2023',
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
      url: 'https://fullstackopen.com/'
    },
    {
      name: 'CS50: Introduction to Computer Science',
      platform: 'Harvard University (edX)',
      instructor: 'David J. Malan',
      completed: '2023',
      skills: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures'],
      url: 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x'
    },
    {
      name: 'Docker & Kubernetes',
      platform: 'Udemy',
      instructor: 'Stephen Grider',
      completed: '2024',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
      url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/'
    }
  ]

  const certificates = [
    {
      name: 'Networking Basics',
      platform: 'Cisco Networking Academy',
      issued: 'Nov 25, 2025',
      badge: '🌐',
      skills: ['Network Communication', 'IP Addressing', 'IPv4/IPv6', 'Routers', 'Wireless Networks']
    },
    {
      name: 'JavaScript Essentials 1',
      platform: 'Cisco Networking Academy & OpenEDG JS Institute',
      issued: 'Dec 08, 2025',
      badge: '💻',
      skills: ['JavaScript', 'Variables', 'Data Types', 'Flow Control', 'Functions', 'Algorithms']
    },
    {
      name: 'JavaScript Essentials 2',
      platform: 'Cisco Networking Academy & OpenEDG JS Institute',
      issued: 'Dec 09, 2025',
      badge: '⚡',
      skills: ['OOP', 'Prototypes', 'Classes', 'JSON', 'Async Programming', 'Callbacks']
    }
  ]

  if (loading) return <Loading />

  return (
    <>
      <SEO 
        title="About Me"
        description="Learn more about me, my skills, and my journey as a developer"
      />
      
      <div className="pt-24 pb-20">
        <div className="container-custom">
          {/* Profile Section */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Professional Photo */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img
                      src="/images/profile.png"
                      alt="Cao Nhất Đỉnh"
                      className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                      onError={(e) => {
                        // Try .jpg if .png fails
                        if (e.target.src.includes('.png')) {
                          e.target.src = '/images/profile.jpg'
                        } else if (profile && profile.avatar_url) {
                          // Fallback to GitHub avatar
                          e.target.src = profile.avatar_url
                        } else {
                          e.target.style.display = 'none'
                        }
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-light/20 to-cyan-500/20 dark:from-primary-dark/20 dark:to-cyan-500/20 pointer-events-none" />
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-2">
                      {profile?.name || 'Your Name'}
                    </h1>
                    <p className="text-xl text-primary-light dark:text-primary-dark mb-4">
                      @{profile?.login || 'username'}
                    </p>
                    
                    {profile?.bio && (
                      <p className="text-lg opacity-80 mb-6">
                        {profile.bio}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                      {profile?.location && (
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{profile.location}</span>
                        </div>
                      )}
                      
                      {profile?.followers !== undefined && (
                        <div className="flex items-center gap-2">
                          <FiUsers className="w-4 h-4" />
                          <span>{profile.followers} followers</span>
                        </div>
                      )}
                      
                      {profile?.public_repos !== undefined && (
                        <div className="flex items-center gap-2">
                          <FiStar className="w-4 h-4" />
                          <span>{profile.public_repos} repositories</span>
                        </div>
                      )}
                    </div>
                    
                    {profile?.html_url && (
                      <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <FiGithub />
                        View GitHub Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto mt-12">
              <h2 className="section-title">Skills & Technologies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <AnimatedSection key={category} delay={0.1 * index}>
                    <div className="card">
                      <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* About Text */}
          <AnimatedSection delay={0.4}>
            <div className="max-w-4xl mx-auto mt-12">
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Về Tôi</h2>
                <div className="space-y-4 opacity-90">
                  <p>
                    Xin chào! Tôi là Cao Nhất Đỉnh, một Software Engineer với kinh nghiệm phát triển ứng dụng web và mobile. 
                    Tôi đam mê xây dựng các ứng dụng thực tế, từ web applications đến mobile apps.
                  </p>
                  <p>
                    Chuyên môn của tôi bao gồm:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Frontend Web:</strong> JavaScript, HTML, CSS, React - phát triển giao diện web responsive và hiện đại</li>
                    <li><strong>Mobile Development:</strong> Dart, Flutter - xây dựng ứng dụng mobile đa nền tảng</li>
                    <li><strong>Backend:</strong> C# - phát triển ứng dụng desktop và backend services</li>
                  </ul>
                  <p>
                    Các dự án nổi bật tôi đã phát triển:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Trip Hotel Full-Stack</strong> - Ứng dụng đặt phòng khách sạn được xây dựng với Flutter (Dart)</li>
                    <li><strong>Hotel Web</strong> - Website quản lý khách sạn với JavaScript, HTML, CSS</li>
                    <li><strong>Web Bán Hàng</strong> - Hệ thống bán hàng online với HTML, C#, CSS</li>
                    <li><strong>Windows Forms</strong> - Ứng dụng desktop với C#</li>
                  </ul>
                  <p>
                    Tôi luôn học hỏi và cập nhật công nghệ mới, chia sẻ kiến thức qua blog và tham gia các dự án open source.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certificates */}
          <AnimatedSection delay={0.6}>
            <div className="max-w-4xl mx-auto mt-12">
              <h2 className="section-title">Chứng Chỉ Chuyên Môn</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <AnimatedSection key={cert.name} delay={0.1 * index}>
                    <div className="card h-full hover:scale-105 transition-transform duration-300">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-3">{cert.badge}</div>
                        <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark mb-2">
                          {cert.name}
                        </h3>
                      </div>
                      <p className="text-sm opacity-80 mb-3 text-center">
                        📜 {cert.platform}
                      </p>
                      <p className="text-xs opacity-70 mb-4 text-center">
                        🗓️ Issued: {cert.issued}
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Online Courses */}
          <AnimatedSection delay={0.8}>
            <div className="max-w-4xl mx-auto mt-12">
              <h2 className="section-title">Khóa Học Trực Tuyến</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <AnimatedSection key={course.name} delay={0.1 * index}>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card block hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark hover:underline">
                          {course.name}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                          {course.completed}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 mb-2">
                        📚 {course.platform}
                      </p>
                      <p className="text-sm opacity-70 mb-3">
                        👨‍🏫 {course.instructor}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-surface-light dark:bg-background-dark rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-primary-light dark:text-primary-dark font-medium mt-2">
                        Xem khóa học → 
                      </div>
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {error && (
            <div className="max-w-4xl mx-auto mt-8 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
              <p>Error loading GitHub profile: {error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About

