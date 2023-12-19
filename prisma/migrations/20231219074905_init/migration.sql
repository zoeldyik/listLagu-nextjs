-- CreateTable
CREATE TABLE "Datas" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nomor" INTEGER NOT NULL,
    "filename" TEXT NOT NULL,

    CONSTRAINT "Datas_pkey" PRIMARY KEY ("id")
);
