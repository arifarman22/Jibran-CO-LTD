import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getTeamMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team members', error });
  }
};

export const getTeamMemberById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const member = await prisma.teamMember.findUnique({ where: { id: id as string } });
    
    if (!member) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team member', error });
  }
};

export const createTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, role, bio, imageUrl } = req.body;
    const newMember = await prisma.teamMember.create({
      data: { name, role, bio, imageUrl },
    });
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: 'Error creating team member', error });
  }
};

export const updateTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, role, bio, imageUrl } = req.body;
    
    const updatedMember = await prisma.teamMember.update({
      where: { id: id as string },
      data: { name, role, bio, imageUrl },
    });
    
    res.json(updatedMember);
  } catch (error) {
    res.status(500).json({ message: 'Error updating team member', error });
  }
};

export const deleteTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.teamMember.delete({ where: { id: id as string } });
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting team member', error });
  }
};
