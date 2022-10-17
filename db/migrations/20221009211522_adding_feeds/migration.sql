-- CreateTable
CREATE TABLE "Feed" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "feed" TEXT NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FeedToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Feed_feed_key" ON "Feed"("feed");

-- CreateIndex
CREATE UNIQUE INDEX "_FeedToUser_AB_unique" ON "_FeedToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FeedToUser_B_index" ON "_FeedToUser"("B");

-- AddForeignKey
ALTER TABLE "_FeedToUser" ADD CONSTRAINT "_FeedToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedToUser" ADD CONSTRAINT "_FeedToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
