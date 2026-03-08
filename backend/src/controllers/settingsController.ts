import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getSiteSettings = async (req: Request, res: Response): Promise<void> => {
  try {
    let settings = await prisma.siteSettings.findFirst();
    
    // If no settings exist yet, return empty object (handled globally by frontend)
    if (!settings) {
      res.json({});
      return;
    }
    
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching site settings', error });
  }
};

export const updateSiteSettings = async (req: Request, res: Response): Promise<void> => {
  try {
    const { companyName, logoUrl, address, phone, email, facebook, twitter, linkedin, instagram } = req.body;
    
    let settings = await prisma.siteSettings.findFirst();
    
    if (settings) {
      settings = await prisma.siteSettings.update({
        where: { id: settings.id },
        data: { companyName, logoUrl, address, phone, email, facebook, twitter, linkedin, instagram },
      });
    } else {
      settings = await prisma.siteSettings.create({
        data: { companyName, logoUrl, address, phone, email, facebook, twitter, linkedin, instagram },
      });
    }
    
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error updating site settings', error });
  }
};
