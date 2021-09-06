/*
  Warnings:

  - You are about to drop the column `itemId` on the `ItemTag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemTag" DROP CONSTRAINT "ItemTag_itemId_fkey";

-- AlterTable
ALTER TABLE "ItemTag" DROP COLUMN "itemId";

-- CreateTable
CREATE TABLE "_ItemToItemTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToItemTag_AB_unique" ON "_ItemToItemTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToItemTag_B_index" ON "_ItemToItemTag"("B");

-- AddForeignKey
ALTER TABLE "_ItemToItemTag" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToItemTag" ADD FOREIGN KEY ("B") REFERENCES "ItemTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
