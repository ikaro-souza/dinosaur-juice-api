import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
import { Vehicle, VehicleType } from "./entities/vehicle.entity";

@Injectable()
export class VehiclesService {
    constructor(
        @InjectRepository(Vehicle)
        private readonly vehiclesRepository: Repository<Vehicle>,
    ) {}

    create(createVehicleDto: CreateVehicleDto) {
        return "This action adds a new vehicle";
    }

    findAll(vehicleType?: VehicleType) {
        return this.vehiclesRepository.find({
            relations: {
                manufacturer: true,
            },
            where: {
                type: vehicleType,
            },
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} vehicle`;
    }

    update(id: number, updateVehicleDto: UpdateVehicleDto) {
        return `This action updates a #${id} vehicle`;
    }

    remove(id: number) {
        return `This action removes a #${id} vehicle`;
    }
}
