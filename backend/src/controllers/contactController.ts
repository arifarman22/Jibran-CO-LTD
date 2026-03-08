import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { sendEmail } from '../utils/mailer';

export const getContactMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact messages', error });
  }
};

export const createContactMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;
    
    const newMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });
    
    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@jibran.com';
    await sendEmail(
      adminEmail,
      `New Contact Message: ${subject}`,
      `You have received a new contact message from ${name} (${email}).\n\nSubject: ${subject}\n\nMessage:\n${message}`
    ).catch(err => console.error('Failed to send contact email:', err));

    res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
};

export const updateMessageStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updatedMessage = await prisma.contactMessage.update({
      where: { id: id as string },
      data: { status },
    });
    
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error updating message status', error });
  }
};

export const deleteContactMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.contactMessage.delete({ where: { id: id as string } });
    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting message', error });
  }
};
