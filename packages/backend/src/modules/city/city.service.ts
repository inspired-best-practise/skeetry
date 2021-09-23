import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { PaginationArgs } from '../common/pagination/pagination.args';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/models/user.model';
import { ActionCityInput } from './dto/action-city.input';
import { CitiesInput } from './dto/cities.input';
import { CityOrder } from './dto/city-order.input';

// TODO: refactor addCity, removeCity, moveCity
@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async addCity(user: User, input: ActionCityInput) {
    const { id, type } = input;

    const city = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: {
          include: {
            country: true,
          },
        },
      },
      where: {
        id,
      },
    });

    const alreadyWanted = city.userWanted.find((u) => u.id === user.id);
    const alreadyVisited = city.userVisited.find((u) => u.id === user.id);

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
                  id: city.id,
                },
              },
            }
          : {
              visitedCount: {
                increment: 1,
              },
              visited: {
                connect: {
                  id: city.id,
                },
              },
            },
    });

    return city;
  }

  async removeCity(user: User, input: ActionCityInput) {
    const { id, type } = input;

    const city = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: {
          include: {
            country: true,
          },
        },
      },
      where: {
        id,
      },
    });

    const existInWanted = city.userWanted.find((u) => u.id === user.id);
    const existInVisited = city.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && !existInWanted) ||
      (type === 'VISITED' && !existInVisited)
    ) {
      throw new Error('City is not on the list');
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
                  id: city.id,
                },
              },
            }
          : {
              visitedCount: {
                decrement: 1,
              },
              visited: {
                disconnect: {
                  id: city.id,
                },
              },
            },
    });

    return city;
  }

  async moveCity(user: User, input: ActionCityInput) {
    const { id, type } = input;

    const city = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: {
          include: {
            country: true,
          },
        },
      },
      where: {
        id,
      },
    });

    const existInWanted = city.userWanted.find((u) => u.id === user.id);
    const existInVisited = city.userVisited.find((u) => u.id === user.id);

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
                  id: city.id,
                },
              },
              visited: {
                connect: {
                  id: city.id,
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
                  id: city.id,
                },
              },
              wanted: {
                connect: {
                  id: city.id,
                },
              },
            },
    });

    return city;
  }

  async findOne(id: string) {
    const city = await this.prisma.city.findUnique({
      include: {
        localizations: true,
        userVisited: true,
        userWanted: true,
        state: {
          include: {
            country: true,
          },
        },
      },
      where: {
        id,
      },
    });

    if (!city) {
      throw new Error('City does not exist');
    }

    return city;
  }

  async findAll(
    input: CitiesInput,
    pagination: PaginationArgs,
    query: string,
    orderBy: CityOrder,
  ) {
    const { skip, after, before, first, last } = pagination;
    if (!input) {
      const cities = await findManyCursorConnection(
        (args) =>
          this.prisma.city.findMany({
            include: {
              localizations: true,
              userVisited: true,
              userWanted: true,
              state: {
                include: {
                  country: true,
                },
              },
            },
            where: {
              name: { contains: query || '' },
            },
            orderBy: orderBy ? { name: orderBy.direction } : null,
            ...args,
          }),
        () =>
          this.prisma.city.count({
            where: {
              name: { contains: query || '' },
            },
          }),
        { first, last, before, after },
      );
      return cities;
    }

    const { cityTagId } = input;

    const tagExist = await this.prisma.tag.findUnique({
      where: {
        id: cityTagId,
      },
    });

    if (!tagExist) {
      throw new Error("Tag doesn't exist");
    }

    const cities = await findManyCursorConnection(
      (args) =>
        this.prisma.city.findMany({
          include: {
            localizations: true,
            userVisited: true,
            userWanted: true,
            state: {
              include: {
                country: true,
              },
            },
          },
          where: {
            AND: [
              { name: { contains: query || '' } },
              {
                tags: {
                  some: {
                    id: cityTagId,
                  },
                },
              },
            ],
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.city.count({
          where: {
            AND: [
              { name: { contains: query || '' } },
              {
                tags: {
                  some: {
                    id: cityTagId,
                  },
                },
              },
            ],
          },
        }),
      { first, last, before, after },
    );

    return cities;
  }

  async findWanted(pagination: PaginationArgs, orderBy: CityOrder, user: User) {
    const { skip, after, before, first, last } = pagination;

    const cities = await findManyCursorConnection(
      (args) =>
        this.prisma.city.findMany({
          include: {
            localizations: true,
            userWanted: true,
            state: {
              include: {
                country: true,
              },
            },
          },
          where: {
            userWanted: {
              some: {
                id: user.id,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.city.count({
          where: {
            userWanted: {
              some: {
                id: user.id,
              },
            },
          },
        }),
      { first, last, before, after },
    );

    return cities;
  }

  async findVisited(
    pagination: PaginationArgs,
    orderBy: CityOrder,
    user: User,
  ) {
    const { skip, after, before, first, last } = pagination;

    const cities = await findManyCursorConnection(
      (args) =>
        this.prisma.city.findMany({
          include: {
            localizations: true,
            userVisited: true,
            state: {
              include: {
                country: true,
              },
            },
          },
          where: {
            userVisited: {
              some: {
                id: user.id,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.city.count({
          where: {
            userVisited: {
              some: {
                id: user.id,
              },
            },
          },
        }),
      { first, last, before, after },
    );

    return cities;
  }

  // TODO: just cities now
  async findNearby(pagination: PaginationArgs, orderBy: CityOrder, user: User) {
    const { skip, after, before, first, last } = pagination;

    const cities = await findManyCursorConnection(
      (args) =>
        this.prisma.city.findMany({
          include: {
            localizations: true,
            userVisited: true,
            userWanted: true,
            state: {
              include: {
                country: true,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () => this.prisma.city.count(),
      { first, last, before, after },
    );

    return cities;
  }

  // TODO: just cities now
  async findPopular(
    pagination: PaginationArgs,
    orderBy: CityOrder,
    user: User,
  ) {
    const { skip, after, before, first, last } = pagination;

    const cities = await findManyCursorConnection(
      (args) =>
        this.prisma.city.findMany({
          include: {
            localizations: true,
            userVisited: true,
            userWanted: true,
            state: {
              include: {
                country: true,
              },
            },
          },
          orderBy: orderBy ? { name: orderBy.direction } : null,
          ...args,
        }),
      () => this.prisma.city.count(),
      { first, last, before, after },
    );

    return cities;
  }
}
