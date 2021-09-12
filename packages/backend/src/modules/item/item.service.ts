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

    const item = await this.prisma.item.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
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

    const item = await this.prisma.item.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
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
      throw new Error('This item is not on the list');
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

    const item = await this.prisma.item.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
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

  async findAll(input: ItemsInput) {
    if (!input) {
      const items = await this.prisma.item.findMany({
        include: {
          localizations: true,
          userVisited: true,
          userWanted: true,
        },
      });

      return items;
    }

    const { itemTagId } = input;

    const tagExist = await this.prisma.itemTag.findUnique({
      where: {
        id: itemTagId,
      },
    });

    if (!tagExist) {
      throw new Error("This tag doesn't exist");
    }

    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
        userVisited: true,
        userWanted: true,
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
    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
        userWanted: true,
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
    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
        userVisited: true,
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
}
