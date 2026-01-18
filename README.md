# 🍽️ Food Lover - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript. Browse and order delicious food and drinks with an easy-to-use shopping cart and checkout system.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [File Descriptions](#file-descriptions)
- [How to Contribute](#how-to-contribute)

---

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Food Menu** - Browse and order from a variety of food items
- **Drinks & Desserts** - Separate section for beverages and sweet treats
- **Shopping Cart** - Add items, update quantities, and remove products
- **Multiple Payment Options** - Vodafone Cash, Visa Card, or Cash on Delivery
- **User Authentication** - Sign up and manage your profile
- **Dashboard** - View user information and quick access to menus
- **Contact Page** - Get in touch with the restaurant
- **LocalStorage** - Save cart and user data locally

---

## 📂 Project Structure

```
TitansProject/
├── index.html              # Home page with hero section and offers
├── food.html               # Food menu page
├── cafe.html               # Drinks and desserts page
├── checkout.html           # Checkout and payment page
├── dashboard.html          # User dashboard
├── contact.html            # Contact us page
├── signup.html             # User registration page
│
├── css/
│   ├── food.css           # Styling for food page
│   ├── cafe.css           # Styling for cafe page
│   ├── contact.css        # Styling for contact page
│   ├── payment.css        # Styling for checkout page
│
├── styles.css             # Main global styles
│
├── menu.js                # Shopping cart management
├── chec.js                # Checkout and payment logic
├── script2.js             # User dashboard logic
│
├── img/                   # Product and design images
│   ├── logo.png
│   ├── pizzea.png
│   ├── burger.png
│   └── ... (other images)
│
└── README.md              # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or backend required - works entirely on the client side

### Installation

1. **Clone or download** the project folder
2. **Open `index.html`** in your web browser
3. **Start browsing** the menu and adding items to your cart

### Quick Start

```bash
# Simply open the index.html file in your browser
# No build process or installation required!
```
---
## 📖 Usage

### 1. **Browsing the Menu**
   - Visit the **Home** page to see featured offers
   - Click **"Food"** to view the food menu
   - Click **"Drinks & Desserts"** to view beverages and desserts

### 2. **Adding Items to Cart**
   - Click the **"Add Order"** button on any item
   - Items are saved to your browser's local storage
   - View the total in the cart icon

### 3. **Checkout Process**
   - Click **"Go to Checkout"** button
   - Enter your delivery details (Name, Phone, Address)
   - Choose a payment method:
     - **Vodafone Cash** - Upload payment proof
     - **Visa Card** - Enter card details
     - **Cash on Delivery** - Pay upon receipt
   - Click **"Confirm & Pay"** to complete the order

### 4. **User Account**
   - Go to **Dashboard** (user icon in top right)
   - Create a new account or view existing profile
   - Quick access to Food, Drinks, and Orders

### 5. **Contact & Support**
   - Visit the **Contact** page for:
     - Phone number and address
     - WhatsApp direct messaging
     - Working hours
     - Contact form

---

## 📄 Pages

### Home (index.html)
- Hero section with welcome message
- Special offers showcase
- Quick navigation to Food and Drinks menus
- Footer with links and social media

### Food Menu (food.html)
- 6 food items with descriptions and prices
- High-quality product images
- Quick "Add Order" buttons
- "Go to Checkout" button

### Drinks & Desserts (cafe.html)
- 6 drink and dessert items
- Hot and cold beverages
- Sweet treats and desserts
- Add to cart functionality

### Checkout (checkout.html)
- Cart summary with item quantities
- Customer information form
- Payment method selection
- Order confirmation

### Dashboard (dashboard.html)
- Welcome message with user name
- Display user email and phone
- Quick links to menus
- Logout button

### Contact (contact.html)
- Contact information and location
- WhatsApp contact link
- Operating hours
- Contact form
- Social media links

### Signup (signup.html)
- User registration form
- Profile creation
- Stored in browser local storage

---

## 💻 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling and animations
- **JavaScript (ES6)** - Dynamic functionality and interactivity

### Libraries & Frameworks
- **Bootstrap 5.3.8** - Responsive grid and components
- **Font Awesome 6.5.0** - Icon library
- **Google Fonts (Cairo)** - Arabic and English typography

### Storage
- **LocalStorage API** - Client-side data persistence

---

## 📝 File Descriptions

### HTML Files
| File | Purpose |
|------|---------|
| `index.html` | Home page with hero and featured offers |
| `food.html` | Food menu and ordering page |
| `cafe.html` | Drinks and desserts menu |
| `checkout.html` | Shopping cart and payment processing |
| `dashboard.html` | User profile and quick navigation |
| `contact.html` | Contact information and messaging |
| `signup.html` | User registration and login |

### CSS Files
| File | Purpose |
|------|---------|
| `styles.css` | Global styles for all pages |
| `css/food.css` | Food page specific styling |
| `css/cafe.css` | Cafe page specific styling |
| `css/contact.css` | Contact page specific styling |
| `css/payment.css` | Checkout page specific styling |

### JavaScript Files
| File | Purpose |
|------|---------|
| `menu.js` | Shopping cart add/remove, checkout navigation |
| `chec.js` | Cart display, quantity updates, payment handling |
| `script2.js` | User registration, profile display, logout |
| `calculate.js` | Project code statistics and analysis |

---

## 🎨 Customization

### Change Colors
Edit `styles.css` to modify the color scheme:
```css
.logo span {
  color: #F7C85A;  /* Gold color - change this */
}

nav a:hover {
  color: #F7C85A;  /* Change hover color */
}
```

### Update Menu Items
Edit `food.html` or `cafe.html` to add/remove products:
```html
<button class="btn btn-primary" onclick="addToCart('Product Name', 29.99)">
  Add Order
</button>
```

### Modify Contact Information
Edit `contact.html` with your restaurant details:
- Address
- Phone number
- Working hours
- WhatsApp number

---

## 🔒 Security Notes

- This is a **client-side only** application
- User data is stored in browser **LocalStorage** (not encrypted)
- Payment information should not be entered for real transactions
- For production use, integrate with a proper backend and payment gateway

---

## 🐛 Troubleshooting

### Cart Items Not Saving
- Clear your browser cache and try again
- Check if LocalStorage is enabled in your browser

### Images Not Showing
- Ensure the `img/` folder is in the same directory
- Check image file names match the HTML references

### Links Not Working
- Verify all HTML files are in the project root
- Check for typos in file names (case-sensitive on Linux/Mac)

---

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Microsoft Edge (latest)
- ⚠️ Internet Explorer (not supported)

---

## 🤝 How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Improvement
- Add search functionality
- Implement user reviews and ratings
- Add item customization options
- Create an order history page
- Add real payment integration
- Implement multi-language support

---

## 📞 Support

For questions or issues:
- 📧 Email: support@foodlover.com
- 📱 Phone: +20 1000 000 000
- 💬 WhatsApp: [Contact Us](https://wa.me/201000000000)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

- **Design** - Responsive Bootstrap framework
- **Icons** - Font Awesome
- **Fonts** - Google Fonts (Cairo)
- **Team** - Titans Project

---

## 📊 Project Statistics

- **HTML Files**: 7
- **CSS Files**: 5
- **JavaScript Files**: 4
- **Total Pages**: 7+
- **Menu Items**: 12+
- **Responsive Design**: Yes
- **Mobile Friendly**: Yes

---

## 🎯 Roadmap

### Phase 1 (Completed)
- ✅ Basic website structure
- ✅ Menu pages with products
- ✅ Shopping cart functionality
- ✅ User authentication system

### Phase 2 (Planned)
- 🔄 Backend integration
- 🔄 Real payment processing
- 🔄 Order history tracking
- 🔄 Admin dashboard

### Phase 3 (Future)
- 📋 Mobile app version
- 📋 API development
- 📋 Database integration
- 📋 Advanced analytics

---

**Made with ❤️ by the Titans Team**

*Last Updated: December 2025*

---

## ⚡ Quick Links

- [Visit Homepage](index.html)
- [Browse Food Menu](food.html)
- [View Drinks & Desserts](cafe.html)
- [Contact Us](contact.html)
- [Create Account](signup.html)

---

**Enjoy your delicious meal! 🍔🍕🍰☕**
