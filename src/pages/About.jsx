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
    'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Langchain'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Linux'],
    'Other': ['Agile', 'Scrum', 'Problem Solving', 'UI/UX Design', 'SEO'],
  }

  const courses = [
    {
      name: 'Complete Web Development Bootcamp',
      platform: 'Udemy',
      instructor: 'Angela Yu',
      completed: '2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      name: 'Advanced React Patterns',
      platform: 'Frontend Masters',
      instructor: 'Kent C. Dodds',
      completed: '2023',
      skills: ['React', 'Hooks', 'Context API', 'Custom Hooks']
    },
    {
      name: 'Machine Learning A-Z',
      platform: 'Udemy',
      instructor: 'Kirill Eremenko',
      completed: '2024',
      skills: ['Python', 'ML', 'Data Science', 'AI']
    },
    {
      name: 'Full Stack Open',
      platform: 'University of Helsinki',
      instructor: 'Online Course',
      completed: '2023',
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL']
    },
    {
      name: 'CS50: Introduction to Computer Science',
      platform: 'Harvard University (edX)',
      instructor: 'David J. Malan',
      completed: '2023',
      skills: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures']
    },
    {
      name: 'Docker & Kubernetes',
      platform: 'Udemy',
      instructor: 'Stephen Grider',
      completed: '2024',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD']
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
                  {profile && profile.avatar_url && (
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      src={profile.avatar_url}
                      alt={profile.name || 'Profile'}
                      className="w-48 h-48 rounded-full object-cover shadow-xl"
                    />
                  )}
                  
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
                    Xin chào! Tôi là Cao Nhất Đỉnh, một full-stack developer đam mê công nghệ và luôn học hỏi.
                    Tôi yêu thích việc xây dựng các ứng dụng web hiện đại, tối ưu hiệu suất và trải nghiệm người dùng.
                  </p>
                  <p>
                    Chuyên môn của tôi tập trung vào React, Node.js và các công nghệ JavaScript hiện đại. 
                    Tôi cũng đang nghiên cứu và áp dụng AI/Machine Learning vào các dự án thực tế, đặc biệt 
                    quan tâm đến các mô hình ngôn ngữ lớn (LLM) và ứng dụng AI trong phát triển web.
                  </p>
                  <p>
                    Ngoài coding, tôi thích chia sẻ kiến thức qua các bài viết blog, tham gia các dự án 
                    open source và luôn tìm kiếm cơ hội học hỏi công nghệ mới. Tôi tin rằng học tập suốt 
                    đời và chia sẻ kiến thức là chìa khóa để phát triển bản thân và cộng đồng developer.
                  </p>
                  <p>
                    Tôi đã hoàn thành nhiều khóa học chuyên sâu từ các nền tảng hàng đầu như Udemy, 
                    Frontend Masters, Harvard CS50 và nhiều hơn nữa. Luôn sẵn sàng hợp tác trong các 
                    dự án thú vị và chia sẻ kinh nghiệm!
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
                    <div className="card">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-primary-light dark:text-primary-dark">
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
                      <div className="flex flex-wrap gap-1">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-surface-light dark:bg-background-dark rounded"
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

