-- CreateTable
CREATE TABLE "Restaurant" (
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "images" TEXT[],
    "name" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "featured" JSONB NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");
