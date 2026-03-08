import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.exportProduct.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

export const getProductBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;
    const product = await prisma.exportProduct.findUnique({
      where: { slug: slug as string },
      include: { category: true },
    });
    
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, slug, description, images, certifications, exportMarkets, categoryId } = req.body;
    
    const newProduct = await prisma.exportProduct.create({
      data: {
        name,
        slug,
        description,
        images: images || [],
        certifications: certifications || [],
        exportMarkets: exportMarkets || [],
        categoryId,
      },
    });
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, slug, description, images, certifications, exportMarkets, categoryId } = req.body;
    
    const updatedProduct = await prisma.exportProduct.update({
      where: { id: id as string },
      data: {
        name,
        slug,
        description,
        images,
        certifications,
        exportMarkets,
        categoryId,
      },
    });
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.exportProduct.delete({ where: { id: id as string } });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
