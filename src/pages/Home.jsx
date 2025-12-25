import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiCode, FiBookOpen } from 'react-icons/fi'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to my personal blog and portfolio. Explore my projects, read my blog posts, and get to know more about me."
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Cao Nhất Đỉnh
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg mb-12 opacity-70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Engineer chuyên phát triển ứng dụng web full-stack với React, Node.js và các công nghệ hiện đại. 
              Đam mê khám phá và ứng dụng AI/Machine Learning vào các dự án thực tế, đặc biệt là LLM và ứng dụng AI trong web development. 
              Tin vào clean code, best practices và việc chia sẻ kiến thức qua blog để cùng phát triển với cộng đồng developer.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="section-title">What I Do</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCode className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="opacity-80">
                  Building responsive and performant web applications with modern technologies and best practices.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiGithub className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-3">Open Source</h3>
                <p className="opacity-80">
                  Contributing to open source projects and sharing code with the developer community.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBookOpen className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-3">Writing</h3>
                <p className="opacity-80">
                  Sharing knowledge through technical blog posts about development and programming.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="card text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg opacity-80 mb-6">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Me
                <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Home

