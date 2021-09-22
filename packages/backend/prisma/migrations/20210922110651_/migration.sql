/*
  Warnings:

  - A unique constraint covering the columns `[pk]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pk]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pk` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pk` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "pk" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "State" ADD COLUMN     "pk" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "City_pk_key" ON "City"("pk");

-- CreateIndex
CREATE UNIQUE INDEX "State_pk_key" ON "State"("pk");
