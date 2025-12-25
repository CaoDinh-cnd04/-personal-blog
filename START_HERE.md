# 🚀 START HERE

Welcome to your new Personal Blog & Portfolio!

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your GitHub Username

Open `.env` file and change:

```env
VITE_GITHUB_USERNAME=CaoDinh-cnd04  # ← Change to YOUR GitHub username
```

### 3. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

### 4. Update Your Name

Edit `src/pages/Home.jsx` (line 23):
```jsx
Your Name  // ← Change this to your actual name
```

### 5. Update Social Links

Edit `src/components/Footer.jsx` (line 8-26) with your social media links.

## 📖 Full Documentation

Choose your path:

### 🏃‍♂️ I Want to Start Quickly
→ Read **[QUICKSTART.md](QUICKSTART.md)** (5 min read)

### 🛠️ I Want to Customize Everything
→ Read **[SETUP.md](SETUP.md)** (15 min read)

### 🚀 I'm Ready to Deploy
→ Read **[DEPLOYMENT.md](DEPLOYMENT.md)** (10 min read)

### ✍️ I Want to Add Blog Posts
→ Read **[BLOG_GUIDE.md](BLOG_GUIDE.md)** (10 min read)

### 📚 I Want Complete Documentation
→ Read **[README.md](README.md)** (20 min read)

## ✅ What's Already Done For You

- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Theme toggle with smooth transitions
- ✅ **GitHub Integration** - Auto-fetches your projects
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Blog System** - Markdown support with syntax highlighting
- ✅ **Contact Form** - EmailJS ready (just needs configuration)
- ✅ **Smooth Animations** - Framer Motion animations
- ✅ **Fast Performance** - Code splitting and lazy loading
- ✅ **Deploy Ready** - Netlify and Vercel configs included

## 🎯 What You Need to Do

### Required (5 minutes)
1. ✏️ Update GitHub username in `.env`
2. ✏️ Change your name in `src/pages/Home.jsx`
3. ✏️ Update social links in `src/components/Footer.jsx`

### Optional (30 minutes)
1. 📧 Configure EmailJS for contact form
2. 🎨 Customize colors in `tailwind.config.js`
3. ✍️ Add your blog posts
4. 📝 Update About page with your bio

## 📁 Project Structure

```
personal-blog/
├── src/
│   ├── pages/          → Your main pages (Home, About, etc.)
│   ├── components/     → Reusable components (Header, Footer, etc.)
│   ├── api/           → GitHub API integration
│   ├── contexts/      → Theme context (dark/light mode)
│   └── utils/         → Helper functions
├── public/            → Static files (favicon, images)
├── Documentation/     → All guides (you are here!)
└── Configuration      → Build configs
```

## 🆘 Need Help?

**Problem**: Can't install packages
**Solution**: Make sure you have Node.js 18+ installed
```bash
node --version  # Should show v18 or higher
```

**Problem**: Port 5173 already in use
**Solution**: Use a different port
```bash
npm run dev -- --port 3000
```

**Problem**: Projects page is empty
**Solution**: Update `VITE_GITHUB_USERNAME` in `.env` file

**Problem**: Contact form doesn't work
**Solution**: Configure EmailJS (see SETUP.md) or temporarily disable it

## 🎨 Quick Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```js
primary: {
  light: '#3b82f6',  // ← Your brand color
  dark: '#60a5fa',
}
```

### Change Personal Info
- **Home**: `src/pages/Home.jsx`
- **About**: `src/pages/About.jsx`
- **Social Links**: `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Add Blog Posts
1. Add metadata to `src/pages/Blog.jsx`
2. Add content to `src/pages/BlogPost.jsx`
3. See BLOG_GUIDE.md for details

## 🚢 Ready to Deploy?

### Option 1: Netlify (Easiest)
```bash
npm run build
# Then drag the 'dist' folder to netlify.com/drop
```

### Option 2: Vercel
```bash
npm run build
# Then deploy via Vercel dashboard or CLI
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## 📊 Project Status

| Feature | Status |
|---------|--------|
| React Setup | ✅ Complete |
| Pages (6) | ✅ Complete |
| Components | ✅ Complete |
| GitHub API | ✅ Complete |
| Dark/Light Mode | ✅ Complete |
| Blog System | ✅ Complete |
| Contact Form | ⚙️ Needs EmailJS config |
| SEO | ✅ Complete |
| Responsive | ✅ Complete |
| Animations | ✅ Complete |
| Documentation | ✅ Complete |
| Deploy Configs | ✅ Complete |

## 🎯 Your Next Steps

1. **Right Now** (5 min):
   ```bash
   npm install
   npm run dev
   ```

2. **Today** (30 min):
   - Update personal information
   - Customize colors
   - Add 1-2 blog posts

3. **This Week** (1 hour):
   - Configure EmailJS
   - Add more content
   - Deploy to Netlify/Vercel

4. **Ongoing**:
   - Write blog posts regularly
   - Update projects (automatic from GitHub)
   - Share your site!

## 💡 Pro Tips

1. **Test First**: Run `npm run dev` and check everything locally before deploying
2. **Git Commit**: Save your changes frequently with Git
3. **Keep Learning**: Check out the full documentation for advanced features
4. **Have Fun**: This is YOUR portfolio - make it unique!

## 📞 Support

- 📖 **Documentation**: Check the 8 detailed guides in this folder
- 🐛 **Bug Reports**: Open an issue on GitHub
- 💬 **Questions**: GitHub Discussions
- 🌟 **Showcase**: Share your deployed site!

---

## 🎉 You're Ready to Go!

This is a fully functional, production-ready personal blog and portfolio.

**Current Status**: ✅ All code complete, ready to customize and deploy!

Choose one of the documentation files above and let's get started! 🚀

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**

