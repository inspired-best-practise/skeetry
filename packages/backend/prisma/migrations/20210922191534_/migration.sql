/*
  Warnings:

  - Added the required column `locale` to the `StateLocalization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StateLocalization" ALTER COLUMN "locale" SET DEFAULT E'RU';