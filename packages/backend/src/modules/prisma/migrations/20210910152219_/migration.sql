/*
  Warnings:

  - Added the required column `locale` to the `ItemReview` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('EN', 'RU');

-- DropForeignKey
ALTER TABLE "ItemReview" DROP CONSTRAINT "ItemReview_itemId_fkey";

-- DropIndex
DROP INDEX "Item.name_unique";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "locale" "Locale" NOT NULL DEFAULT E'EN';

-- AlterTable
ALTER TABLE "ItemReview" ADD COLUMN     "locale" "Locale" NOT NULL;

-- AlterTable
ALTER TABLE "ItemTag" ADD COLUMN     "locale" "Locale" NOT NULL DEFAULT E'EN';

-- CreateTable
CREATE TABLE "ItemLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "itemId" TEXT,

    CONSTRAINT "ItemLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemTagLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "itemTagId" TEXT,

    CONSTRAINT "ItemTagLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemReviewLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "body" TEXT NOT NULL,
    "itemReviewId" TEXT,

    CONSTRAINT "ItemReviewLocalization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemLocalization" ADD CONSTRAINT "ItemLocalization_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemTagLocalization" ADD CONSTRAINT "ItemTagLocalization_itemTagId_fkey" FOREIGN KEY ("itemTagId") REFERENCES "ItemTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemReview" ADD CONSTRAINT "ItemReview_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemReviewLocalization" ADD CONSTRAINT "ItemReviewLocalization_itemReviewId_fkey" FOREIGN KEY ("itemReviewId") REFERENCES "ItemReview"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "ItemTag.name_unique" RENAME TO "ItemTag_name_key";

-- RenameIndex
ALTER INDEX "User.phone_unique" RENAME TO "User_phone_key";

-- RenameIndex
ALTER INDEX "User.username_unique" RENAME TO "User_username_key";
