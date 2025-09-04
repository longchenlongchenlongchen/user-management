const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-0123',
        address: '123 Main St, New York, NY 10001'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1-555-0456',
        address: '456 Oak Ave, Los Angeles, CA 90210'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        phone: '+1-555-0789',
        address: '789 Pine Rd, Chicago, IL 60601'
      }
    })
  ]);

  console.log('Created customers:', customers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
