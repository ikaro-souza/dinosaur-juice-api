import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateAdvertisementDto } from "./dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto";
import { Advertisement } from "./entities/advertisement.entity";
import { MotorcycleAd } from "./entities/motorcycle-ad.entity";

@Injectable()
export class AdvertisementsService {
    constructor(
        @InjectRepository(Advertisement)
        private readonly advertisementsRepository: Repository<Advertisement>,
        private readonly dataSource: DataSource,
    ) {}

    create(createAdvertisementDto: CreateAdvertisementDto) {
        return "This action adds a new advertisement";
    }

    findAll() {
        return this.advertisementsRepository.find({
            relations: {
                store: true,
                vehicle: true,
                images: true,
            },
        });
    }

    findOne(id: number) {
        return this.advertisementsRepository.findOne({
            relations: {
                store: true,
                vehicle: true,
                images: true,
            },
            where: { id: id },
        });
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
