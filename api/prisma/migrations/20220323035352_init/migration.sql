-- CreateTable
CREATE TABLE "userid" (
    "id" SERIAL NOT NULL,
    "auth0id" VARCHAR(255) NOT NULL,

    CONSTRAINT "userid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userid_auth0id_key" ON "userid"("auth0id");
