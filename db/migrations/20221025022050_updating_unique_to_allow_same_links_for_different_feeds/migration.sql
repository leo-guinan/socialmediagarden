/*
  Warnings:

  - A unique constraint covering the columns `[feedId,backendContentId]` on the table `Content` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Content_link_key";

-- CreateIndex
CREATE UNIQUE INDEX "Content_feedId_backendContentId_key" ON "Content"("feedId", "backendContentId");
