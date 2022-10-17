/*
  Warnings:

  - You are about to drop the column `read` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `saved` on the `Content` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "read",
DROP COLUMN "saved";
