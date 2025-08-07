# 🚀 Deployment Guide - Τσώνας Menu

## Pre-Deployment Checklist

### ✅ Essential Updates
- [ ] Update phone number in `script.js` (line ~1720)
- [ ] Update domain URL in meta tags (`index.html` lines 15, 20, 25)
- [ ] Test all functionality on mobile devices
- [ ] Optimize images (compress PNG files)
- [ ] Test loading states and error handling

### ✅ SEO & Meta Tags
- [x] Added comprehensive meta tags
- [x] Added Open Graph tags for social sharing
- [x] Added Twitter Card tags
- [x] Added favicon and apple-touch-icon

### ✅ Performance Optimizations
- [x] Smooth scrolling for mobile
- [x] Loading states and error handling
- [x] Optimized CSS animations
- [x] Mobile-first responsive design

## Deployment Options

### Option 1: GitHub Pages (Free)
```bash
# Create a new repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/tsonas-menu.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Go to Settings > Pages > Source: Deploy from branch > main
```

### Option 2: Netlify (Free)
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Or connect your GitHub repository
3. Automatic deployments on every push

### Option 3: Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts

### Option 4: Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Test all functionality

## Post-Deployment Checklist

### ✅ Testing
- [ ] Test on multiple devices (iPhone, Android, tablets)
- [ ] Test all menu categories and items
- [ ] Test custom order builder
- [ ] Test cart functionality
- [ ] Test phone call functionality
- [ ] Test loading and error states

### ✅ Performance
- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Test loading times

### ✅ SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Test social media sharing
- [ ] Check meta tags with Facebook Debugger
- [ ] Verify mobile-friendly test

## Analytics & Monitoring

### Google Analytics
Add this before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Monitoring
Consider adding error tracking:
- Sentry (free tier available)
- LogRocket
- Bugsnag

## Maintenance

### Regular Updates
- [ ] Update menu items and prices
- [ ] Check for broken links
- [ ] Monitor analytics
- [ ] Test on new devices/browsers

### Security
- [ ] Keep dependencies updated
- [ ] Monitor for security vulnerabilities
- [ ] Regular backups

## Customization

### Colors
Main colors are defined in `styles.css`:
- Primary: `#ff4b4b` (red)
- Secondary: `#1a1a1a` (dark)
- Accent: `#ffd700` (gold)

### Phone Number
Update in `script.js` line ~1720:
```javascript
const phoneNumber = 'tel:+30YOUR_PHONE_NUMBER';
```

### Domain
Update in `index.html`:
- Line 15: `og:url`
- Line 20: `twitter:url`
- Line 25: `twitter:url`

## Support

For issues or questions:
1. Check browser console for errors
2. Test on different devices
3. Verify all files are uploaded correctly
4. Check file permissions on server

---

**Ready for Production! 🎉**
