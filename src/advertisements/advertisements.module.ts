import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdvertisementsController } from "./advertisements.controller";
import { AdvertisementsService } from "./advertisements.service";
import { Advertisement } from "./entities/advertisement.entity";
import { VehicleAdsView } from "./entities/vehicle-ads-view.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Advertisement, VehicleAdsView])],
    controllers: [AdvertisementsController],
    providers: [AdvertisementsService],
})
export class AdvertisementsModule {}
