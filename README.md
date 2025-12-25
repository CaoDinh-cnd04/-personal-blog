# Personal Blog & Portfolio

A modern, responsive personal blog and portfolio website built with React.js, featuring dark/light mode, GitHub integration, and optimized for SEO.

## ✨ Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with code splitting and lazy loading
- 🔍 SEO optimized with meta tags and sitemap
- 🎭 Smooth animations and transitions with Framer Motion
- 📝 Blog with Markdown/MDX support
- 🔗 Real-time GitHub integration for projects
- 📧 Contact form with EmailJS integration
- ♿ Accessibility-friendly
- 🚀 Easy deployment to Netlify or Vercel

## 🏗️ Tech Stack

- **Framework:** React 18+
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Markdown:** React Markdown with syntax highlighting
- **Icons:** React Icons
- **API Integration:** GitHub REST API
- **Email Service:** EmailJS
- **SEO:** React Helmet Async

## 📁 Project Structure

```
personal-blog/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── github.js          # GitHub API integration
│   ├── components/
│   │   ├── AnimatedSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── Loading.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SEO.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx   # Dark/Light mode context
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git installed
- A GitHub account (for projects integration)
- EmailJS account (optional, for contact form)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/CaoDinh-cnd04/personal-blog.git
cd personal-blog
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Configuration
VITE_GITHUB_USERNAME=CaoDinh-cnd04

# Site Configuration
VITE_SITE_URL=https://yourdomain.com
```

4. **Start development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📝 Customization

### Update Personal Information

1. **GitHub Username**: Edit `src/api/github.js` and update the `GITHUB_USERNAME` constant
2. **Social Links**: Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`
3. **Personal Info**: Edit `src/pages/Home.jsx` and `src/pages/About.jsx`
4. **Skills**: Update the `skills` object in `src/pages/About.jsx`

### Add Blog Posts

Blog posts are defined in `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`. To add a new post:

1. Add post metadata to the `blogPosts` array in `src/pages/Blog.jsx`
2. Add post content to the `blogPostsContent` object in `src/pages/BlogPost.jsx`

For a production setup, consider using:
- Markdown files in a `content/` folder
- A headless CMS (Contentful, Strapi, etc.)
- MDX for more interactive content

### Configure EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update `.env` with your credentials
6. Uncomment the EmailJS code in `src/pages/Contact.jsx`

### Update SEO

1. Edit `index.html` for default meta tags
2. Update `public/sitemap.xml` with your domain
3. Update `public/robots.txt` with your sitemap URL
4. Use the `<SEO>` component in pages to set page-specific meta tags

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Netlify

1. **Via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

2. **Via Netlify Dashboard**

- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`
- Add environment variables in Netlify dashboard

### Deploy to Vercel

1. **Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

2. **Via Vercel Dashboard**

- Import your GitHub repository
- Vercel will auto-detect Vite configuration
- Add environment variables in Vercel dashboard
- Deploy

### Environment Variables for Deployment

Make sure to add these environment variables in your deployment platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_GITHUB_USERNAME`
- `VITE_SITE_URL`

## 📊 GitHub Projects Integration

The portfolio automatically fetches and displays your public GitHub repositories. The integration includes:

- Repository name, description, and link
- Star count and fork count
- Primary language and topics
- OpenGraph thumbnails
- Homepage/demo links (if available)
- Real-time data from GitHub API

To customize which repositories are displayed, edit `src/api/github.js`.

## 🎨 Theming

The application supports dark and light modes with smooth transitions. Theme preference is:
- Saved in localStorage
- Synced with system preferences
- Toggleable via the header button

To customize colors, edit `tailwind.config.js`:

```js
colors: {
  primary: {
    light: '#3b82f6',  // Light mode primary color
    dark: '#60a5fa',   // Dark mode primary color
  },
  // ... other colors
}
```

## ⚡ Performance Optimization

The application includes several performance optimizations:

- **Code Splitting**: Pages are lazy-loaded with React.lazy()
- **Bundle Optimization**: Vite automatically splits vendor code
- **Image Optimization**: Use WebP/AVIF formats when possible
- **Caching**: Configured cache headers for static assets
- **Preload**: Critical resources are preloaded
- **Minification**: Production builds are minified

## 🧪 Testing

```bash
# Lint code
npm run lint

# Format code (if you add prettier)
npm run format
```

## 🐛 Common Issues

### GitHub API Rate Limiting

GitHub API has rate limits. For unauthenticated requests: 60 requests/hour. If you hit the limit:
- Wait for the limit to reset
- Use GitHub Personal Access Token (add to API calls)

### EmailJS Not Working

- Check your EmailJS credentials in `.env`
- Verify your email template configuration
- Check browser console for errors
- Ensure domain is allowed in EmailJS dashboard

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist && npm run build`
- Check Node.js version: `node --version` (should be 18+)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CaoDinh-cnd04/personal-blog/issues).

## 👤 Author

**CaoDinh-cnd04**

- GitHub: [@CaoDinh-cnd04](https://github.com/CaoDinh-cnd04)
- Website: [yourdomain.com](https://yourdomain.com)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📞 Support

For support, email your.email@example.com or open an issue on GitHub.

