import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Personal Blog & Portfolio',
  description = 'Personal blog and portfolio showcasing projects, blog posts, and technical expertise',
  keywords = 'developer, portfolio, blog, projects, GitHub',
  author = 'CaoDinh-cnd04',
  image = '/og-image.jpg',
  url = 'https://yourdomain.com',
  type = 'website'
}) => {
  const fullTitle = title === 'Personal Blog & Portfolio' ? title : `${title} | Personal Portfolio`

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional tags */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO

