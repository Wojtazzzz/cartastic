/*
  Warnings:

  - Added the required column `doors` to the `CarOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gears` to the `CarOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `CarOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topSpeed` to the `CarOffer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `caroffer` ADD COLUMN `doors` INTEGER NOT NULL,
    ADD COLUMN `gears` INTEGER NOT NULL,
    ADD COLUMN `hp` INTEGER NOT NULL,
    ADD COLUMN `topSpeed` INTEGER NOT NULL;
