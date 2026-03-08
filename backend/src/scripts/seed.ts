import bcrypt from 'bcrypt';
import prisma from '../utils/prisma';

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@jibran.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        name: 'Super Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });
    console.log('✅ Default admin user created successfully.');
  } else {
    console.log('✅ Admin user already exists');
  }

  // Seed Services
  const servicesData = [
    {
      title: 'Global Trade Management',
      slug: 'global-trade-management',
      description: 'End-to-end management of complex international trade operations, ensuring regulatory compliance and logistical efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1500&auto=format&fit=crop',
      iconUrl: 'Box',
    },
    {
      title: 'Supply Chain Optimization',
      slug: 'supply-chain-optimization',
      description: 'Leveraging data-driven insights to streamline your supply chain, reduce costs, and improve delivery speeds across borders.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=1500&auto=format&fit=crop',
      iconUrl: 'TrendingUp',
    },
    {
      title: 'Risk Mitigation & Compliance',
      slug: 'risk-mitigation-compliance',
      description: 'Expert navigation of international trade laws, customs regulations, and geopolitical risks to protect your business interests.',
      imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea10c3b?q=80&w=1500&auto=format&fit=crop',
      iconUrl: 'ShieldCheck',
    },
  ];

  for (const service of servicesData) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log('✅ Services seeded.');

  // Seed Projects
  const projectsData = [
    {
      title: 'Renewable Energy Logistics',
      description: 'Managed the complex transport and customs clearance of wind turbine components from Germany to offshore sites in the North Sea.',
      productCategory: 'Industrial Equipment',
      client: 'EcoTech Europe',
      tradeRegion: 'EU and Scandinavia',
      images: ['https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1500&auto=format&fit=crop'],
    },
    {
      title: 'Premium Textile Export',
      description: 'Streamlined the export of high-quality organic cotton textiles from South Asia to major luxury brands in New York and Paris.',
      productCategory: 'Garments and Textile',
      client: 'Global Apparel Brands',
      tradeRegion: 'North America',
      images: ['https://images.unsplash.com/photo-1558025137-0b446e9cb005?q=80&w=1500&auto=format&fit=crop'],
    },
  ];

  for (const project of projectsData) {
    await prisma.project.create({ data: project });
  }
  console.log('✅ Projects seeded.');

  // Seed Product Categories and Products
  const categories = [
    {
      name: 'Industrial Machinery',
      slug: 'industrial-machinery',
      description: 'Heavy duty equipment for manufacturing and construction.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop',
    },
    {
      name: 'Textile & Apparel',
      slug: 'textile-apparel',
      description: 'Premium fabrics and finished garments.',
      imageUrl: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1500&auto=format&fit=crop',
    },
  ];

  for (const cat of categories) {
    const category = await prisma.productCategory.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });

    if (cat.slug === 'industrial-machinery') {
      await prisma.exportProduct.upsert({
        where: { slug: 'precision-lathe-xl1' },
        update: {
          name: 'Precision Lathe XL1',
          description: 'High-precision industrial lathe for aerospace components.',
          images: ['https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1500&auto=format&fit=crop'],
          certifications: ['ISO 9001', 'CE'],
          exportMarkets: ['EU', 'USA'],
          categoryId: category.id,
        },
        create: {
          name: 'Precision Lathe XL1',
          slug: 'precision-lathe-xl1',
          description: 'High-precision industrial lathe for aerospace components.',
          images: ['https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1500&auto=format&fit=crop'],
          certifications: ['ISO 9001', 'CE'],
          exportMarkets: ['EU', 'USA'],
          categoryId: category.id,
        },
      });
    }
  }
  console.log('✅ Product categories and products seeded.');

  // Seed Export Markets
  const markets = [
    { name: 'European Union', region: 'Europe', description: 'Major hub for industrial machinery and high-tech exports.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661914141344-9694e432a221?q=80&w=1500&auto=format&fit=crop' },
    { name: 'North America', region: 'Americas', description: 'Primary market for premium textiles and consumer goods.', imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1500&auto=format&fit=crop' },
    { name: 'Middle East', region: 'Asia', description: 'Rapidly growing market for construction materials and energy products.', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1500&auto=format&fit=crop' },
  ];

  for (const market of markets) {
    await prisma.exportMarket.create({ data: market });
  }
  console.log('✅ Export markets seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
