# Learning Management System (LMS) Project

A modern Learning Management System built with React, TypeScript, and TailwindCSS. This project offers a clean, responsive interface for educational content delivery, course management, and learning progress tracking.

![LMS Project](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80)

## 🌟 Features

- **Modern UI/UX** - Clean and intuitive user interface built with TailwindCSS
- **Type Safety** - Built with TypeScript for enhanced code quality and developer experience
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Component Architecture** - Well-structured, modular React components
- **Performance Optimized** - Fast loading and rendering

## 📋 Project Structure

```
lms-project/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── home/          # Home page specific components
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── FeaturedCoursesSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   └── shared/        # Shared components across pages
│   │       ├── Footer.tsx
│   │       └── Header.tsx
│   ├── pages/             # Page components
│   │   └── HomePage.tsx
│   ├── App.tsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles (with Tailwind directives)
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MohamedSallam1234/lms-project.git
cd lms-project
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser

## 🛠️ Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - Tool for transforming CSS with JavaScript plugins

## 🖥️ Core Components

### Home Page Components

- **HeroSection** - The main banner section with call-to-action buttons
- **FeaturedCoursesSection** - Showcases top courses with cards and ratings
- **CategoriesSection** - Displays different course categories with icons
- **TestimonialsSection** - Shows student testimonials and reviews
- **StatsSection** - Displays key statistics about the platform

### Shared Components

- **Header** - Navigation header with site logo and menu
- **Footer** - Site footer with additional links and information

## 📱 Responsive Design

The LMS platform is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- User authentication and profile management
- Course search functionality
- Video player integration
- Quiz and assessment features
- Progress tracking
- Payment gateway integration
- Admin dashboard

---

Built with ❤️ by Mohamed Sallam