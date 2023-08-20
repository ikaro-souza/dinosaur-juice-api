import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStoreDto } from "./dto/create-store.dto";
import { UpdateStoreDto } from "./dto/update-store.dto";
import { Store } from "./entities/store.entity";

@Injectable()
export class StoresService {
    constructor(
        @InjectRepository(Store)
        private readonly storesRepository: Repository<Store>,
    ) {}

    create(createStoreDto: CreateStoreDto) {
        return "This action adds a new store";
    }

    findAll() {
        return this.storesRepository.find();
    }

    findOne(id: number) {
        return this.storesRepository.findOne({ where: { id: id } });
    }

    update(id: number, updateStoreDto: UpdateStoreDto) {
        return `This action updates a #${id} store`;
    }

    remove(id: number) {
        return `This action removes a #${id} store`;
    }
}
