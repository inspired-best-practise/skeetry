import { PrismaClient } from '@prisma/client';
import axios from 'axios';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  // get wikipedia title by wikidata id
  // https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks&ids=Q2592&sitefilter=enwiki

  // get image by wikipedia title (and select size)
  // https://en.wikipedia.org/w/api.php?action=query&titles=Kostroma&prop=pageimages&format=json&pithumbsize=1024

  const size = '1024';

  const wkdtList = await prisma.alternateName.findMany({
    take: 200,
    skip: 100,
    where: {
      isoLang: 'wkdt',
    },
  });

  for (let i = 0; i < wkdtList.length; i++) {
    const wikidataId = wkdtList[i].alternateName;

    await axios
      .get(
        `https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks&ids=${wkdtList[i].alternateName}&sitefilter=enwiki`,
      )
      .then(async (response) => {
        const hasLinks =
          // @ts-ignore
          Object.keys(response.data.entities[wikidataId].sitelinks).length > 0;

        if (hasLinks) {
          const title =
            // @ts-ignore
            response.data.entities[wikidataId].sitelinks.enwiki.title;
          console.log('title: ', title, 'id', wikidataId);

          await axios
            .get(
              `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=${size}`,
            )
            .then(async (response) => {
              // @ts-ignore
              const pageId = Object.keys(response.data.query.pages)[0];

              // @ts-ignore
              const hasThumbnail = response.data.query.pages[pageId].thumbnail;

              // @ts-ignore
              console.log(response.data.query.pages[pageId].thumbnail.source);

              if (hasThumbnail) {
                await prisma.image.create({
                  data: {
                    // @ts-ignore
                    url: response.data.query.pages[pageId].thumbnail.source,
                    geoname: {
                      connect: {
                        id: wkdtList[i].geonameId,
                      },
                    },
                  },
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
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
