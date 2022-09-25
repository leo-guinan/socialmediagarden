/*
  Warnings:

  - Changed the type of `interval` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Interval" AS ENUM ('MONTHLY', 'ANNUAL', 'LIFETIME');

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "interval",
ADD COLUMN     "interval" "Interval" NOT NULL;
