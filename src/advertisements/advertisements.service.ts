import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateAdvertisementDto } from "./dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto";
import {
    VehicleAdvertisementsDto,
    vehicleAdvertisementsDto,
} from "./dto/vehicle-advertisements.dto";
import { MotorcycleAd } from "./entities/motorcycle-ad.entity";
import { VehicleAdsView } from "./entities/vehicle-ads-view.entity";

@Injectable()
export class AdvertisementsService {
    constructor(
        @InjectRepository(VehicleAdsView)
        private readonly advertisementsRepository: Repository<VehicleAdsView>,
        private readonly dataSource: DataSource,
    ) {}

    create(createAdvertisementDto: CreateAdvertisementDto) {
        return "This action adds a new advertisement";
    }

    async findAll(): Promise<VehicleAdvertisementsDto> {
        const rows = await this.advertisementsRepository.find();
        return vehicleAdvertisementsDto.parse(rows);
    }

    async findMotorcycleAd(id: number) {
        const data = await this.dataSource.query<MotorcycleAd[]>(
            `select * from get_motorcycle_ad (${id})`,
        );
        return data[0];
    }

    update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
        return `This action updates a #${id} advertisement`;
    }

    remove(id: number) {
        return `This action removes a #${id} advertisement`;
    }
}
