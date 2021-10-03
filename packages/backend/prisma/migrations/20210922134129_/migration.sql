/*
  Warnings:

  - You are about to drop the column `blurHash` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `isUnsplash` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `unsplashId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `urlFull` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `urlRaw` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "blurHash",
DROP COLUMN "isUnsplash",
DROP COLUMN "unsplashId",
DROP COLUMN "urlFull",
DROP COLUMN "urlRaw";
