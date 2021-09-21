/*
  Warnings:

  - The values [COUNTRY] on the enum `ItemType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `countryId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Continent" AS ENUM ('ASIA', 'AFRICA', 'NORTH_AMERICA', 'SOUTH_AMERICA', 'ANTARCTICA', 'EUROPE', 'AUSTRALIA');

-- AlterEnum
BEGIN;
CREATE TYPE "ItemType_new" AS ENUM ('CITY', 'PLACE', 'SIGHT');
ALTER TABLE "Item" ALTER COLUMN "type" TYPE "ItemType_new" USING ("type"::text::"ItemType_new");
ALTER TYPE "ItemType" RENAME TO "ItemType_old";
ALTER TYPE "ItemType_new" RENAME TO "ItemType";
DROP TYPE "ItemType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "continent" "Continent" NOT NULL,
    "locale" "Locale" NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryLocalization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "locale" "Locale" NOT NULL,
    "countryId" TEXT,

    CONSTRAINT "CountryLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CountryLocalization_name_key" ON "CountryLocalization"("name");

-- AddForeignKey
ALTER TABLE "CountryLocalization" ADD CONSTRAINT "CountryLocalization_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
