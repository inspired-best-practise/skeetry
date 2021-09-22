import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/models/user.model';
import { ActionItemInput } from './dto/action-item.input';
import { ItemsInput } from './dto/items.input';

// TODO: refactor addItem, removeItem, moveItem
@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async addItem(user: User, input: ActionItemInput) {
    const { id, type } = input;

    const item = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: true,
      },
      where: {
        id,
      },
    });

    const alreadyWanted = item.userWanted.find((u) => u.id === user.id);
    const alreadyVisited = item.userVisited.find((u) => u.id === user.id);

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
                  id: item.id,
                },
              },
            }
          : {
              visitedCount: {
                increment: 1,
              },
              visited: {
                connect: {
                  id: item.id,
                },
              },
            },
    });

    return item;
  }

  async removeItem(user: User, input: ActionItemInput) {
    const { id, type } = input;

    const item = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: true,
      },
      where: {
        id,
      },
    });

    const existInWanted = item.userWanted.find((u) => u.id === user.id);
    const existInVisited = item.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && !existInWanted) ||
      (type === 'VISITED' && !existInVisited)
    ) {
      throw new Error('Item is not on the list');
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
                  id: item.id,
                },
              },
            }
          : {
              visitedCount: {
                decrement: 1,
              },
              visited: {
                disconnect: {
                  id: item.id,
                },
              },
            },
    });

    return item;
  }

  async moveItem(user: User, input: ActionItemInput) {
    const { id, type } = input;

    const item = await this.prisma.city.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
        state: true,
      },
      where: {
        id,
      },
    });

    const existInWanted = item.userWanted.find((u) => u.id === user.id);
    const existInVisited = item.userVisited.find((u) => u.id === user.id);

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
                  id: item.id,
                },
              },
              visited: {
                connect: {
                  id: item.id,
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
                  id: item.id,
                },
              },
              wanted: {
                connect: {
                  id: item.id,
                },
              },
            },
    });

    return item;
  }

  async findOne(id: string) {
    const item = await this.prisma.city.findUnique({
      include: {
        localizations: true,
        userVisited: true,
        userWanted: true,
        state: true,
      },
      where: {
        id,
      },
    });

    if (!item) {
      throw new Error('Item does not exist');
    }

    return item;
  }

  async findAll(input: ItemsInput) {
    if (!input) {
      const items = await this.prisma.city.findMany({
        include: {
          localizations: true,
          userVisited: true,
          userWanted: true,
          state: true,
        },
      });

      return items;
    }

    const { itemTagId } = input;

    const tagExist = await this.prisma.tag.findUnique({
      where: {
        id: itemTagId,
      },
    });

    if (!tagExist) {
      throw new Error("Tag doesn't exist");
    }

    const items = await this.prisma.city.findMany({
      include: {
        localizations: true,
        userVisited: true,
        userWanted: true,
        state: true,
      },
      where: {
        tags: {
          some: {
            id: itemTagId,
          },
        },
      },
    });

    return items;
  }

  async findWanted(user: User) {
    const items = await this.prisma.city.findMany({
      include: {
        localizations: true,
        userWanted: true,
        state: true,
      },
      where: {
        userWanted: {
          some: {
            id: user.id,
          },
        },
      },
    });

    return items;
  }

  async findVisited(user: User) {
    const items = await this.prisma.city.findMany({
      include: {
        localizations: true,
        userVisited: true,
        state: true,
      },
      where: {
        userVisited: {
          some: {
            id: user.id,
          },
        },
      },
    });

    return items;
  }

  // TODO: just items now
  async findNearby() {
    const items = await this.prisma.city.findMany({
      include: {
        localizations: true,
        userVisited: true,
        state: true,
      },
    });

    return items;
  }

  // TODO: just items now
  async findPopular() {
    const items = await this.prisma.city.findMany({
      include: {
        localizations: true,
        userVisited: true,
        state: true,
      },
    });

    return items;
  }
}
