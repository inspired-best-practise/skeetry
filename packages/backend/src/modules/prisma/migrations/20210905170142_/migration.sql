/*
  Warnings:

  - You are about to drop the column `wantedCout` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "wantedCout",
ADD COLUMN     "wantedCount" INTEGER NOT NULL DEFAULT 0;
