# Quick Start Guide

Get your personal blog up and running in 5 minutes!

## Prerequisites

- Node.js 18 or higher ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Git ([Download](https://git-scm.com/))

## 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/CaoDinh-cnd04/personal-blog.git
cd personal-blog

# Install dependencies
npm install
```

## 2. Basic Configuration

Copy the environment template:

```bash
# Windows (PowerShell)
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Edit `.env` and update the GitHub username:

```env
VITE_GITHUB_USERNAME=YOUR_GITHUB_USERNAME
```

> 📝 **Note**: The contact form won't work until you configure EmailJS (optional for now)

## 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 4. Quick Customization

### Update Your Name (3 minutes)

**File: `src/pages/Home.jsx` (line 21-23)**

```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm{' '}
  <span className="text-primary-light dark:text-primary-dark">
    Your Name Here  {/* ← Change this */}
  </span>
</h1>
```

**File: `src/pages/Home.jsx` (line 26)**

```jsx
<p className="text-xl md:text-2xl mb-8 opacity-80">
  Your Title Here  {/* ← Change this */}
</p>
```

### Update Social Links (2 minutes)

**File: `src/components/Footer.jsx` (line 8-26)**

```jsx
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
  // ... more links
]
```

Also update in `src/pages/Contact.jsx` (around line 62).

### Change Colors (optional)

**File: `tailwind.config.js`**

```js
colors: {
  primary: {
    light: '#3b82f6',  // Your brand color
    dark: '#60a5fa',
  },
}
```

## 5. View Your Projects

The Projects page automatically loads from your GitHub account! Just make sure you updated `VITE_GITHUB_USERNAME` in step 2.

## 6. Build for Production

When you're ready to deploy:

```bash
npm run build
```

The build will be in the `dist/` folder.

## What's Next?

### Configure EmailJS for Contact Form

1. Sign up at [EmailJS.com](https://www.emailjs.com/) (free)
2. Create an email service
3. Create an email template
4. Get your credentials and update `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

5. Uncomment EmailJS code in `src/pages/Contact.jsx` (line 30)

### Deploy Your Site

**Option 1: Netlify** (Easiest)
1. Sign up at [Netlify.com](https://www.netlify.com/)
2. Click "Add new site" → "Import from Git"
3. Connect GitHub and select your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables
6. Deploy!

**Option 2: Vercel**
1. Sign up at [Vercel.com](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import your GitHub repo
4. Vercel auto-detects settings
5. Add environment variables
6. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Add Blog Posts

See [BLOG_GUIDE.md](BLOG_GUIDE.md) for complete blog management guide.

Quick example - Edit `src/pages/Blog.jsx`:

```js
const blogPosts = [
  {
    slug: 'my-first-post',
    title: 'My First Blog Post',
    excerpt: 'Welcome to my blog!',
    date: '2024-01-20',
    readTime: '3 min read',
    tags: ['Intro'],
  },
  // ... more posts
]
```

Then add content in `src/pages/BlogPost.jsx`.

## Common Issues

### Port 5173 already in use

```bash
# Use a different port
npm run dev -- --port 3000
```

### GitHub API rate limit

You're limited to 60 requests/hour. Wait an hour or add a GitHub Personal Access Token.

### Build errors

```bash
# Clear everything and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Can't see changes

Hard refresh your browser:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

## Project Structure

```
personal-blog/
├── public/              # Static files (favicon, robots.txt)
├── src/
│   ├── api/            # GitHub API integration
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts (theme)
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Your config (don't commit!)
├── package.json        # Dependencies
└── README.md          # Full documentation
```

## Need Help?

- **Setup Issues**: Check [SETUP.md](SETUP.md)
- **Deployment**: Check [DEPLOYMENT.md](DEPLOYMENT.md)
- **Blog Management**: Check [BLOG_GUIDE.md](BLOG_GUIDE.md)
- **Full Docs**: Check [README.md](README.md)
- **Report Bug**: Open an issue on GitHub

## Checklist

- [ ] Installed dependencies
- [ ] Updated GitHub username in `.env`
- [ ] Changed your name in Home page
- [ ] Updated social links
- [ ] Tested locally (`npm run dev`)
- [ ] Customized colors (optional)
- [ ] Added blog posts (optional)
- [ ] Configured EmailJS (optional)
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to Netlify/Vercel

## Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [GitHub API Docs](https://docs.github.com/en/rest)

---

**That's it!** You now have a working personal blog and portfolio. 🎉

For more customization options, check out the other documentation files.

