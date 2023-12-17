-- CreateTable
CREATE TABLE "Datas" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,

    CONSTRAINT "Datas_pkey" PRIMARY KEY ("id")
);
