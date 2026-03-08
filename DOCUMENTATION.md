# Jibran C., Ltd - Production-Grade CMS System

## 🎯 Project Overview

A full-stack corporate portfolio website with admin CMS built with modern technologies.

### Tech Stack
- **Frontend**: Next.js 16, TypeScript, TailwindCSS, ShadCN UI, Framer Motion
- **Backend**: Express.js, Node.js, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **State Management**: Zustand
- **Validation**: Zod
- **Security**: Helmet, Rate Limiting, CORS

---

## 📁 Project Structure

```
Jibran CO LTD Project/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── teamController.ts
│   │   │   ├── servicesController.ts
│   │   │   ├── projectsController.ts
│   │   │   ├── productsController.ts
│   │   │   ├── blogController.ts
│   │   │   ├── inquiriesController.ts
│   │   │   ├── contactController.ts
│   │   │   ├── settingsController.ts
│   │   │   └── dashboardController.ts
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── validate.ts
│   │   ├── routes/
│   │   ├── utils/
│   │   │   ├── auth.ts
│   │   │   ├── mailer.ts
│   │   │   ├── prisma.ts
│   │   │   └── validation.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── uploads/
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── admin/
    │   │   │   ├── login/
    │   │   │   ├── dashboard/
    │   │   │   └── team/
    │   │   ├── about/
    │   │   ├── services/
    │   │   ├── projects/
    │   │   ├── blog/
    │   │   └── contact/
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── AdminSidebar.tsx
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   ├── lib/
    │   │   ├── api.ts
    │   │   └── utils.ts
    │   ├── store/
    │   │   ├── useStore.ts
    │   │   └── useAuthStore.ts
    │   └── sections/
    ├── .env.local
    └── package.json
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- Git

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create `.env` file:
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_super_secret_jwt_key_here
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
ADMIN_EMAIL=admin@jibran.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

4. **Run database migrations**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Seed database with initial data**
```bash
npm run seed
```

6. **Start backend server**
```bash
npm run dev
```

Backend will run on: http://localhost:5000

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Start frontend server**
```bash
npm run dev
```

Frontend will run on: http://localhost:3000

---

## 🔐 Default Admin Credentials

```
Email: admin@jibran.com
Password: admin123
```

**⚠️ IMPORTANT**: Change these credentials in production!

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

### Team Management
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get single team member
- `POST /api/team` - Create team member (Auth required)
- `PUT /api/team/:id` - Update team member (Auth required)
- `DELETE /api/team/:id` - Delete team member (Auth required)

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:slug` - Get service by slug
- `POST /api/services` - Create service (Auth required)
- `PUT /api/services/:id` - Update service (Auth required)
- `DELETE /api/services/:id` - Delete service (Auth required)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Auth required)
- `PUT /api/projects/:id` - Update project (Auth required)
- `DELETE /api/projects/:id` - Delete project (Auth required)

### Blog
- `GET /api/blog/posts` - Get all blog posts
- `GET /api/blog/posts/:slug` - Get post by slug
- `POST /api/blog/posts` - Create post (Auth required)
- `PUT /api/blog/posts/:id` - Update post (Auth required)
- `DELETE /api/blog/posts/:id` - Delete post (Auth required)

### Contact
- `GET /api/contact` - Get all messages (Auth required)
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id` - Update message status (Auth required)
- `DELETE /api/contact/:id` - Delete message (Auth required)

### Settings
- `GET /api/settings` - Get site settings
- `PUT /api/settings` - Update settings (Auth required)

---

## 🔒 Security Features

### Implemented
✅ JWT Authentication
✅ Password hashing with bcrypt
✅ Rate limiting (general, auth, upload)
✅ Helmet security headers
✅ CORS protection
✅ Input validation with Zod
✅ Request size limits
✅ SQL injection protection (Prisma ORM)

### Rate Limits
- General API: 100 requests per 15 minutes
- Login attempts: 5 attempts per 15 minutes
- File uploads: 20 uploads per hour

---

## 🎨 Admin Dashboard Features

### Completed
✅ Admin login page
✅ Dashboard overview with statistics
✅ Team management (full CRUD)
✅ Sidebar navigation
✅ Authentication state management
✅ Protected routes

### To Be Completed (Follow Team Management Pattern)
- Services management
- Projects management
- Products management
- Blog management
- Inquiries management
- Messages management
- Settings management
- Media manager

---

## 📄 Database Schema

### Main Tables
- `User` - Admin users
- `TeamMember` - Team members
- `Service` - Company services
- `Project` - Portfolio projects
- `ExportProduct` - Products for export
- `ProductCategory` - Product categories
- `ExportMarket` - Export markets
- `BlogPost` - Blog articles
- `BlogCategory` - Blog categories
- `TradeInquiry` - Trade inquiries
- `ContactMessage` - Contact form submissions
- `Media` - Uploaded files
- `SiteSettings` - Company information

---

## 🚀 Deployment Guide

### Backend Deployment (VPS/Cloud)

1. **Build the application**
```bash
npm run build
```

2. **Set production environment variables**
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=your_production_database_url
JWT_SECRET=your_production_secret
```

3. **Run migrations**
```bash
npx prisma migrate deploy
```

4. **Start with PM2**
```bash
pm2 start dist/server.js --name jibran-api
```

### Frontend Deployment (Vercel)

1. **Push code to GitHub**

2. **Connect to Vercel**
- Import repository
- Set environment variables
- Deploy

3. **Environment variables on Vercel**
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## ✅ Production Checklist

### Security
- [ ] Change default admin credentials
- [ ] Use strong JWT secret
- [ ] Enable HTTPS
- [ ] Configure CORS for production domain
- [ ] Set up firewall rules
- [ ] Enable database SSL

### Performance
- [ ] Enable caching
- [ ] Optimize images
- [ ] Minify assets
- [ ] Enable CDN
- [ ] Set up database indexes

### Monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Configure logging
- [ ] Set up uptime monitoring
- [ ] Database backups

---

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

---

## 📝 Next Steps

1. **Complete remaining CRUD pages** (use Team Management as template)
2. **Add SEO optimization** (meta tags, sitemap, robots.txt)
3. **Implement media upload UI**
4. **Add rich text editor for blog**
5. **Create API documentation** (Swagger/OpenAPI)
6. **Add unit tests**
7. **Set up CI/CD pipeline**
8. **Configure production deployment**

---

## 🆘 Support

For issues or questions:
- Check the documentation
- Review error logs
- Contact: admin@jibran.com

---

## 📜 License

Proprietary - Jibran C., Ltd

---

**Last Updated**: 2025
**Version**: 1.0.0
