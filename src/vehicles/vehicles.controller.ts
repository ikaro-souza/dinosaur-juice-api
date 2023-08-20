import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";
import { FILTERS } from "src/constants";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { UpdateVehicleDto } from "./dto/update-vehicle.dto";
import { type VehicleType } from "./entities/vehicle.entity";
import { VehiclesService } from "./vehicles.service";

@Controller("vehicles")
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}

    @Post()
    create(@Body() createVehicleDto: CreateVehicleDto) {
        return this.vehiclesService.create(createVehicleDto);
    }

    @Get()
    findAll(@Query(FILTERS.vehicleType) vehicleType?: VehicleType) {
        return this.vehiclesService.findAll(vehicleType);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.vehiclesService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateVehicleDto: UpdateVehicleDto,
    ) {
        return this.vehiclesService.update(+id, updateVehicleDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.vehiclesService.remove(+id);
    }
}
