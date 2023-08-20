import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { type VehicleType } from "src/vehicles/entities/vehicle.entity";
import { Repository } from "typeorm";
import { CreateManufacturerDto } from "./dto/create-manufacturer.dto";
import { UpdateManufacturerDto } from "./dto/update-manufacturer.dto";
import { Manufacturer } from "./entities/manufacturer.entity";

@Injectable()
export class ManufacturersService {
    constructor(
        @InjectRepository(Manufacturer)
        private readonly manufacturersRepository: Repository<Manufacturer>,
    ) {}

    create(createManufacturerDto: CreateManufacturerDto) {
        return "This action adds a new manufacturer";
    }

    findAll(vehicleType?: VehicleType) {
        return this.manufacturersRepository.find({
            where: {
                vehicle_type: vehicleType,
            },
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} manufacturer`;
    }

    update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
        return `This action updates a #${id} manufacturer`;
    }

    remove(id: number) {
        return `This action removes a #${id} manufacturer`;
    }
}
