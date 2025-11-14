# BusFi Kitchen Website - HTML/CSS/JS Version

This package contains a complete, standalone website converted from React to plain HTML, CSS, and JavaScript.

## Files Included

- **index.html** - Main HTML file with all page sections
- **styles.css** - Complete styling for the entire website
- **script.js** - JavaScript for interactivity and Supabase integration
- **README.md** - This file

## Features

- Fully responsive design (mobile, tablet, desktop)
- Yellow header with dark text as requested
- About section with company stats
- Services section with 6 service offerings
- Portfolio section with 6 project examples
- Testimonials section with 6 client reviews
- Contact form with Supabase database integration
- Privacy policy section
- Footer with contact information and links

## How to Use

### Option 1: Local Testing
1. Open `index.html` in any modern web browser
2. The website should work immediately with all features

### Option 2: Web Hosting
1. Upload all three files (index.html, styles.css, script.js) to your web hosting service
2. Ensure all files are in the same directory
3. Access the website via your domain

### Popular Hosting Options:
- **Netlify** (Free): Drag and drop the folder at netlify.com/drop
- **Vercel** (Free): Connect via GitHub or drag and drop
- **GitHub Pages** (Free): Push to a GitHub repository and enable Pages
- **AWS S3** (Paid): Upload to an S3 bucket configured for static hosting
- **Traditional Web Hosting**: Upload via FTP/SFTP to public_html or www folder

## Supabase Integration

The contact form is connected to a Supabase database. The configuration is already included in `script.js`:

- **Database URL**: https://qlohspxfsxomitrdufln.supabase.co
- **Table**: `leads`
- Form submissions are automatically saved to the database

### Contact Form Fields:
- Name (required)
- Email (required)
- Phone (required)
- Location (optional)
- Project Type (required)
- Budget Range (optional)
- Timeline (optional)
- Project Details (optional)
- Consent checkbox (required)

## Browser Compatibility

This website works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors:
Edit `styles.css` - Search for color codes:
- Yellow header: `#facc15` (search for this hex code)
- Amber accents: `#f59e0b`
- Dark backgrounds: `#0f172a`

### Changing Content:
- **Text content**: Edit `index.html`
- **Services/Portfolio/Testimonials data**: Edit the arrays in `script.js`
- **Images**: Replace image URLs in `script.js` (portfolio) or `index.html` (hero)

### Changing Supabase Connection:
Edit the constants at the top of `script.js`:
```javascript
const SUPABASE_URL = 'your-supabase-url';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

## Phone Number

The site displays: **1-800-KITCHEN (1-800-548-2436)**

To change this, search for "1-800-548-2436" in both `index.html` and replace all instances.

## No Dependencies Required

This website uses:
- Pure CSS (no frameworks like Bootstrap)
- Vanilla JavaScript (no jQuery)
- Supabase JS library (loaded via CDN)

The only external resource is the Supabase library loaded from CDN in index.html:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

## Performance

- Optimized for fast loading
- Uses responsive images from Pexels
- Minimal JavaScript
- No external CSS frameworks

## Support

For questions about hosting or customization, refer to your hosting provider's documentation.

## License

This is a custom website for BusFi Kitchen Solutions.
