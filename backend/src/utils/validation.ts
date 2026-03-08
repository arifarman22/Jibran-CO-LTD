import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const teamMemberSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role is required'),
  bio: z.string().optional(),
  imageUrl: z.string().url('Invalid image URL').optional(),
});

export const serviceSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  content: z.string().optional(),
  imageUrl: z.string().url('Invalid image URL').optional(),
  iconUrl: z.string().url('Invalid icon URL').optional(),
});

export const projectSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  description: z.string().min(10, 'Description is required'),
  productCategory: z.string().optional(),
  client: z.string().optional(),
  tradeRegion: z.string().optional(),
  completionDate: z.string().optional(),
  images: z.array(z.string().url()).optional(),
});

export const blogPostSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  slug: z.string().min(3, 'Slug is required'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  featuredImage: z.string().url('Invalid image URL').optional(),
  author: z.string().min(2, 'Author name is required'),
  isPublished: z.boolean().optional(),
  categoryId: z.string().uuid('Invalid category ID'),
});

export const contactMessageSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const siteSettingsSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  logoUrl: z.string().url('Invalid logo URL').optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Invalid email').optional(),
  facebook: z.string().url('Invalid Facebook URL').optional(),
  twitter: z.string().url('Invalid Twitter URL').optional(),
  linkedin: z.string().url('Invalid LinkedIn URL').optional(),
  instagram: z.string().url('Invalid Instagram URL').optional(),
});
