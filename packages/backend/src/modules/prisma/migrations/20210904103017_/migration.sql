/*
  Warnings:

  - You are about to drop the column `user_visited_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `user_wanted_id` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_user_visited_id_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_user_wanted_id_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "user_visited_id",
DROP COLUMN "user_wanted_id";
