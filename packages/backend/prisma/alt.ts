import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  for (let i = 0; i < 15000000; i++) {
    console.log('i', i);
    const alt = await prisma.alternateName.findFirst({
      where: {
        NOT: [
          {
            isoLang: 'ru',
          },
          {
            isoLang: 'en',
          },
          {
            isoLang: 'link',
          },
          {
            isoLang: 'wkdt',
          },
          {
            isoLang: 'iata',
          },
          {
            isoLang: 'unlc',
          },
        ],
      },
    });

    await prisma.alternateName.delete({
      where: {
        id: alt.id,
      },
    });
  }

  // await prisma.alternateName.deleteMany({
  //   where: {
  //     isoLang: 'lt',
  //   },
  // });

  // console.log('deleted lt');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
