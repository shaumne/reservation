LUXE - Modern Fine Dining Restaurant Platform

Project Overview
LUXE is a sophisticated full-stack web application built with React.js and Node.js, designed to provide a luxurious digital experience for fine dining establishments. The platform features an elegant user interface with smooth animations, secure authentication, and a comprehensive reservation management system.

Key Features
• User authentication and authorization
• Real-time reservation management 
• Responsive design with elegant animations
• Interactive menu presentation
• Contact form with location integration
• Admin dashboard for business management
• JWT-based security
• PostgreSQL database with Prisma ORM

Tech Stack

Frontend:
• React.js
• Tailwind CSS 
• Framer Motion
• React Router
• Axios
• React Query
• Date-fns

Backend:
• Node.js
• Express.js
• PostgreSQL
• Prisma ORM
• JWT Authentication
• Bcrypt
• Nodemailer

Project Structure

/client
  /src
    /components - Reusable UI components
    /pages - Main application pages
    /hooks - Custom React hooks
    /utils - Helper functions
    /assets - Static assets

/server
  /src
    /routes - API endpoints
    /middleware - Custom middleware
    /config - Configuration files
  /prisma - Database schema and migrations

Installation

1. Clone the repository
git clone (https://github.com/shaumne/reservation)
cd luxe-restaurant

2. Install dependencies

Frontend:
cd client
npm install

Backend:
cd ../server
npm install

3. Environment Setup

Create .env files in both client and server directories:

server/.env:
DATABASE_URL="postgresql://user:password@localhost:5432/luxe_db"
JWT_SECRET="your-secret-key"
PORT=3001

4. Database Setup
cd server
npx prisma migrate dev

5. Start the Application

Backend:
cd server
npm start

Frontend:
cd client
npm start

API Endpoints

Authentication:
POST /api/auth/register - User registration
POST /api/auth/login - User login

Reservations:
GET /api/reservations - Get all reservations
POST /api/reservations - Create new reservation
PUT /api/reservations/:id - Update reservation
DELETE /api/reservations/:id - Cancel reservation

Database Schema

User:
- id: Int (Primary Key)
- email: String (Unique)
- passwordHash: String
- role: String
- createdAt: DateTime
- reservations: Reservation[]

Reservation:
- id: Int (Primary Key)
- userId: Int (Foreign Key)
- status: String
- date: DateTime
- time: String
- notes: String?
- createdAt: DateTime

Frontend Components

Navbar:
- Responsive navigation
- Authentication status
- Dynamic styling on scroll

Home:
- Hero section with animations
- Featured content
- Call-to-action buttons

About:
- Company philosophy
- Team section
- Image gallery

Contact:
- Contact form
- Location information
- Business hours
- Google Maps integration

Reservations:
- Booking form
- Date and time selection
- Status tracking
- Cancellation functionality

Authentication:
- Login form
- Registration form
- Password security
- JWT token management

Styling
- Dark theme with gold accents
- Responsive design
- Custom animations
- Glass morphism effects
- Gradient overlays

Security Features
- JWT authentication
- Password hashing
- Protected routes
- Input validation
- XSS protection
- CORS configuration

Performance Optimizations
- Image optimization
- Lazy loading
- Code splitting
- Caching strategies
- Database indexing

Development Practices
- Component-based architecture
- Clean code principles
- Error handling
- Logging
- Testing setup
- Version control

Deployment
- Environment configuration
- Build optimization
- Server setup
- Database migration
- SSL certification
- Monitoring setup

Maintenance
- Regular updates
- Security patches
- Database backups
- Performance monitoring
- Error tracking

Future Enhancements
- Menu management system
- Payment integration
- Email notifications
- Analytics dashboard
- Mobile application
- Multi-language support

Support
For technical support or inquiries:
Email: shaumne@gmail.com
GitHub: (https://github.com/shaumne)

License
This project is licensed under the MIT License.

Copyright (c) 2025 Shaumne

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
