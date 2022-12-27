/*
  Warnings:

  - You are about to drop the column `productionDate` on the `car` table. All the data in the column will be lost.
  - Added the required column `productionYear` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car` DROP COLUMN `productionDate`,
    ADD COLUMN `productionYear` INTEGER NOT NULL;
