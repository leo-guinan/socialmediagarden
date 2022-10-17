-- CreateTable
CREATE TABLE "_FeedToGarden" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FeedToGarden_AB_unique" ON "_FeedToGarden"("A", "B");

-- CreateIndex
CREATE INDEX "_FeedToGarden_B_index" ON "_FeedToGarden"("B");

-- AddForeignKey
ALTER TABLE "_FeedToGarden" ADD CONSTRAINT "_FeedToGarden_A_fkey" FOREIGN KEY ("A") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedToGarden" ADD CONSTRAINT "_FeedToGarden_B_fkey" FOREIGN KEY ("B") REFERENCES "Garden"("id") ON DELETE CASCADE ON UPDATE CASCADE;
