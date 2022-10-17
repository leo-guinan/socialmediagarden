-- CreateTable
CREATE TABLE "Garden" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "public" BOOLEAN NOT NULL,

    CONSTRAINT "Garden_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Garden_slug_key" ON "Garden"("slug");

-- AddForeignKey
ALTER TABLE "Garden" ADD CONSTRAINT "Garden_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
