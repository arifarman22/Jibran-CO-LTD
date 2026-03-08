import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/errorHandler';
import { generalLimiter } from './middlewares/rateLimiter';
import authRoutes from './routes/authRoutes';
import servicesRoutes from './routes/servicesRoutes';
import projectsRoutes from './routes/projectsRoutes';
import productsRoutes from './routes/productsRoutes';
import inquiriesRoutes from './routes/inquiriesRoutes';
import blogRoutes from './routes/blogRoutes';
import uploadRoutes from './routes/uploadRoutes';
import settingsRoutes from './routes/settingsRoutes';
import teamRoutes from './routes/teamRoutes';
import contactRoutes from './routes/contactRoutes';
import dashboardRoutes from './routes/dashboardRoutes';

const app: Express = express();

// Security Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(generalLimiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/inquiries', inquiriesRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
