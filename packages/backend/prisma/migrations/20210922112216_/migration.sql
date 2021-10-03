/*
  Warnings:

  - You are about to drop the column `longitue` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `longitue` on the `State` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "longitue",
ADD COLUMN     "longitude" TEXT;

-- AlterTable
ALTER TABLE "State" DROP COLUMN "longitue",
ADD COLUMN     "longitude" TEXT NOT NULL;
