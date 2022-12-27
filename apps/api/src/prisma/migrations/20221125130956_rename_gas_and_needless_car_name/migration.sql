/*
  Warnings:

  - You are about to drop the column `name` on the `car` table. All the data in the column will be lost.
  - The values [gas] on the enum `Car_fuel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `car` DROP COLUMN `name`,
    MODIFY `fuel` ENUM('diesel', 'petrol', 'gasoline', 'electric') NOT NULL;
