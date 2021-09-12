/*
  Warnings:

  - You are about to drop the column `description` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `StoryLocalization` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `StoryLocalization` table. All the data in the column will be lost.
  - Added the required column `previewImage` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewTitle` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewTitle` to the `StoryLocalization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Story" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "previewImage" TEXT NOT NULL,
ADD COLUMN     "previewTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StoryLocalization" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "previewTitle" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "StoryStep" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "storyId" TEXT,
    "locale" "Locale" NOT NULL,

    CONSTRAINT "StoryStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryStepLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "storyStepId" TEXT,

    CONSTRAINT "StoryStepLocalization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoryStep" ADD CONSTRAINT "StoryStep_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryStepLocalization" ADD CONSTRAINT "StoryStepLocalization_storyStepId_fkey" FOREIGN KEY ("storyStepId") REFERENCES "StoryStep"("id") ON DELETE SET NULL ON UPDATE CASCADE;
