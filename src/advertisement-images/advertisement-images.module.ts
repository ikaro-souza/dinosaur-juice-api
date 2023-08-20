import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdvertisementImagesController } from "./advertisement-images.controller";
import { AdvertisementImagesService } from "./advertisement-images.service";
import { AdvertisementImage } from "./entities/advertisement-image.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AdvertisementImage])],
    controllers: [AdvertisementImagesController],
    providers: [AdvertisementImagesService],
})
export class AdvertisementImagesModule {}
