/*
  Warnings:

  - You are about to drop the column `flag` on the `Item` table. All the data in the column will be lost.
  - Added the required column `flag` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "flag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "flag";