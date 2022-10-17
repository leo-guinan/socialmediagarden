-- CreateEnum
CREATE TYPE "FeedType" AS ENUM ('BLOG', 'YOUTUBE', 'VIDEO', 'PODCAST');

-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "type" "FeedType" NOT NULL DEFAULT 'YOUTUBE';

-- AlterTable
ALTER TABLE "Garden" ADD COLUMN     "featuredContentId" INTEGER;

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "link" TEXT NOT NULL,
    "image" TEXT,
    "feedId" INTEGER,
    "backendContentId" INTEGER,
    "read" BOOLEAN NOT NULL,
    "saved" BOOLEAN NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ReadContent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SavedContent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ReadContent_AB_unique" ON "_ReadContent"("A", "B");

-- CreateIndex
CREATE INDEX "_ReadContent_B_index" ON "_ReadContent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SavedContent_AB_unique" ON "_SavedContent"("A", "B");

-- CreateIndex
CREATE INDEX "_SavedContent_B_index" ON "_SavedContent"("B");

-- AddForeignKey
ALTER TABLE "Garden" ADD CONSTRAINT "Garden_featuredContentId_fkey" FOREIGN KEY ("featuredContentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReadContent" ADD CONSTRAINT "_ReadContent_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReadContent" ADD CONSTRAINT "_ReadContent_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavedContent" ADD CONSTRAINT "_SavedContent_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavedContent" ADD CONSTRAINT "_SavedContent_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
