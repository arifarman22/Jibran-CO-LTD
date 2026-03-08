import prisma from '../utils/prisma';
import bcrypt from 'bcrypt';

async function main() {
  console.log('🌱 Seeding database...\n');

  // Clear existing data
  await prisma.service.deleteMany();
  await prisma.teamMember.deleteMany();

  // Seed Services
  const services = [
    {
      title: 'Travel and Tourism Services',
      slug: 'travel-tourism',
      category: 'TRAVEL',
      description: 'Comprehensive travel and tourism solutions including tour operations, airline ticketing, hotel reservations, and visa assistance.',
      content: 'We provide end-to-end travel services including inbound and outbound tour operations, airline ticketing, hotel and accommodation reservations, transportation booking, visa assistance, travel documentation support, tour package design, destination management, corporate and group travel services, holiday planning, and online travel booking platforms.',
      features: ['Tour Operations', 'Airline Ticketing', 'Hotel Reservations', 'Visa Assistance', 'Corporate Travel', 'Holiday Planning'],
      imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      order: 1,
      isActive: true,
    },
    {
      title: 'Hotel, Resort & Hospitality',
      slug: 'hospitality',
      category: 'HOSPITALITY',
      description: 'Premium hospitality services including hotel management, resort operations, and event management solutions.',
      content: 'We establish, own, lease, manage, and operate hotels, resorts, guest houses, serviced apartments, hospitality facilities, food and beverage services, event management, booking, marketing, and hospitality consultancy services.',
      features: ['Hotel Management', 'Resort Operations', 'Event Management', 'F&B Services', 'Hospitality Consulting'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      order: 2,
      isActive: true,
    },
    {
      title: 'Food & Beverage Services',
      slug: 'food-beverage',
      category: 'FOOD',
      description: 'Complete food and beverage solutions from restaurants to catering, cloud kitchens, and food distribution.',
      content: 'We operate restaurants, cafés, food courts, catering services, cloud kitchens, bakeries, and beverage businesses. Our services include food production, processing, packaging, distribution, import, export, wholesale, retail, online sales, event catering, and food consultancy.',
      features: ['Restaurant Operations', 'Catering Services', 'Cloud Kitchens', 'Food Distribution', 'Event Catering'],
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      order: 3,
      isActive: true,
    },
    {
      title: 'Agricultural Projects',
      slug: 'agriculture',
      category: 'AGRICULTURE',
      description: 'Comprehensive agricultural solutions including farming, cultivation, processing, and agro-based product trading.',
      content: 'We engage in agricultural projects including farming, cultivation, production, processing, storage, distribution, trading, and import-export of agricultural and agro-based products.',
      features: ['Farming & Cultivation', 'Agro Processing', 'Storage Solutions', 'Product Trading', 'Export Services'],
      imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      order: 4,
      isActive: true,
    },
    {
      title: 'Real Estate & Property',
      slug: 'real-estate',
      category: 'REAL_ESTATE',
      description: 'Full-spectrum real estate services including development, investment, property management, and consultancy.',
      content: 'We provide real estate development, investment, buying, selling, leasing, renting, and management of residential, commercial, and industrial properties, including property consultancy and brokerage services.',
      features: ['Property Development', 'Investment Services', 'Property Management', 'Consultancy', 'Brokerage'],
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      order: 5,
      isActive: true,
    },
    {
      title: 'Construction & Engineering',
      slug: 'construction',
      category: 'CONSTRUCTION',
      description: 'Complete construction and engineering services from planning to execution of infrastructure projects.',
      content: 'We provide construction and engineering works including planning, design, construction, renovation, repair, maintenance, and development of residential, commercial, industrial, and infrastructure projects. We act as general contractor, subcontractor, project manager, and construction consultant.',
      features: ['Project Planning', 'Construction Management', 'Infrastructure Development', 'Engineering Design', 'Material Supply'],
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      order: 6,
      isActive: true,
    },
    {
      title: 'Garments & Textile',
      slug: 'garments-textile',
      category: 'GARMENTS',
      description: 'End-to-end garments and textile solutions including manufacturing, sourcing, and international trading.',
      content: 'We engage in manufacturing, processing, sourcing, buying, selling, importing, exporting, wholesaling, retailing, and online trading of garments, ready-made garments (RMG), textiles, apparel, fabrics, accessories, and fashion products, including quality control and compliance services.',
      features: ['RMG Manufacturing', 'Textile Trading', 'Quality Control', 'Compliance Services', 'Fashion Products'],
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800',
      order: 7,
      isActive: true,
    },
    {
      title: 'Import, Export & Trading',
      slug: 'international-trading',
      category: 'TRADING',
      description: 'Global import-export and international trading services with comprehensive logistics coordination.',
      content: 'We engage in import and export of general goods including garments, food items, agricultural products, construction materials, consumer goods, and industrial products. We provide international trading, sourcing, procurement, and logistics coordination services.',
      features: ['Import Services', 'Export Solutions', 'Sourcing & Procurement', 'Logistics Coordination', 'Trade Compliance'],
      imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
      order: 8,
      isActive: true,
    },
    {
      title: 'Digital & IT Services',
      slug: 'digital-it',
      category: 'DIGITAL',
      description: 'Comprehensive digital solutions including marketing, IT support, software development, and e-commerce.',
      content: 'We provide digital and online services including digital marketing, advertising, branding, information technology support, software and technology solutions, business process outsourcing, e-commerce platforms, and online sales solutions.',
      features: ['Digital Marketing', 'IT Solutions', 'Software Development', 'E-commerce Platforms', 'BPO Services'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      order: 9,
      isActive: true,
    },
    {
      title: 'Business Consulting',
      slug: 'business-consulting',
      category: 'CONSULTING',
      description: 'Professional business consulting and advisory services for market development and operational excellence.',
      content: 'We provide business consulting, advisory, management support, international market development, supplier inspection, quality control, compliance, and operational consultancy services.',
      features: ['Business Advisory', 'Market Development', 'Quality Control', 'Compliance Services', 'Operational Consulting'],
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      order: 10,
      isActive: true,
    },
    {
      title: 'Education & Training',
      slug: 'education-training',
      category: 'EDUCATION',
      description: 'Educational institutions, training centers, and skill development programs for professional growth.',
      content: 'We establish, manage, and operate educational institutions, training centers, vocational institutes, skill development programs, workshops, seminars, online education platforms, e-learning services, and educational consultancy.',
      features: ['Training Centers', 'Skill Development', 'Online Education', 'Workshops & Seminars', 'Educational Consulting'],
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      order: 11,
      isActive: true,
    },
    {
      title: 'Media & Broadcasting',
      slug: 'media-broadcasting',
      category: 'MEDIA',
      description: 'Media production, broadcasting, publishing, and digital content creation services.',
      content: 'We establish, own, manage, and operate media organizations including television channels, broadcasting stations, digital TV platforms, online streaming services, newspapers, magazines, news portals, and digital publications. We provide media production, documentaries, advertisements, photography, videography, and content syndication services.',
      features: ['TV Broadcasting', 'Digital Publishing', 'Media Production', 'Content Creation', 'News Portals'],
      imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800',
      order: 12,
      isActive: true,
    },
    {
      title: 'CSR & Community Development',
      slug: 'csr-community',
      category: 'CSR',
      description: 'Corporate social responsibility initiatives and community development programs.',
      content: 'We carry out charitable, humanitarian, social welfare, community development, and corporate social responsibility (CSR) activities, and cooperate with NGOs, foundations, and social organizations.',
      features: ['CSR Programs', 'Community Development', 'Social Welfare', 'NGO Partnerships', 'Humanitarian Aid'],
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
      order: 13,
      isActive: true,
    },
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  console.log('✅ Services seeded successfully.\n');

  // Seed Team Members
  const teamMembers = [
    {
      name: 'Arif Arman',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with over 15 years of experience in international business development and strategic management.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    },
    {
      name: 'Jibran Chowdhury',
      role: 'Managing Director',
      bio: 'Expert in operations management and business expansion with a proven track record in multiple industries.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Financial Officer',
      bio: 'Financial strategist with expertise in corporate finance, investment management, and risk assessment.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      bio: 'Operations specialist focused on process optimization and supply chain management.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
    },
  ];

  for (const member of teamMembers) {
    await prisma.teamMember.create({ data: member });
  }

  console.log('✅ Team members seeded successfully.\n');
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
