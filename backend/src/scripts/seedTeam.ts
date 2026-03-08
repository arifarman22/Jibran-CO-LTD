import prisma from '../utils/prisma';

async function seedTeam() {
  try {
    await prisma.teamMember.deleteMany();
    
    const teamMembers = [
      {
        name: 'Arif Arman',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15+ years of experience in international business and strategic development.',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80'
      },
      {
        name: 'Sarah Johnson',
        role: 'Chief Operating Officer',
        bio: 'Operations expert specializing in multi-sector business management and process optimization.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
      },
      {
        name: 'Michael Chen',
        role: 'Head of Real Estate',
        bio: 'Real estate development specialist with extensive portfolio management experience.',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80'
      },
      {
        name: 'Elena Rodriguez',
        role: 'Director of Hospitality',
        bio: 'Hospitality industry veteran with a passion for creating exceptional guest experiences.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80'
      }
    ];

    for (const member of teamMembers) {
      await prisma.teamMember.create({ data: member });
    }

    console.log('✅ Team members seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding team members:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedTeam();
