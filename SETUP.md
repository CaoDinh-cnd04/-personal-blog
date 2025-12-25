# Setup Guide

Step-by-step guide to set up and customize your personal blog and portfolio.

## Initial Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/CaoDinh-cnd04/personal-blog.git
cd personal-blog

# Install dependencies
npm install
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# EmailJS - Get from https://www.emailjs.com/
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Username
VITE_GITHUB_USERNAME=CaoDinh-cnd04

# Site URL (update when deployed)
VITE_SITE_URL=http://localhost:5173
```

### 3. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## Customization Guide

### Personal Information

#### 1. Update Home Page

Edit `src/pages/Home.jsx`:

```jsx
// Line 21-23: Update your name and title
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm{' '}
  <span className="text-primary-light dark:text-primary-dark">
    Your Name  {/* ← Change this */}
  </span>
</h1>

<p className="text-xl md:text-2xl mb-8 opacity-80">
  Full-Stack Developer | Problem Solver | Tech Enthusiast  {/* ← Change this */}
</p>

<p className="text-lg mb-12 opacity-70 max-w-2xl mx-auto">
  I build modern web applications... {/* ← Change this */}
</p>
```

#### 2. Update About Page

Edit `src/pages/About.jsx`:

```jsx
// Update skills object (around line 36)
const skills = {
  'Frontend': ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  'Backend': ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  'Tools': ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
}

// Update about text (around line 150)
<p>
  Hello! I'm a passionate developer...
  {/* Write your own bio here */}
</p>
```

#### 3. Update Social Links

Edit `src/components/Footer.jsx`:

```jsx
// Around line 8-26
const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/YOUR_USERNAME',  // ← Update
    label: 'GitHub',
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/YOUR_PROFILE',  // ← Update
    label: 'LinkedIn',
  },
  {
    icon: FiTwitter,
    href: 'https://twitter.com/YOUR_HANDLE',  // ← Update
    label: 'Twitter',
  },
  {
    icon: FiMail,
    href: 'mailto:your.email@example.com',  // ← Update
    label: 'Email',
  },
]
```

Also update in `src/pages/Contact.jsx` (around line 62-82).

### GitHub Integration

#### 1. Change GitHub Username

**Option A:** Environment variable (recommended)

Create/edit `.env`:
```env
VITE_GITHUB_USERNAME=YOUR_GITHUB_USERNAME
```

Then update `src/api/github.js` to use env variable:
```js
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'CaoDinh-cnd04'
```

**Option B:** Direct code change

Edit `src/api/github.js`:
```js
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'  // ← Change this
```

#### 2. Filter Projects

Edit `src/api/github.js` to customize project filtering:

```js
export const fetchRepositories = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    )
    const repos = await response.json()
    
    // Customize filtering
    return repos
      .filter(repo => {
        // Example filters:
        // - Exclude forks
        if (repo.fork) return false
        
        // - Only show repos with certain topics
        // if (!repo.topics.includes('portfolio')) return false
        
        // - Exclude certain repos
        // if (repo.name === 'repo-to-hide') return false
        
        return true
      })
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error('Error fetching repositories:', error)
    throw error
  }
}
```

### Blog Posts

#### Adding Blog Posts

Currently, blog posts are hardcoded. To add a new post:

1. **Add to Blog List** - Edit `src/pages/Blog.jsx`:

```js
const blogPosts = [
  // Add new post here
  {
    slug: 'my-new-post',  // URL slug
    title: 'My New Blog Post',
    excerpt: 'Short description of the post...',
    date: '2024-01-20',
    readTime: '5 min read',
    tags: ['React', 'Tutorial'],
    image: '/blog/my-new-post.jpg',  // Optional
  },
  // ... existing posts
]
```

2. **Add Post Content** - Edit `src/pages/BlogPost.jsx`:

```js
const blogPostsContent = {
  'my-new-post': {  // Must match slug above
    title: 'My New Blog Post',
    date: '2024-01-20',
    readTime: '5 min read',
    tags: ['React', 'Tutorial'],
    content: `
# My New Blog Post

Write your content here in Markdown format...

## Section 1

Content...

\`\`\`javascript
// Code examples
const example = 'hello'
\`\`\`
    `,
  },
  // ... existing posts
}
```

#### Advanced: Use Markdown Files

For a better content management experience, consider:

1. **Create content folder:**

```bash
mkdir -p content/blog
```

2. **Add markdown files:**

```markdown
<!-- content/blog/my-post.md -->
---
title: My Blog Post
date: 2024-01-20
tags: [React, Tutorial]
---

