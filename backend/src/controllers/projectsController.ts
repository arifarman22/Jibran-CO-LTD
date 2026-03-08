import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({ where: { id: id as string } });
    
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, productCategory, client, tradeRegion, completionDate, images } = req.body;
    
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        productCategory,
        client,
        tradeRegion,
        completionDate: completionDate ? new Date(completionDate) : null,
        images: images || [],
      },
    });
    
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, productCategory, client, tradeRegion, completionDate, images } = req.body;
    
    const updatedProject = await prisma.project.update({
      where: { id: id as string },
      data: {
        title,
        description,
        productCategory,
        client,
        tradeRegion,
        completionDate: completionDate ? new Date(completionDate) : undefined,
        images,
      },
    });
    
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.project.delete({ where: { id: id as string } });
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
};
