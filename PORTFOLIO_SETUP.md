# Portfolio Website Customization Guide

Your portfolio website has been created with a modern design inspired by cl­airie-bui.vercel.app. Here's how to customize it with your information:

## 📋 Quick Start

The website is built with:
- **Next.js 16.2.3** - React framework
- **TailwindCSS 4** - Styling
- **TypeScript** - Type safety

## 🎨 Customization Steps

### 1. Update Your Personal Information

Edit `src/data/portfolio.ts`:
```typescript
export const portfolioInfo: PortfolioInfo = {
  name: 'Sophie Bui',                    // Your full name
  headline: 'HELLO, I\'M SOPHIE BUI',    // Hero title
  tagline: 'Your professional tagline...', // Brief description
  description: 'Portfolio description...', // Longer intro
  cta: 'CONTINUE',                      // Call-to-action button text
  cvLink: '/resume.pdf',                // Link to your CV
};
```

### 2. Add Your Projects

Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description...',
    tools: ['Tool 1', 'Tool 2'],
    link: 'https://github.com/yourlink',
    imageUrl: '/project-image.jpg',  // Optional
  },
  // Add more projects...
];
```

### 3. Update Contact Information

Edit `src/data/contact.ts`:
```typescript
export const contactInfo: ContactInfo = {
  location: 'Your City, Country',
  phone: '+1 (555) 123-4567',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourname',
  github: 'https://github.com/yourname',
};
```

## 📧 Email Form Configuration

To enable the contact form to actually send emails, integrate with an email service:

### Option 1: EmailJS (Recommended - No backend needed)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Update `src/components/ContactSection.tsx`:
```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

### Option 2: Create an API Route
Create `src/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  // Send email using your preferred service (Sendgrid, Resend, etc.)
  return Response.json({ success: true });
}
```

## 🖼️ Add Project Thumbnail Images

The project cards now display thumbnail images at the top!

### Easy Instructions:

1. **Prepare Your Images**
   - Screenshot or create images for each project (recommended: 600x400px or 800x600px)
   - Save as: `.jpg`, `.png`, or `.webp`

2. **Add Images to Your Project**
   - Copy your images to the `public/` folder
   - Example: `public/project-1.jpg`, `public/project-2.jpg`

3. **Link Images in Your Projects**
   - Edit `src/data/projects.ts`
   - Add the `imageUrl` field for each project:
   ```typescript
   {
     id: '1',
     title: 'My Dashboard Project',
     description: 'Created an analytics dashboard...',
     tools: ['Power BI', 'SQL'],
     link: 'https://github.com/yourlink',
     imageUrl: '/project-1.jpg',  // ← Add this line
   }
   ```

4. **Result**
   - Images will appear at the top of each project card
   - Images have a hover effect (slight zoom)
   - If no image is provided, the card still displays normally

### Image Tips:
- **Best size**: 800x600 or 600x400 pixels
- **File format**: JPG/PNG work best (WebP is fastest)
- **File size**: Keep under 500KB for fast loading
- You can use tools like Figma, Canva, or simple screenshots

That's it! The ProjectCard component automatically handles displaying your images. 🎉

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Deploy (it's automatic!)

### Other Options
- Netlify
- GitHub Pages
- Any static hosting

## 📝 Resume/CV

1. Add your resume PDF to `public/resume.pdf`
2. Update the `cvLink` in `src/data/portfolio.ts`
3. The "DOWNLOAD MY CV" button will link to it

## 🎯 Component Structure

- `HeroSection` - Welcome/intro screen
- `ProjectsSection` - Projects showcase grid
- `ProjectCard` - Individual project card
- `ContactSection` - Contact form + info
- `Footer` - Footer with links

## 🛠️ Running the Project

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Styling

The site uses TailwindCSS. To modify colors/styles, edit the component files or update `src/app/globals.css`.

Key color scheme:
- **Primary**: Black (#000000)
- **Background**: White/Gray
- **Accents**: Blue hover effects

## 📱 Responsive Design

The site is fully responsive and mobile-friendly. Test on different screen sizes during development.

## ✅ Next Steps

1. Update all data files with your information
2. Add your projects and links
3. Configure email service for contact form
4. Test all interactive elements
5. Deploy to Vercel or your hosting platform

---

**Need help?** All components are fully commented and use TypeScript for better IDE assistance.
