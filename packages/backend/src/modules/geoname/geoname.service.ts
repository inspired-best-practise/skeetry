import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { PaginationArgs } from '../common/pagination/pagination.args';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/models/user.model';
import { ActionGeonameInput } from './dto/action-geoname.input';
import { GeonamesInput } from './dto/geonames.input';
import { GeonameOrder } from './dto/geoname-order.input';

@Injectable()
export class GeonameService {
  constructor(private prisma: PrismaService) {}

  async addGeoname(user: User, input: ActionGeonameInput) {
    const { id, type } = input;

    const geoname = await this.prisma.geoname.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
      },
      where: {
        id,
      },
    });

    const alreadyWanted = geoname.userWanted.find((u) => u.id === user.id);
    const alreadyVisited = geoname.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && alreadyWanted) ||
      (type === 'VISITED' && alreadyVisited)
    ) {
      throw new Error('The element is already in the list');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                increment: 1,
              },
              wanted: {
                connect: {
                  id: geoname.id,
                },
              },
            }
          : {
              visitedCount: {
                increment: 1,
              },
              visited: {
                connect: {
                  id: geoname.id,
                },
              },
            },
    });

    await this.prisma.geoname.update({
      where: {
        id: geoname.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                increment: 1,
              },
            }
          : {
              visitedCount: {
                increment: 1,
              },
            },
    });

    return geoname;
  }

  async removeGeoname(user: User, input: ActionGeonameInput) {
    const { id, type } = input;

    const geoname = await this.prisma.geoname.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
      },
      where: {
        id,
      },
    });

    const existInWanted = geoname.userWanted.find((u) => u.id === user.id);
    const existInVisited = geoname.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && !existInWanted) ||
      (type === 'VISITED' && !existInVisited)
    ) {
      throw new Error('Geoname is not on the list');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                decrement: 1,
              },
              wanted: {
                disconnect: {
                  id: geoname.id,
                },
              },
            }
          : {
              visitedCount: {
                decrement: 1,
              },
              visited: {
                disconnect: {
                  id: geoname.id,
                },
              },
            },
    });

    await this.prisma.geoname.update({
      where: {
        id: geoname.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                decrement: 1,
              },
            }
          : {
              visitedCount: {
                decrement: 1,
              },
            },
    });

    return geoname;
  }

  async moveGeoname(user: User, input: ActionGeonameInput) {
    const { id, type } = input;

    const geoname = await this.prisma.geoname.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
      },
      where: {
        id,
      },
    });

    const existInWanted = geoname.userWanted.find((u) => u.id === user.id);
    const existInVisited = geoname.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && !existInWanted) ||
      (type === 'VISITED' && !existInVisited)
    ) {
      throw new Error('The element is already in the list');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                decrement: 1,
              },
              visitedCount: {
                increment: 1,
              },
              wanted: {
                disconnect: {
                  id: geoname.id,
                },
              },
              visited: {
                connect: {
                  id: geoname.id,
                },
              },
            }
          : {
              wantedCount: {
                increment: 1,
              },
              visitedCount: {
                decrement: 1,
              },
              visited: {
                disconnect: {
                  id: geoname.id,
                },
              },
              wanted: {
                connect: {
                  id: geoname.id,
                },
              },
            },
    });

    await this.prisma.geoname.update({
      where: {
        id: geoname.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                decrement: 1,
              },
              visitedCount: {
                increment: 1,
              },
            }
          : {
              visitedCount: {
                decrement: 1,
              },
              wantedCount: {
                increment: 1,
              },
            },
    });

    return geoname;
  }

  async findOne(id: string) {
    const geoname = await this.prisma.geoname.findUnique({
      include: {
        userVisited: true,
        userWanted: true,
      },
      where: {
        id,
      },
    });

    if (!geoname) {
      throw new Error('Geoname does not exist');
    }

    return geoname;
  }

  async findAll(
    input: GeonamesInput,
    pagination: PaginationArgs,
    query: string,
    orderBy: GeonameOrder,
  ) {
    const { skip, after, before, first, last } = pagination;
    if (!input) {
      const geonames = await findManyCursorConnection(
        (args) =>
          this.prisma.geoname.findMany({
            include: {
              userVisited: true,
              userWanted: true,
            },
            where: {
              AND: [{ name: { startsWith: query || '' } }],
            },
            orderBy: orderBy ? { population: orderBy.direction } : null,
            ...args,
          }),
        () =>
          this.prisma.geoname.count({
            where: {
              AND: [{ name: { startsWith: query || '' } }],
            },
          }),
        { first, last, before, after },
      );
      return geonames;
    }

    const { geonameTagId } = input;

    const tagExist = await this.prisma.tag.findUnique({
      where: {
        id: geonameTagId,
      },
    });

    if (!tagExist) {
      throw new Error("Tag doesn't exist");
    }

    const geonames = await findManyCursorConnection(
      (args) =>
        this.prisma.geoname.findMany({
          include: {
            userVisited: true,
            userWanted: true,
          },
          where: {
            AND: [
              { name: { startsWith: query || '' } },
              {
                tags: {
                  some: {
                    id: geonameTagId,
                  },
                },
              },
            ],
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.geoname.count({
          where: {
            AND: [
              { name: { startsWith: query || '' } },
              {
                tags: {
                  some: {
                    id: geonameTagId,
                  },
                },
              },
            ],
          },
        }),
      { first, last, before, after },
    );

    return geonames;
  }

  async findWanted(
    pagination: PaginationArgs,
    orderBy: GeonameOrder,
    userId: string,
    user: User,
  ) {
    const { skip, after, before, first, last } = pagination;

    const geonames = await findManyCursorConnection(
      (args) =>
        this.prisma.geoname.findMany({
          include: {
            userWanted: true,
          },
          where: {
            userWanted: {
              some: {
                id: userId ? userId : user.id,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.geoname.count({
          where: {
            userWanted: {
              some: {
                id: userId ? userId : user.id,
              },
            },
          },
        }),
      { first, last, before, after },
    );

    return geonames;
  }

  async findVisited(
    pagination: PaginationArgs,
    orderBy: GeonameOrder,
    userId: string,
    user: User,
  ) {
    const { skip, after, before, first, last } = pagination;

    const geonames = await findManyCursorConnection(
      (args) =>
        this.prisma.geoname.findMany({
          include: {
            userVisited: true,
          },
          where: {
            userVisited: {
              some: {
                id: userId ? userId : user.id,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.geoname.count({
          where: {
            userVisited: {
              some: {
                id: userId ? userId : user.id,
              },
            },
          },
        }),
      { first, last, before, after },
    );

    return geonames;
  }

  async findNearby(
    pagination: PaginationArgs,
    orderBy: GeonameOrder,
    user: User,
  ) {
    const { skip, after, before, first, last } = pagination;

    const geonames = await findManyCursorConnection(
      (args) =>
        this.prisma.geoname.findMany({
          include: {
            userVisited: true,
            userWanted: true,
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () => this.prisma.geoname.count(),
      { first, last, before, after },
    );

    return geonames;
  }

  async findPopular(pagination: PaginationArgs, orderBy: GeonameOrder) {
    const { skip, after, before, first, last } = pagination;

    const geonames = await findManyCursorConnection(
      (args) =>
        this.prisma.geoname.findMany({
          include: {
            userVisited: true,
            userWanted: true,
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () => this.prisma.geoname.count(),
      { first, last, before, after },
    );

    return geonames;
  }
}
