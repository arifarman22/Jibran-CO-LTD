import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getDashboardStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const [
      totalServices,
      totalTeamMembers,
      totalProjects,
      totalBlogPosts,
      totalProducts,
      totalInquiries,
      totalContactMessages,
      recentInquiries,
      recentMessages,
    ] = await Promise.all([
      prisma.service.count(),
      prisma.teamMember.count(),
      prisma.project.count(),
      prisma.blogPost.count(),
      prisma.exportProduct.count(),
      prisma.tradeInquiry.count(),
      prisma.contactMessage.count(),
      prisma.tradeInquiry.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { product: true },
      }),
      prisma.contactMessage.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    res.json({
      stats: {
        totalServices,
        totalTeamMembers,
        totalProjects,
        totalBlogPosts,
        totalProducts,
        totalInquiries,
        totalContactMessages,
      },
      recentInquiries,
      recentMessages,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard stats', error });
  }
};
