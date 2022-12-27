-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `images` JSON NOT NULL,
    `price` DOUBLE NOT NULL,
    `productionDate` DATETIME(3) NOT NULL,
    `miles` INTEGER NOT NULL,
    `fuel` ENUM('diesel', 'petrol', 'gas', 'electric') NOT NULL,
    `engine` DOUBLE NOT NULL,
    `body` ENUM('hatchback', 'estate', 'peopleCarrier', 'saloon', 'suv', 'coupe', 'pickup', 'convertible') NOT NULL,
    `transmission` ENUM('manual', 'auto') NOT NULL,
    `brandId` INTEGER NOT NULL,
    `modelId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
