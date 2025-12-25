import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Configure EmailJS with your credentials
      // Sign up at https://www.emailjs.com/ and get your credentials
      
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Uncomment and configure when you have EmailJS credentials:
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      */

      setStatus({
        type: 'success',
        message: 'Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi bạn sớm.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Gửi tin nhắn thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.',
      })
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/CaoDinh-cnd04',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/cao-nhat-dinh',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: FiTwitter,
      href: 'https://twitter.com/caonhatdinh',
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
    {
      icon: FiMail,
      href: 'mailto:caonhatdinh04@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
  ]

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with me. Send me a message or connect on social media."
      />
      
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ</h1>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Có câu hỏi hoặc muốn hợp tác? Hãy liên hệ với tôi!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Tên của bạn
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-surface-light dark:bg-background-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-surface-light dark:bg-background-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nội dung
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 w-5 h-5 opacity-50" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full pl-10 pr-4 py-3 bg-surface-light dark:bg-background-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark resize-none"
                        placeholder="Tin nhắn của bạn..."
                      />
                    </div>
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                          : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                    <>
                      <FiSend />
                      Gửi Tin Nhắn
                    </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6">Kết Nối Với Tôi</h2>
                  <p className="opacity-80 mb-6">
                    Hãy liên hệ qua bất kỳ nền tảng nào dưới đây. Tôi luôn vui vẻ kết nối với 
                    các developer khác và thảo luận về cơ hội hợp tác mới.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-surface-light dark:bg-background-dark rounded-lg transition-all hover:scale-105 ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Thời Gian Phản Hồi</h3>
                  <p className="opacity-80">
                    Thường tôi sẽ phản hồi tin nhắn trong vòng 24-48 giờ. Với các vấn đề khẩn cấp, 
                    vui lòng liên hệ trực tiếp qua email.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Hợp Tác</h3>
                  <p className="opacity-80">
                    Tôi luôn mở lòng hợp tác trong các dự án thú vị, đặc biệt là những dự án 
                    liên quan đến công nghệ web hiện đại, AI và open source.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

