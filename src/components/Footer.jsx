import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/CaoDinh-cnd04',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/cao-nh%E1%BA%A5t-%C4%91%E1%BB%89nh-cao-5778a8342/',
      label: 'LinkedIn',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/caonhatdinh',
      label: 'Twitter',
    },
    {
      icon: FiMail,
      href: 'mailto:caonhatdinh04@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Về Tôi</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Software Engineer chuyên phát triển ứng dụng web full-stack với React, Node.js và các công nghệ hiện đại. 
              Đam mê AI/Machine Learning và chia sẻ kiến thức lập trình qua blog để cùng phát triển với cộng đồng developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-light/10 dark:border-text-dark/10 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Cao Nhất Đỉnh. Built with ❤️ using React, Tailwind CSS & Vite.</p>
          <p className="mt-2 opacity-70">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

