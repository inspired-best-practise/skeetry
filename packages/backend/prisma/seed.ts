import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  for (let i = 0; i < 1800000; i++) {
    console.log('i', i);

    const alt = await prisma.alternateName.findFirst({
      where: {
        isoLang: 'iata',
      },
    });

    await prisma.alternateName.delete({
      where: {
        id: alt.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
