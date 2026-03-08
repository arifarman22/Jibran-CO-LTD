import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getServices = async (req: Request, res: Response): Promise<void> => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error });
  }
};

export const getServiceBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;
    const service = await prisma.service.findUnique({ where: { slug: slug as string } });
    
    if (!service) {
      res.status(404).json({ message: 'Service not found' });
      return;
    }
    
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service', error });
  }
};

export const createService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, slug, description, content, imageUrl, iconUrl } = req.body;
    const newService = await prisma.service.create({
      data: { title, slug, description, content, imageUrl, iconUrl },
    });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error });
  }
};

export const updateService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, slug, description, content, imageUrl, iconUrl } = req.body;
    
    const updatedService = await prisma.service.update({
      where: { id: id as string },
      data: { title, slug, description, content, imageUrl, iconUrl },
    });
    
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error });
  }
};

export const deleteService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id: id as string } });
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error });
  }
};
