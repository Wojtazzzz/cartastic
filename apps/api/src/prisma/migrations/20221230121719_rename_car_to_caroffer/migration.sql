/*
  Warnings:

  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `Car_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `Car_modelId_fkey`;

-- DropForeignKey
ALTER TABLE `model` DROP FOREIGN KEY `Model_brandId_fkey`;

-- DropTable
DROP TABLE `car`;

-- CreateTable
CREATE TABLE `CarOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `images` JSON NOT NULL,
    `price` DOUBLE NOT NULL,
    `productionYear` INTEGER NOT NULL,
    `miles` INTEGER NOT NULL,
    `fuel` ENUM('diesel', 'petrol', 'gasoline', 'electric') NOT NULL,
    `engine` DOUBLE NOT NULL,
    `body` ENUM('hatchback', 'estate', 'peopleCarrier', 'saloon', 'suv', 'coupe', 'pickup', 'convertible') NOT NULL,
    `transmission` ENUM('manual', 'auto') NOT NULL,
    `brandId` INTEGER NOT NULL,
    `modelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Model` ADD CONSTRAINT `Model_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarOffer` ADD CONSTRAINT `CarOffer_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarOffer` ADD CONSTRAINT `CarOffer_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
