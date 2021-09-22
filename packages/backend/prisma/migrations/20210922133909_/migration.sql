/*
  Warnings:

  - You are about to drop the column `urls` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "urls",
ADD COLUMN     "urlFull" TEXT,
ADD COLUMN     "urlRaw" TEXT,
ADD COLUMN     "urlRegular" TEXT,
ADD COLUMN     "urlSmall" TEXT,
ADD COLUMN     "urlThumb" TEXT;
