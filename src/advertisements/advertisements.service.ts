import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAdvertisementDto } from "./dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto";
import { Advertisement } from "./entities/advertisement.entity";

@Injectable()
export class AdvertisementsService {
    constructor(
        @InjectRepository(Advertisement)
        private readonly advertisementsRepository: Repository<Advertisement>,
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

    update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
        return `This action updates a #${id} advertisement`;
    }

    remove(id: number) {
        return `This action removes a #${id} advertisement`;
    }
}
