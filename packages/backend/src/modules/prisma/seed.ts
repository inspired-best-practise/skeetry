import { PrismaClient } from '@prisma/client';
import { countries } from './countries';
const prisma = new PrismaClient();

async function main() {
  const nature = await prisma.itemTag.upsert({
    where: { name: 'Nature' },
    update: {},
    create: {
      name: 'Nature',
      emoji: '🌳',
    },
  });

  console.log('Tags inserted:', { nature });

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const countryInserted = await prisma.item.upsert({
      where: { name: country.name },
      update: {},
      create: {
        name: country.name,
        type: 'COUNTRY',
        latitude: '',
        longitude: '',
        flag: country.emoji,
      },
    });

    console.log('Country inserted:', countryInserted);
  }

  const kive = await prisma.user.upsert({
    where: { username: 'kive' },
    update: {},
    create: {
      username: 'kive',
      phone: '79914868577',
      avatar: 'https://avatars.githubusercontent.com/u/7137819?v=4',
      password: '$2b$10$t6Q15CFGxjh.vINMxn9nd.wicoPkFAWKdZGT4mJuq4cZkUrgGktsi',
      visited: {
        connect: {
          name: 'Russia',
        },
      },
      visitedCount: 1,
    },
  });

  const evik = await prisma.user.upsert({
    where: { username: 'evik' },
    update: {},
    create: {
      username: 'evik',
      phone: '79639303140',
      password: '$2b$10$t6Q15CFGxjh.vINMxn9nd.wicoPkFAWKdZGT4mJuq4cZkUrgGktsi',
    },
  });

  console.log('Users inserted:', { kive, evik });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
