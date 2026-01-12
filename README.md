# Sudhir Kumar Singh - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, inspired by Brittany Chiang's design. This portfolio showcases my work as a Full-Stack Developer and AI & Data Science enthusiast.

## 🚀 Features

- **Modern Design**: Dark theme with green accent colors
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Typewriter Effect**: Dynamic text animation in hero section
- **Contact Form**: EmailJS integration for contact functionality
- **Interactive Components**: Hover effects and smooth scrolling
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS
- **Typewriter**: React Typed

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/S07singh/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the Contact component with your EmailJS credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, and description
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/CursorLight.jsx` - Cursor light
- `src/components/Projects.jsx` - Project information
- `src/components/Contact.jsx` - Contact information
- `src/components/Navbar.jsx` - Navbar information
- `src/components/Footer.jsx` - Footer content

### Styling
- Colors can be customized in `tailwind.config.js`
- Fonts can be changed in `src/index.css`
- Component styles are in individual component files

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key
5. Update the Contact component with your credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Sections

1. **Hero**: Introduction with typewriter effect
2. **About**: Personal information and highlights
3. **Skills**: Technology stack with icons
4. **Projects**: Featured projects with links
5. **Contact**: Contact form and information
6. **Footer**: Social links and copyright

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sudhir-singh/Portfolio/issues).

## 📞 Contact

- **Email**: sudhirsingh3923@gmail.com
- **LinkedIn**: [sudhir-singh-ai](https://linkedin.com/in/sudhir-singh-ai)
- **GitHub**: [sudhir-singh](https://github.com/sudhir-singh)
- **Location**: Pune, India

---

Made with ❤️ by Sudhir Kumar Singh
