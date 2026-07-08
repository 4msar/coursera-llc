# Little Lemon Restaurant

A React-based table booking application for Little Lemon, a place to eat and enjoy the food.

Built as the **Meta Front-End Developer Capstone Project** from **Coursera**

## Features

- **Table Booking** — Select date, time, guests, occasion, and seating preference
- **Real-time Availability** — Available time slots update when the date changes
- **Form Validation** — Client-side validation with accessible error messages
- **Confirmation** — Booking summary displayed after successful submission
- **Responsive Design** — Mobile-first layout adapts to all screen sizes
- **Keyboard Accessible** — Full keyboard navigation with visible focus indicators
- **Semantic HTML** — Accessible structure with ARIA labels and roles

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library with functional components and hooks |
| **React Router v6** | Client-side routing |
| **Jest + React Testing Library** | Unit and integration tests |
| **CSS (custom properties)** | Mobile-first, responsive styling with design tokens |

---

## Installation

### Prerequisites

- Node.js >= 18
- npm >= 9

### Setup

```bash
# Clone the repository
git clone https://github.com/4msar/coursera-llc.git little-lemon
cd little-lemon

# Install dependencies
npm install

# Start the development server
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in watch mode. All 100+ tests validate:

- Component rendering and behavior
- Form validation logic
- Reducer state management
- Navigation flows
- API utility functions

### `npm run build`

Builds the app for production to the `build/` folder.

---

## Project Structure

```
little-lemon/
├── public/
│   ├── index.html              # SEO-optimized HTML entry
│   └── manifest.json
├── src/
│   ├── assets/                 # Static images and icons
│   │   ├── icons/
│   │   └── images/
│   ├── components/             # Reusable UI components
│   │   ├── BookingForm/        # Table booking form
│   │   ├── Button/             # Reusable button (primary/secondary)
│   │   ├── Card/               # Generic card component
│   │   ├── ErrorBoundary/      # React error boundary
│   │   ├── ErrorMessage/       # Alert banner with retry
│   │   ├── Footer/             # Site footer with nav, contact, hours
│   │   ├── Header/             # Site header with logo
│   │   ├── Hero/               # Homepage hero banner
│   │   ├── Input/              # Form input with validation
│   │   ├── LoadingSpinner/     # Animated loading indicator
│   │   ├── Navbar/             # Responsive navigation with hamburger
│   │   ├── RadioGroup/         # Radio button group
│   │   ├── Rating/             # Star rating display
│   │   ├── Select/             # Dropdown select with validation
│   │   ├── SpecialCard/        # Menu special card
│   │   ├── Specials/           # Weekly specials section
│   │   ├── TestimonialCard/    # Review card with rating
│   │   └── Testimonials/       # Customer testimonials section
│   ├── context/
│   │   └── BookingContext.js   # Booking state management
│   ├── hooks/
│   │   └── useFormValidation.js # Form validation hook
│   ├── pages/
│   │   ├── About/
│   │   ├── BookingPage/        # Booking form page
│   │   ├── ConfirmedBooking/   # Booking confirmation page
│   │   ├── Home/               # Landing page
│   │   ├── Login/
│   │   ├── Menu/
│   │   ├── NotFound/           # 404 page
│   │   └── OrderOnline/
│   └── utils/
│       ├── api.js              # fetchAPI, submitAPI
│       ├── constants.js        # App-wide constants
│       ├── helpers.js          # formatDate, capitalize
│       ├── reducers.js         # initializeTimes, updateTimes
│       └── validation.js       # validateBooking
```

---

## Booking Flow

1. User navigates to **Reservations** page
2. Picks a date — available time slots update automatically via `useReducer`
3. Selects time, guests, occasion, and seating preference
4. Form validates all fields — errors appear inline with `aria-invalid` and `role="alert"`
5. On successful validation, `submitAPI` is called
6. Booking is stored in context and user is redirected to **Confirmation** page
7. Confirmation page displays booking details or redirects to booking if no data

---

## Design System

### Colors

| Color | Value | Usage |
|---|---|---|
| Primary Green | `#495e57` | Navbar, Hero, secondary buttons |
| Primary Yellow | `#f4ce14` | CTA buttons, ratings, accents |
| Secondary Orange | `#ee9972` | Special card prices |
| Highlight Light | `#edefee` | Card backgrounds, detail tiles |
| Highlight Dark | `#333` | Main text |

### Typography

- **Headings:** Markazi Text (serif)
- **Body:** Karla (sans-serif)

---

## Deployment

### Build for Production

```bash
npm run build
```

The optimized build is in the `build/` directory, ready to deploy to any static hosting.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

```bash
npm install -g gh-pages
npm run build
npx gh-pages -d build
```

## License

MIT
