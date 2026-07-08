// Application-wide constants (routes, API base URLs, booking limits, etc.)
export const API_BASE_URL = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/course-files/main/little-lemon-data';
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  MENU: '/menu',
  BOOKING: '/booking',
  CONFIRMED_BOOKING: '/confirmed-booking',
  ORDER_ONLINE: '/order-online',
  LOGIN: '/login',
};
export const BOOKING = {
  MIN_GUESTS: 1,
  MAX_GUESTS: 10,
  MIN_DATE: new Date().toISOString().split('T')[0],
  OCCASIONS: ['Birthday', 'Anniversary', 'Engagement', 'Other'],
};
