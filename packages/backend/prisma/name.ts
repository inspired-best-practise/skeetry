import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  for (let i = 0; i < 16000000; i++) {
    console.log('i: ', i);

    const AlternateName = await prisma.alternateName.findFirst({
      skip: i,
    });

    const geonameByAlt = await prisma.geoname.findUnique({
      where: {
        id: AlternateName.geonameId,
      },
    });

    if (!geonameByAlt) {
      await prisma.alternateName.delete({
        where: {
          id: AlternateName.id,
        },
      });
      console.log('deteled');
    } else {
      console.log('next');
    }
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
