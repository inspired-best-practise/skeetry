/*
  Warnings:

  - The values [AMERICAS,POLAR,OCEANIA] on the enum `Continent` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Continent_new" AS ENUM ('AFRICA', 'ASIA', 'EUROPE', 'NORTH_AMERICA', 'SOUTH_AMERICA', 'ANTARCTICA', 'AUSTRALIA', 'ISLAND');
ALTER TABLE "Country" ALTER COLUMN "continent" TYPE "Continent_new" USING ("continent"::text::"Continent_new");
ALTER TYPE "Continent" RENAME TO "Continent_old";
ALTER TYPE "Continent_new" RENAME TO "Continent";
DROP TYPE "Continent_old";
COMMIT;
