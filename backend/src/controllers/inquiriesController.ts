import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { sendEmail } from '../utils/mailer';

export const getInquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const inquiries = await prisma.tradeInquiry.findMany({
      orderBy: { createdAt: 'desc' },
      include: { product: true },
    });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inquiries', error });
  }
};

export const createInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, company, email, phone, inquiryType, message, productId } = req.body;
    
    const newInquiry = await prisma.tradeInquiry.create({
      data: {
        name,
        company,
        email,
        phone,
        inquiryType,
        message,
        productId,
      },
    });
    
    // Send email notification via SMTP (Nodemailer)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@jibran.com';
    await sendEmail(
      adminEmail,
      `New Trade Inquiry: ${inquiryType} from ${company}`,
      `You have received a new ${inquiryType} inquiry from ${name} at ${company}.\n\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`
    ).catch(err => console.error('Failed to send inquiry email notification:', err));

    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error creating inquiry', error });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updatedInquiry = await prisma.tradeInquiry.update({
      where: { id: id as string },
      data: { status },
    });
    
    res.json(updatedInquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating inquiry status', error });
  }
};

export const deleteInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.tradeInquiry.delete({ where: { id: id as string } });
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inquiry', error });
  }
};
