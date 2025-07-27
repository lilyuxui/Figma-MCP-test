# Nexcent Landing Page

A modern, responsive landing page built with Angular and Bootstrap, based on the Figma design for Nexcent - a membership management platform.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI**: Clean, minimal design with smooth animations
- **Component-Based**: Modular Angular components for easy maintenance
- **Custom Styling**: Tailored CSS with CSS custom properties
- **Interactive Elements**: Hover effects and smooth transitions

## Sections

1. **Header**: Fixed navigation with logo and menu
2. **Hero Section**: Main headline with call-to-action
3. **Clients Section**: Showcase of client logos
4. **Community Section**: Three feature cards for different user types
5. **Unlock Section**: Feature highlight with mobile illustration
6. **Achievements Section**: Statistics and metrics
7. **Calendar Section**: Feature highlight with calendar illustration
8. **Customers Section**: Customer testimonial with client logos
9. **Community Updates**: Blog articles section
10. **Footer**: Company information and newsletter signup

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Angular CLI globally** (if not already installed):
   ```bash
   npm install -g @angular/cli
   ```

## Development

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open your browser** and navigate to `http://localhost:4200`

3. **The application will automatically reload** if you change any of the source files

## Build

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **The build artifacts will be stored in the `dist/` directory**

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero-section/
│   │   ├── clients-section/
│   │   ├── community-section/
│   │   ├── unlock-section/
│   │   ├── achievements-section/
│   │   ├── calendar-section/
│   │   ├── customers-section/
│   │   ├── community-updates/
│   │   └── footer/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
├── styles.css
└── index.html
```

## Technologies Used

- **Angular 16**: Frontend framework
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icons
- **Inter Font**: Typography from Google Fonts

## Customization

### Colors
The color scheme is defined in CSS custom properties in `src/styles.css`:
- Primary: `#4CAF4F` (Green)
- Text Dark: `#4D4D4D`
- Text Light: `#717171`
- Background Light: `#F5F7FA`

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 992px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. 