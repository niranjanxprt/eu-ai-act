# EU AI Act & GDPR Compliance Guide

A comprehensive, interactive guide to understanding the EU AI Act and its intersection with GDPR compliance, designed specifically for startups and SMEs navigating Europe's AI regulatory landscape.

🌐 **Live Website:** [https://niranjanxprt.github.io/eu-ai-act/](https://niranjanxprt.github.io/eu-ai-act/)

## ✨ Features

### 🎯 Interactive Compliance Tools
- **Interactive Compliance Checker** - Answer a series of questions to determine your AI system's risk classification and get personalized compliance requirements
- **Risk Assessment Tool** - Understand which regulatory requirements apply to your specific use case

### 📊 Comprehensive Risk Classification
- **Four-Tier Risk Framework** - Clear categorization of AI systems into Unacceptable, High-Risk, Limited-Risk, and Minimal-Risk levels
- **Detailed Requirements** - Specific compliance obligations for each risk level with deadlines and penalties
- **Expandable Risk Cards** - Interactive cards that provide in-depth information about each risk category

### 🏢 Sector-Specific Guidance
- **Industry Deep-Dives** - Detailed guidance for specific sectors:
  - Healthcare AI Systems
  - Financial Services AI
  - Employment & HR AI
  - Education AI Systems
- **Sector-Specific Requirements** - Tailored compliance information for each industry

### 🔗 GDPR Integration
- **Dual Compliance Overview** - Understanding how GDPR and AI Act work together
- **Comparison Tables** - Side-by-side comparison of GDPR and AI Act requirements
- **Synergy Identification** - How existing GDPR compliance can support AI Act compliance

### 📅 Implementation Timeline
- **Phased Implementation Dates** - Visual timeline showing key deadlines:
  - February 2, 2025 (Prohibited Practices Ban)
  - August 2, 2025 (GPAI & Enforcement)
  - August 2, 2026 (High-Risk AI Deadline)
  - August 2, 2027 (Medical Devices Extension)
- **Live Countdown Timer** - Real-time countdown to the next major deadline

### 💼 SME Support Resources
- **Regulatory Sandboxes** - Information about testing environments for startups
- **Financial Support Programs** - Grants and reduced fees for SMEs
- **Knowledge Resources** - Free templates, tools, and training programs
- **Simplified Documentation** - Startup-friendly compliance frameworks

### 🎨 User Experience
- **Dark Mode Support** - Toggle between light and dark themes
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Smooth scrolling navigation with quick access sidebar
- **Accessible Design** - Built with accessibility best practices

### 📚 Additional Resources
- **FAQ Section** - Answers to common questions about AI Act and GDPR
- **Official Resource Links** - Direct links to EU AI Act documentation and tools
- **Interactive FAQ** - Expandable FAQ items for easy navigation

## 🛠️ Technologies

- **Pure HTML5** - Semantic markup for better SEO and accessibility
- **CSS3** - Modern styling with CSS custom properties and responsive design
- **Vanilla JavaScript** - No frameworks required, fast and lightweight
- **Zero Build Process** - Deploy directly without compilation or bundling
- **GitHub Pages Ready** - Optimized for static hosting

## 📦 Self-Hosting Instructions

This is a static website that can be hosted on any web server. Follow these steps to host it yourself:

### Option 1: Using a Local Web Server

#### Python HTTP Server
```bash
# Navigate to the project directory
cd /path/to/eu-ai-act

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Visit `http://localhost:8000` in your browser

#### Node.js HTTP Server
```bash
# Using npx (no installation required)
npx http-server -p 8000

# Or install globally
npm install -g http-server
http-server -p 8000
```

#### PHP Built-in Server
```bash
php -S localhost:8000
```

### Option 2: Using Nginx

1. Copy the project files to your web server:
```bash
sudo cp -r /path/to/eu-ai-act /var/www/eu-ai-act
```

2. Create or edit Nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/eu-ai-act;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

3. Restart Nginx:
```bash
sudo systemctl restart nginx
```

### Option 3: Using Apache

1. Copy the project files to your web server:
```bash
sudo cp -r /path/to/eu-ai-act /var/www/html/eu-ai-act
```

2. Enable mod_rewrite (if needed):
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

3. Ensure `.htaccess` is configured for clean URLs (optional)

### Option 4: Using Docker

Create a `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t eu-ai-act .
docker run -d -p 8080:80 eu-ai-act
```

### Option 5: Using Cloud Storage (S3, Cloudflare, etc.)

For cloud hosting:

1. **AWS S3 + CloudFront:**
   - Upload all files to an S3 bucket
   - Enable static website hosting
   - Configure CloudFront for CDN

2. **Cloudflare Pages:**
   - Connect your Git repository
   - Cloudflare will automatically build and deploy

3. **Netlify/Vercel:**
   - Drag and drop the folder or connect Git
   - Automatic deployment and HTTPS

### Requirements

- Any modern web server (Nginx, Apache, Caddy, etc.)
- No server-side processing required
- No database needed
- No special server configurations

### File Structure

```
eu-ai-act/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── app.js          # JavaScript functionality
└── README.md       # This file
```

All files are self-contained - just copy them to your web server's document root.

## 📝 License

This project provides general information about the EU AI Act and GDPR. **It is not legal advice.** Consult with qualified legal professionals for specific compliance guidance tailored to your situation.

## 🤝 Contributing

Issues, suggestions, and pull requests are welcome! This is an educational resource to help businesses understand AI regulation.

## 🔗 Links

- **Live Website:** [https://niranjanxprt.github.io/eu-ai-act/](https://niranjanxprt.github.io/eu-ai-act/)
- **Repository:** [https://github.com/niranjanxprt/eu-ai-act](https://github.com/niranjanxprt/eu-ai-act)

---

*Last updated: November 2025*
