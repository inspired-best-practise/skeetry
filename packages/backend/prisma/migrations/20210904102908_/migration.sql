-- CreateTable
CREATE TABLE "_WantedItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_VisitedItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WantedItem_AB_unique" ON "_WantedItem"("A", "B");

-- CreateIndex
CREATE INDEX "_WantedItem_B_index" ON "_WantedItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VisitedItem_AB_unique" ON "_VisitedItem"("A", "B");

-- CreateIndex
CREATE INDEX "_VisitedItem_B_index" ON "_VisitedItem"("B");

-- AddForeignKey
ALTER TABLE "_WantedItem" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WantedItem" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisitedItem" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisitedItem" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
