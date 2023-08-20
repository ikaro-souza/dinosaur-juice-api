import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMotorcycleDto } from "./dto/create-motorcycle.dto";
import { UpdateMotorcycleDto } from "./dto/update-motorcycle.dto";
import { Motorcycle } from "./entities/motorcycle.entity";

@Injectable()
export class MotorcyclesService {
    constructor(
        @InjectRepository(Motorcycle)
        private readonly motorcyclesRepository: Repository<Motorcycle>,
    ) {}

    create(createMotorcycleDto: CreateMotorcycleDto) {
        return "This action adds a new motorcycle";
    }

    findAll() {
        return this.motorcyclesRepository.find({
            relations: {
                vehicle: true,
            },
            select: {
                vehicle: {
                    id: true,
                    displacement: true,
                    fuel_type: true,
                    model: true,
                    year: true,
                    injection_type: true,
                    name: true,
                    type: true,
                },
            },
        });
    }

    findOne(id: number) {
        return this.motorcyclesRepository.findOne({
            relations: {
                vehicle: true,
            },
            select: {
                vehicle: {
                    id: true,
                    displacement: true,
                    fuel_type: true,
                    model: true,
                    year: true,
                    injection_type: true,
                    name: true,
                    type: true,
                },
            },
            where: { id: id },
        });
    }

    update(id: number, updateMotorcycleDto: UpdateMotorcycleDto) {
        return `This action updates a #${id} motorcycle`;
    }

    remove(id: number) {
        return `This action removes a #${id} motorcycle`;
    }
}
