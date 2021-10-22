import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  for (let i = 0; i < 10000; i++) {
    console.log('i', i);

    const geoname = await prisma.geoname.findFirst({
      where: {
        fclass: 'R',
      },
    });

    if (!geoname) {
      break;
    }

    console.log('id', geoname.id);

    await prisma.geoname.delete({
      where: {
        id: geoname.id,
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