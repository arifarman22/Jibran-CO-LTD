import rateLimit from 'express-rate-limit';

const isProduction = process.env.NODE_ENV === 'production';

export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isProduction ? 100 : 1000,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  skip: () => !isProduction,
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isProduction ? 5 : 100,
  message: 'Too many login attempts, please try again later.',
  skipSuccessfulRequests: true,
  skip: () => !isProduction,
});

export const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: isProduction ? 20 : 100,
  message: 'Too many uploads, please try again later.',
  skip: () => !isProduction,
});