# Content here...
```

3. **Use a loader** (requires additional setup):
   - [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
   - Or build a custom markdown loader

### EmailJS Setup

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for free account

2. **Create Email Service**
   - Add email service (Gmail, Outlook, etc.)
   - Follow setup instructions

3. **Create Email Template**
   - Go to Email Templates
   - Create new template
   - Use these variables in your template:
     ```
     {{from_name}}
     {{from_email}}
     {{message}}
     ```

4. **Get Credentials**
   - Service ID: From services page
   - Template ID: From templates page
   - Public Key: From Account → API Keys

5. **Update .env**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```

6. **Enable in Code**
   
   Edit `src/pages/Contact.jsx` (around line 30):
   
   ```js
   // Remove the simulation
   // await new Promise(resolve => setTimeout(resolve, 1500))
   
   // Uncomment and use real EmailJS
   await emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   )
   ```

### Styling and Theming

#### 1. Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    light: '#3b82f6',  // Blue - change to your brand color
    dark: '#60a5fa',   // Lighter blue for dark mode
  },
  background: {
    light: '#ffffff',  // White
    dark: '#0f172a',   // Dark blue-gray
  },
  // ... customize other colors
}
```

#### 2. Change Fonts

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],  // Add your font
    },
  },
}
```

Then add font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### 3. Customize Animations

Edit `tailwind.config.js` to add custom animations:

```js
animation: {
  'custom-bounce': 'bounce 2s infinite',
  // Add your animations
},
keyframes: {
  // Add your keyframes
}
```

### SEO Configuration

#### 1. Update Default Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your description" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Site Title" />
<!-- ... update other tags -->
```

#### 2. Update Sitemap

Edit `public/sitemap.xml`:

```xml
<!-- Replace https://yourdomain.com with your actual domain -->
<loc>https://yoursite.com/</loc>
```

#### 3. Update Robots.txt

Edit `public/robots.txt`:

```
Sitemap: https://yoursite.com/sitemap.xml
```

#### 4. Add Favicon

Replace `public/favicon.svg` with your own icon or add other formats:

```
public/
  ├── favicon.svg
  ├── favicon.ico
  ├── apple-touch-icon.png
  └── og-image.jpg  (for social sharing)
```

## Testing

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Common Issues

### Port Already in Use

Change port in `package.json`:

```json
"scripts": {
  "dev": "vite --port 3000"
}
```

### Environment Variables Not Working

- Must start with `VITE_`
- Restart dev server after changes
- Check spelling and casing

### GitHub API Rate Limit

- Limit: 60 requests/hour without auth
- Add Personal Access Token to increase limit

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

## Next Steps

1. **Customize Content**
   - Update personal information
   - Add blog posts
   - Update projects if needed

2. **Configure Services**
   - Set up EmailJS
   - Configure analytics (optional)

3. **Test Thoroughly**
   - Check all pages
   - Test dark/light mode
   - Test contact form
   - Check mobile responsiveness

4. **Deploy**
   - Follow [DEPLOYMENT.md](DEPLOYMENT.md)
   - Configure custom domain
   - Set up monitoring

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com)

## Support

If you need help:
- Check the README.md
- Review DEPLOYMENT.md
- Open an issue on GitHub
- Check existing issues for solutions

Happy customizing! 🎨

