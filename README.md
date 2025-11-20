# Minimalist Portfolio Website

A clean, minimalist portfolio website inspired by modern design principles. Simple, fast, and easy to customize.

## 🚀 Quick Start

### Step 1: Customize Your Information

1. **Update `index.html`**:
   - Replace "Your Name" with your actual name
   - Update the LinkedIn, GitHub, and Blog links with your profiles
   - Customize the introduction text in the `.intro` section
   - Update your experience section with your work history
   - Replace the contact handle/link

2. **Add Your Profile Photo**:
   - Add a square profile photo named `profile.jpg` to the root directory
   - Recommended size: 400x400px or larger (will be displayed as 120x120px)
   - The image should be a square for best results

### Step 2: Test Locally

1. **Open the file**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

### Step 3: Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/updatedPortfolio/`

3. **Custom Domain (Optional)**:
   - If you have a `CNAME` file, add your custom domain there
   - Update your domain's DNS settings to point to GitHub Pages

### Step 4: Customize Styling (Optional)

Edit `styles.css` to customize:
- Colors: Change the CSS variables in `:root`
- Fonts: Update the font-family
- Spacing: Adjust padding and margins
- Layout: Modify the container max-width

## 📁 File Structure

```
updatedPortfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── profile.jpg         # Your profile photo (add this)
├── README.md           # This file
└── CNAME               # Custom domain (if applicable)
```

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --text-color: #333;           /* Main text color */
    --link-color: #0066cc;        /* Link color */
    --link-hover-color: #0052a3;  /* Link hover color */
    --bg-color: #ffffff;          /* Background color */
    --border-color: #e0e0e0;      /* Border color */
}
```

### Adding More Sections

You can add more sections to `index.html`:

```html
<div class="experience-section">
    <h2>Projects</h2>
    <p>Description of your projects...</p>
</div>
```

### Responsive Design

The site is fully responsive and will adapt to:
- Desktop (800px+)
- Tablet (768px)
- Mobile (480px)

## 🔧 Troubleshooting

### Profile Image Not Showing
- Make sure `profile.jpg` is in the same directory as `index.html`
- Check that the filename matches exactly (case-sensitive)
- Ensure the image file is not corrupted

### Links Not Working
- Verify all URLs in the `<a>` tags are correct
- Make sure external links include `https://` or `http://`
- Check that `target="_blank"` and `rel="noopener noreferrer"` are present for security

### Styling Issues
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for any CSS errors
- Ensure `styles.css` is in the same directory as `index.html`

## 📝 Content Template

Here's a template for your experience section:

```html
<p>I am currently a <strong>Your Role</strong> at <strong>Company Name</strong>, 
helping build [what you do].</p>

<p>Previously, I helped build [what you did] at <strong>Previous Company</strong>.</p>

<p>I also helped build [another project] at <strong>Another Company</strong>.</p>

<p>I graduated from the <strong>University Name</strong> in <strong>Year</strong>.</p>
```

## 🌐 Deployment Options

### GitHub Pages (Free)
- Follow Step 3 above
- Free hosting with custom domain support

### Netlify (Free)
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live instantly!

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 📄 License

Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request.

---

**Need help?** Check the troubleshooting section or open an issue on GitHub.
