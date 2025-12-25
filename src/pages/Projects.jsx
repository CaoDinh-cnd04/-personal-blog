import { useEffect, useState } from 'react'
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiAlertCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import Loading from '../components/Loading'
import { fetchRepositories, getRepositoryThumbnail } from '../api/github'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const data = await fetchRepositories()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadRepositories()
  }, [])

  // Extract unique languages for filtering
  const languages = ['all', ...new Set(repos.map(repo => repo.language).filter(Boolean))]

  // Filter repositories based on selected language
  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === filter)

  if (loading) return <Loading />

  return (
    <>
      <SEO 
        title="Projects"
        description="Browse my portfolio of open source projects and contributions on GitHub"
      />
      
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                A collection of my open source projects and contributions. 
                All data is fetched in real-time from GitHub.
              </p>
            </div>
          </AnimatedSection>

          {/* Language Filter */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilter(lang)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === lang
                      ? 'bg-primary-light dark:bg-primary-dark text-white'
                      : 'bg-surface-light dark:bg-surface-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/10'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Error Message */}
          {error && (
            <AnimatedSection>
              <div className="card bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-8">
                <div className="flex items-center gap-3 text-red-700 dark:text-red-300">
                  <FiAlertCircle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Error loading projects</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Projects Grid */}
          {filteredRepos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <AnimatedSection key={repo.id} delay={0.1 * (index % 6)}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card h-full flex flex-col"
                  >
                    {/* Project Thumbnail */}
                    <div className="w-full h-40 bg-gradient-to-br from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={getRepositoryThumbnail(repo)}
                        alt={repo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                      
                      <p className="text-sm opacity-80 mb-4 flex-1">
                        {repo.description || 'No description available'}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.language && (
                          <span className="px-2 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded text-xs font-medium">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics && repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-surface-light dark:bg-background-dark rounded text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4 text-sm opacity-70">
                        <div className="flex items-center gap-1">
                          <FiStar className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiGitBranch className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-center inline-flex items-center justify-center gap-2 text-sm py-2"
                        >
                          <FiGithub className="w-4 h-4" />
                          View Code
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center justify-center px-4 text-sm py-2"
                            title="Live Demo"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            !loading && !error && (
              <AnimatedSection>
                <div className="card text-center py-12">
                  <p className="text-lg opacity-80">No projects found for the selected filter.</p>
                </div>
              </AnimatedSection>
            )
          )}

          {/* GitHub Profile Link */}
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <a
                href="https://github.com/CaoDinh-cnd04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FiGithub />
                View More on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default Projects

