# Jharoka Palace Website

A beautiful, fully-featured website for Jharoka Palace - a premium wedding venue, restaurant, and hotel. This website features elegant design, smooth animations, and a romantic anime-style splash screen.

## Features

### 🎨 Design & Aesthetics
- **Warm Restaurant Color Scheme**: Rich browns, golds, and romantic reds
- **Elegant Typography**: Playfair Display for headings, Montserrat for body text
- **Consistent Branding**: Cohesive design across all pages
- **Professional Layout**: Clean, modern, and sophisticated

### 🎬 Animations & Interactions
- **Anime-Style Splash Screen**: Animated bride and groom tying the knot with floating hearts
- **Particle Effects**: Subtle floating particles on splash screen
- **3D Card Tilt Effects**: Interactive hover effects on cards
- **Smooth Scroll Transitions**: Elegant page navigation
- **Typing Effects**: Dynamic text animations
- **Magnetic Buttons**: Interactive button effects
- **Parallax Scrolling**: Depth effects on scroll
- **Text Scramble Effect**: Interactive heading animations
- **Cursor Trail**: Subtle follow effect
- **Staggered Grid Animations**: Sequential reveal animations

### 📄 Pages
1. **Home Page** (`index.html`)
   - Hero section with call-to-action buttons
   - Service features overview
   - About section with statistics
   - Testimonials carousel
   - Contact preview

2. **Restaurant Page** (`restaurant.html`)
   - Interactive menu with category filtering
   - Chef's special highlights
   - Online reservation system
   - Restaurant gallery
   - Menu items with pricing and dietary tags

3. **Wedding Palace Page** (`wedding.html`)
   - Venue showcase with pricing
   - Wedding services overview
   - Photo gallery
   - Wedding planning timeline
   - Inquiry form for bookings

4. **Hotel Page** (`hotel.html`)
   - Room and suite descriptions
   - Amenities showcase
   - Guest experiences
   - Online booking system
   - Room availability checker

5. **Contact Page** (`contact.html`)
   - Comprehensive contact information
   - Contact form with validation
   - FAQ section
   - Social media links
   - Map integration placeholder

### 🛠️ Technical Features
- **Responsive Design**: Mobile-first approach, works on all devices
- **Form Validation**: Client-side validation for all forms
- **Intersection Observer**: Performance-optimized scroll animations
- **CSS Variables**: Easy customization of colors and themes
- **Modern CSS**: Flexbox, Grid, gradients, and animations
- **Vanilla JavaScript**: No dependencies, fast loading
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Color Scheme

- **Primary Color**: #8B4513 (Saddle Brown) - Warm restaurant feel
- **Secondary Color**: #D4AF37 (Gold) - Luxury and elegance
- **Accent Color**: #C41E3A (Cardinal Red) - Romance and passion
- **Light Color**: #FFF8DC (Cornsilk) - Warm white background
- **Dark Color**: #2C1810 (Dark Brown) - Rich contrast

## File Structure

```
jharoka palace website/
├── index.html          # Home page
├── restaurant.html     # Restaurant page
├── wedding.html        # Wedding palace page
├── hotel.html          # Hotel page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## How to Use

1. **Open the Website**
   - Simply open `index.html` in any modern web browser
   - No server or build process required

2. **Navigation**
   - Use the navigation bar to switch between pages
   - Mobile menu is accessible via the hamburger icon

3. **Forms**
   - All forms include validation
   - Contact forms show confirmation messages
   - Booking forms calculate estimated totals

4. **Animations**
   - Splash screen plays automatically on page load
   - Scroll animations trigger as you navigate
   - Hover effects respond to mouse movement

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D4AF37;
    --accent-color: #C41E3A;
    /* ... */
}
```

### Modifying Content
- Edit HTML files directly to change text, images, and structure
- Update placeholder images with real photos
- Modify menu items, room descriptions, and pricing

### Adding Real Images
Replace the SVG placeholders with actual images:
```html
<!-- Replace this -->
<div class="image-placeholder">🏰</div>

<!-- With this -->
<img src="path/to/image.jpg" alt="Description">
```

### Integrating Backend
- Connect forms to your preferred backend service
- Add database integration for bookings
- Implement real payment processing
- Add content management system

## Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Opera
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS animations
- Lazy loading for images
- Efficient JavaScript (no heavy frameworks)
- Fast initial page load
- Smooth 60fps animations

## Future Enhancements

- Real image gallery
- Video background options
- Multi-language support
- Advanced booking system
- Payment gateway integration
- Admin dashboard
- Customer reviews system
- Virtual tour integration

## Credits

- Fonts: Google Fonts (Playfair Display, Montserrat)
- Icons: Emoji-based (no external icon libraries needed)
- Design: Custom-built for Jharoka Palace

## Support

For issues or questions about the website, please contact the development team or refer to the inline code comments.

---

**Note**: This is a frontend-only website. For production use, integrate with appropriate backend services for form processing, bookings, and content management.