-- AlterTable
ALTER TABLE "User" ADD COLUMN     "visitedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "wantedCout" INTEGER NOT NULL DEFAULT 0;
