/*
  Warnings:

  - The values [NORTH_AMERICA,SOUTH_AMERICA] on the enum `Continent` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[pk]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pk` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Continent_new" AS ENUM ('ASIA', 'AFRICA', 'AMERICAS', 'ANTARCTICA', 'EUROPE', 'OCEANIA', 'NONE');
ALTER TABLE "Country" ALTER COLUMN "continent" TYPE "Continent_new" USING ("continent"::text::"Continent_new");
ALTER TYPE "Continent" RENAME TO "Continent_old";
ALTER TYPE "Continent_new" RENAME TO "Continent";
DROP TYPE "Continent_old";
COMMIT;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "pk" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_pk_key" ON "Country"("pk");
