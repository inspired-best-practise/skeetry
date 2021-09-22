-- CreateEnum
CREATE TYPE "Continent" AS ENUM ('ASIA', 'AFRICA', 'NORTH_AMERICA', 'SOUTH_AMERICA', 'ANTARCTICA', 'EUROPE', 'OCEANIA');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('RU');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "phone" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "wantedCount" INTEGER NOT NULL DEFAULT 0,
    "visitedCount" INTEGER NOT NULL DEFAULT 0,
    "rating" INTEGER,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iso2" TEXT,
    "iso3" TEXT,
    "numericCode" TEXT,
    "phoneCode" TEXT,
    "currency" TEXT,
    "currencySymbol" TEXT,
    "tld" TEXT,
    "native" TEXT,
    "continent" "Continent" NOT NULL,
    "subregion" TEXT,
    "latitude" TEXT,
    "longitue" TEXT,
    "emoji" TEXT,
    "emojiU" TEXT,
    "overview" TEXT,

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

-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stateCode" TEXT,
    "latitude" TEXT NOT NULL,
    "longitue" TEXT NOT NULL,
    "overview" TEXT,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StateLocalization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "StateLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "wantedCount" INTEGER NOT NULL DEFAULT 0,
    "visitedCount" INTEGER NOT NULL DEFAULT 0,
    "overview" TEXT,
    "isCapital" BOOLEAN NOT NULL DEFAULT false,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "CityLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "urls" JSONB NOT NULL DEFAULT E'[{ "raw": "" }, { "full": "" }, { "regular": "" }, { "small": "" }, { "thumb": "" }]',
    "blurHash" TEXT,
    "cityId" TEXT,
    "isUnsplash" BOOLEAN NOT NULL DEFAULT true,
    "unsplashId" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "TagLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "previewTitle" TEXT NOT NULL,
    "previewImage" TEXT NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryLocalization" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "previewTitle" TEXT NOT NULL,
    "storyId" TEXT,

    CONSTRAINT "StoryLocalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryStep" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "storyId" TEXT,

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

-- CreateTable
CREATE TABLE "Sms" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WantedCity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_VisitedCity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CityToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CountryLocalization_name_key" ON "CountryLocalization"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_WantedCity_AB_unique" ON "_WantedCity"("A", "B");

-- CreateIndex
CREATE INDEX "_WantedCity_B_index" ON "_WantedCity"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VisitedCity_AB_unique" ON "_VisitedCity"("A", "B");

-- CreateIndex
CREATE INDEX "_VisitedCity_B_index" ON "_VisitedCity"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CityToTag_AB_unique" ON "_CityToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CityToTag_B_index" ON "_CityToTag"("B");

-- AddForeignKey
ALTER TABLE "CountryLocalization" ADD CONSTRAINT "CountryLocalization_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateLocalization" ADD CONSTRAINT "StateLocalization_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityLocalization" ADD CONSTRAINT "CityLocalization_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagLocalization" ADD CONSTRAINT "TagLocalization_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryLocalization" ADD CONSTRAINT "StoryLocalization_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryStep" ADD CONSTRAINT "StoryStep_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryStepLocalization" ADD CONSTRAINT "StoryStepLocalization_storyStepId_fkey" FOREIGN KEY ("storyStepId") REFERENCES "StoryStep"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WantedCity" ADD FOREIGN KEY ("A") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WantedCity" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisitedCity" ADD FOREIGN KEY ("A") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisitedCity" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CityToTag" ADD FOREIGN KEY ("A") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CityToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
