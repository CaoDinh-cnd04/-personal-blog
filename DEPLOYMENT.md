# Deployment Guide

This guide will walk you through deploying your Personal Blog & Portfolio to Netlify and Vercel.

## Prerequisites

- A GitHub account with your project repository
- Your project pushed to GitHub
- Environment variables configured (EmailJS, GitHub username, etc.)

## Option 1: Deploy to Netlify

Netlify is a popular platform for deploying static sites and single-page applications.

### Method A: Netlify Dashboard (Recommended for Beginners)

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in with GitHub

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (set in netlify.toml automatically)

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_GITHUB_USERNAME=CaoDinh-cnd04
     VITE_SITE_URL=https://your-site.netlify.app
     ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://your-site.netlify.app`

6. **Configure Custom Domain (Optional)**
   - Go to Domain settings
   - Add your custom domain
   - Update DNS records as instructed

### Method B: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify in Your Project**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name

4. **Set Environment Variables**
   ```bash
   netlify env:set VITE_EMAILJS_SERVICE_ID your_service_id
   netlify env:set VITE_EMAILJS_TEMPLATE_ID your_template_id
   netlify env:set VITE_EMAILJS_PUBLIC_KEY your_public_key
   netlify env:set VITE_GITHUB_USERNAME CaoDinh-cnd04
   netlify env:set VITE_SITE_URL https://your-site.netlify.app
   ```

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Netlify Configuration

The project includes a `netlify.toml` file with:
- Build configuration
- Redirect rules for SPA routing
- Security headers
- Cache control for assets

## Option 2: Deploy to Vercel

Vercel provides excellent performance and automatic deployments from Git.

### Method A: Vercel Dashboard (Recommended for Beginners)

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

2. **Import Your Repository**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - Keep other settings as default

4. **Add Environment Variables**
   - Expand "Environment Variables"
   - Add the following:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_GITHUB_USERNAME=CaoDinh-cnd04
     VITE_SITE_URL=https://your-project.vercel.app
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

6. **Configure Custom Domain (Optional)**
   - Go to project settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method B: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts to set up your project
   - For production deployment:
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID
   vercel env add VITE_EMAILJS_TEMPLATE_ID
   vercel env add VITE_EMAILJS_PUBLIC_KEY
   vercel env add VITE_GITHUB_USERNAME
   vercel env add VITE_SITE_URL
   ```

### Vercel Configuration

The project includes a `vercel.json` file with:
- Build configuration
- Rewrite rules for SPA routing
- Security headers
- Cache control for assets

## Post-Deployment Checklist

After deploying to either platform:

### 1. Update Site URL

Update your site URL in:
- Environment variable `VITE_SITE_URL`
- `public/sitemap.xml` - replace `https://yourdomain.com` with your actual URL
- `public/robots.txt` - update the Sitemap URL
- `index.html` - update Open Graph URLs

### 2. Configure EmailJS

If using the contact form:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Add your deployment domain to "Allowed Domains"
3. Test the contact form on your live site

### 3. Test Your Site

- [ ] All pages load correctly
- [ ] Dark/Light mode toggle works
- [ ] GitHub projects are loading
- [ ] Contact form works (if configured)
- [ ] Links work correctly
- [ ] Mobile responsive design
- [ ] SEO meta tags are present

### 4. Update SEO

1. **Submit Sitemap to Google**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Submit sitemap: `https://yoursite.com/sitemap.xml`

2. **Test SEO**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Check Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

### 5. Set Up Analytics (Optional)

Add analytics to track visitors:

1. **Google Analytics**
   ```jsx
   // Add to index.html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Vercel Analytics** (if using Vercel)
   - Enable in Vercel dashboard (free for hobby plan)

3. **Netlify Analytics** (if using Netlify)
   - Enable in Netlify dashboard (paid feature)

## Continuous Deployment

Both Netlify and Vercel support automatic deployments:

### Automatic Deployments

- **Push to main/master**: Triggers production deployment
- **Pull requests**: Creates preview deployments
- **Branch deployments**: Configure branch-specific deployments

### Configure Branch Deployments

**Netlify:**
- Go to Site settings → Build & deploy → Deploy contexts
- Configure which branches to deploy

**Vercel:**
- Automatically deploys all branches
- Configure in project settings if needed

## Custom Domain Setup

### Step 1: Purchase Domain

Purchase a domain from:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Step 2: Configure DNS

**For Netlify:**
1. Add domain in Netlify dashboard
2. Update your domain's nameservers to Netlify's:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

**For Vercel:**
1. Add domain in Vercel dashboard
2. Add DNS records:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### Step 3: Enable HTTPS

Both platforms automatically provision SSL certificates with Let's Encrypt.

## Performance Optimization

After deployment, optimize performance:

### 1. Enable Compression

Both platforms enable gzip/brotli by default.

### 2. Configure Caching

Already configured in `netlify.toml` and `vercel.json`:
- HTML: No cache
- Assets: 1 year cache

### 3. Optimize Images

- Use WebP/AVIF formats
- Compress images with [TinyPNG](https://tinypng.com)
- Consider using Cloudinary or ImageKit for dynamic optimization

### 4. Monitor Performance

- Use Lighthouse in Chrome DevTools
- Check [WebPageTest](https://www.webpagetest.org/)
- Monitor Core Web Vitals

## Troubleshooting

### Build Fails

**Check:**
- Node version (should be 18+)
- All dependencies are in `package.json`
- No syntax errors in code
- Environment variables are set

**Fix:**
```bash
# Locally test production build
npm run build
npm run preview
```

### 404 Errors on Refresh

**Netlify:** Configured in `netlify.toml`
**Vercel:** Configured in `vercel.json`

If still getting 404s:
- Check rewrite/redirect rules
- Ensure SPA fallback is configured

### Environment Variables Not Working

- Variables must be prefixed with `VITE_`
- Rebuild after changing variables
- Check variable names match exactly

### GitHub API Rate Limiting

- Default limit: 60 requests/hour
- Add GitHub Personal Access Token to increase limit
- Cache GitHub data on server-side

## Monitoring and Maintenance

### Monitor Uptime

Free tools:
- [UptimeRobot](https://uptimerobot.com)
- [StatusCake](https://www.statuscake.com)

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update to latest versions
npx npm-check-updates -u
npm install
```

### Backup

- GitHub serves as your code backup
- Both platforms keep deployment history
- Regularly commit and push changes

## Support

If you encounter issues:

1. Check platform status pages:
   - [Netlify Status](https://www.netlifystatus.com/)
   - [Vercel Status](https://www.vercel-status.com/)

2. Consult documentation:
   - [Netlify Docs](https://docs.netlify.com/)
   - [Vercel Docs](https://vercel.com/docs)

3. Check build logs in the platform dashboard

4. Open an issue on GitHub

## Conclusion

You now have a fully deployed personal blog and portfolio! Remember to:

- Keep dependencies updated
- Monitor performance
- Regularly update content
- Share your work on social media

Happy deploying! 🚀

