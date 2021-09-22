import {
  Continent,
  // Prisma,
  PrismaClient,
} from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const json = require('./data.json');

global.fetch = fetch;

// import { createApi } from 'unsplash-js';

// const unsplash = createApi({
//   accessKey: process.env.UNSPLASH_ACCESS_KEY,
// });

async function main() {
  // const getPhoto = async (name: string) => {
  //   const query = name.replace(/\s/g, '');
  //   let error = null;

  //   console.log('query', query);
  //   const photo = await unsplash.photos
  //     .getRandom({
  //       featured: true,
  //       query: query,
  //       count: 1,
  //     })
  //     .catch((e) => {
  //       error = e;
  //       return console.log('error', e, 'message', e.message);
  //     });

  //   if ((photo && !photo.response) || error) {
  //     return null;
  //   }

  //   // @ts-ignore
  //   return photo.response[0];
  // };

  // COUNTRY
  for (let i = 0; i < json.length; i++) {
    const el = json[i];
    await prisma.country.upsert({
      where: {
        name: el.name,
      },
      update: {
        pk: el.id,
        name: el.name,
        iso2: el.iso2,
        iso3: el.iso3,
        numericCode: el.numeric_code,
        phoneCode: el.phone_code,
        currency: el.currency,
        currencySymbol: el.currency_symbol,
        tld: el.tld,
        native: el.native,
        continent:
          el.region.length === 0
            ? Continent.ISLAND
            : (`${el.region.toUpperCase()}` as Continent),
        subregion: el.subregion,
        latitude: el.latitude,
        longitude: el.longitude,
        emoji: el.emoji,
        emojiU: el.emojiU,
      },
      create: {
        pk: el.id,
        name: el.name,
        iso2: el.iso2,
        iso3: el.iso3,
        numericCode: el.numeric_code,
        phoneCode: el.phone_code,
        currency: el.currency,
        currencySymbol: el.currency_symbol,
        tld: el.tld,
        native: el.native,
        continent:
          el.region.length === 0
            ? Continent.ISLAND
            : (`${el.region.toUpperCase()}` as Continent),
        subregion: el.subregion,
        latitude: el.latitude,
        longitude: el.longitude,
        emoji: el.emoji,
        emojiU: el.emojiU,
      },
    });
  }

  console.log('countries inserted!');

  // STATE
  for (let i = 0; i < json.length; i++) {
    const country = json[i];
    for (let j = 0; j < country.states.length; j++) {
      const state = country.states[j];

      await prisma.state.upsert({
        where: {
          pk: state.id,
        },
        update: {
          pk: state.id,
          name: state.name,
          stateCode: state.status_code,
          latitude: state.latitude,
          longitude: state.longitude,
          country: {
            connect: {
              pk: country.id,
            },
          },
        },
        create: {
          pk: state.id,
          name: state.name,
          stateCode: state.status_code,
          latitude: state.latitude,
          longitude: state.longitude,
          country: {
            connect: {
              pk: country.id,
            },
          },
        },
      });
    }
  }

  // console.log('states inserted!');

  // CITY
  for (let i = 0; i < json.length; i++) {
    const country = json[i];

    for (let j = 0; j < country.states.length; j++) {
      const state = country.states[j];

      console.log('state.name', state.name);

      if (state.cities) {
        for (let y = 0; y < state.cities.length; y++) {
          const city = state.cities[y];

          await prisma.city.upsert({
            where: {
              pk: city.id,
            },
            update: {
              pk: city.id,
              name: city.name,
              latitude: city.latitude,
              longitude: city.longitude,
              state: {
                connect: {
                  pk: state.id,
                },
              },
            },
            create: {
              pk: city.id,
              name: city.name,
              latitude: city.latitude,
              longitude: city.longitude,
              state: {
                connect: {
                  pk: state.id,
                },
              },
            },
          });
        }
      }
    }
  }

  console.log('cities inserted!');

  // IMAGE
  // const cities = await prisma.city.findMany({});

  // for (let i = 0; i < cities.length; i++) {
  //   const city = cities[i];

  //   const res = await getPhoto(`${city.name}`);

  //   if (res) {
  //     const urls = [
  //       {
  //         raw: res.urls.raw,
  //         full: res.urls.full,
  //         regular: res.urls.regular,
  //         small: res.urls.small,
  //         thumb: res.urls.thumb,
  //       },
  //     ] as Prisma.JsonArray;

  //     await prisma.image.create({
  //       data: {
  //         blurHash: res.blur_hash,
  //         city: {
  //           connect: {
  //             id: city.id,
  //           },
  //         },
  //         urls: urls,
  //         isUnsplash: true,
  //         unsplashId: res.id,
  //       },
  //     });

  //     console.log(`Image for ${city.name} inserted.`);
  //   }
  // }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
