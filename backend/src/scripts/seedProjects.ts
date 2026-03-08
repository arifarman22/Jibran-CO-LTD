import prisma from '../utils/prisma';

async function main() {
  console.log('🌱 Seeding sample projects...\n');

  await prisma.project.deleteMany();

  const projects = [
    {
      title: 'Luxury Resort Development - Maldives',
      description: 'Complete resort development project featuring 150 luxury villas, spa facilities, and world-class dining experiences. Integrated sustainable architecture with modern amenities.',
      productCategory: 'Hospitality',
      client: 'Paradise Resorts International',
      tradeRegion: 'Maldives',
      completionDate: new Date('2024-06-15'),
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
    },
    {
      title: 'International Tour Package Platform',
      description: 'Developed comprehensive online booking platform for international tour packages covering 50+ destinations with real-time availability and payment integration.',
      productCategory: 'Travel & Tourism',
      client: 'Global Travel Solutions',
      tradeRegion: 'Southeast Asia',
      completionDate: new Date('2024-03-20'),
      images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'],
    },
    {
      title: 'Premium Restaurant Chain Expansion',
      description: 'Established 12 premium dining locations across major cities featuring fusion cuisine, modern interiors, and exceptional customer service.',
      productCategory: 'Food & Beverage',
      client: 'Gourmet Dining Group',
      tradeRegion: 'Middle East',
      completionDate: new Date('2024-08-10'),
      images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    },
    {
      title: 'Organic Farm Development Project',
      description: '500-acre organic farming project with advanced irrigation systems, greenhouse facilities, and export-ready processing units for premium agricultural products.',
      productCategory: 'Agriculture',
      client: 'Green Valley Farms',
      tradeRegion: 'South Asia',
      completionDate: new Date('2024-05-25'),
      images: ['https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'],
    },
    {
      title: 'Commercial Tower Complex',
      description: 'State-of-the-art 40-story commercial tower with smart building technology, premium office spaces, and integrated retail zones.',
      productCategory: 'Real Estate',
      client: 'Metropolitan Properties Ltd',
      tradeRegion: 'Dubai, UAE',
      completionDate: new Date('2024-12-01'),
      images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'],
    },
    {
      title: 'Highway Infrastructure Project',
      description: '120km highway construction with 8 bridges, modern toll systems, and complete safety infrastructure connecting major industrial zones.',
      productCategory: 'Construction',
      client: 'National Highway Authority',
      tradeRegion: 'Bangladesh',
      completionDate: new Date('2024-09-30'),
      images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800'],
    },
    {
      title: 'Garment Manufacturing Facility',
      description: 'Modern RMG factory with capacity of 50,000 pieces per day, featuring automated cutting, sewing, and quality control systems with international compliance.',
      productCategory: 'Garments & Textile',
      client: 'Fashion Forward Industries',
      tradeRegion: 'Bangladesh',
      completionDate: new Date('2024-04-18'),
      images: ['https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800'],
    },
    {
      title: 'International Trade Logistics Hub',
      description: 'Established comprehensive logistics and warehousing facility handling import-export operations for 200+ clients with customs clearance and distribution services.',
      productCategory: 'Trading',
      client: 'Global Trade Partners',
      tradeRegion: 'Singapore',
      completionDate: new Date('2024-07-22'),
      images: ['https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800'],
    },
    {
      title: 'E-Commerce Platform Development',
      description: 'Built scalable e-commerce platform with AI-powered recommendations, multi-vendor support, and integrated payment gateway serving 100K+ daily users.',
      productCategory: 'Digital & IT',
      client: 'ShopNow Technologies',
      tradeRegion: 'Global',
      completionDate: new Date('2024-02-14'),
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'],
    },
    {
      title: 'Corporate Restructuring Consultancy',
      description: 'Comprehensive business transformation project including operational optimization, market expansion strategy, and digital transformation for multinational corporation.',
      productCategory: 'Business Consulting',
      client: 'Fortune 500 Manufacturing Co.',
      tradeRegion: 'North America',
      completionDate: new Date('2024-10-05'),
      images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
    },
    {
      title: 'Vocational Training Center',
      description: 'Established modern training facility offering 20+ skill development programs with industry partnerships and job placement support for 5,000+ students annually.',
      productCategory: 'Education & Training',
      client: 'Skills Development Foundation',
      tradeRegion: 'South Asia',
      completionDate: new Date('2024-01-30'),
      images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'],
    },
    {
      title: 'Digital News Portal Launch',
      description: 'Launched comprehensive news portal with multimedia content, live streaming capabilities, and mobile apps reaching 2M+ monthly readers.',
      productCategory: 'Media & Broadcasting',
      client: 'Modern Media Group',
      tradeRegion: 'Southeast Asia',
      completionDate: new Date('2024-11-12'),
      images: ['https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800'],
    },
    {
      title: 'Community Development Initiative',
      description: 'Implemented comprehensive CSR program including education support, healthcare facilities, and livelihood development benefiting 10,000+ families.',
      productCategory: 'CSR & Community',
      client: 'Corporate Foundation',
      tradeRegion: 'Rural Bangladesh',
      completionDate: new Date('2024-06-28'),
      images: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'],
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  console.log(`✅ ${projects.length} sample projects seeded successfully.\n`);
  console.log('🎉 Project seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
