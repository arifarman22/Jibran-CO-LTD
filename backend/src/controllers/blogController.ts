import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      include: { category: true },
      orderBy: { publishedDate: 'desc' },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts', error });
  }
};

export const getPostBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;
    const post = await prisma.blogPost.findUnique({
      where: { slug: slug as string },
      include: { category: true },
    });
    
    if (!post) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post', error });
  }
};

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, slug, content, featuredImage, author, isPublished, categoryId } = req.body;
    
    const newPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        featuredImage,
        author,
        isPublished: isPublished || false,
        publishedDate: isPublished ? new Date() : null,
        categoryId,
      },
    });
    
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post', error });
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, slug, content, featuredImage, author, isPublished, categoryId } = req.body;
    
    const updatedPost = await prisma.blogPost.update({
      where: { id: id as string },
      data: {
        title,
        slug,
        content,
        featuredImage,
        author,
        isPublished,
        publishedDate: isPublished ? new Date() : null,
        categoryId,
      },
    });
    
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post', error });
  }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.blogPost.delete({ where: { id: id as string } });
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post', error });
  }
};
