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
import { type VehicleType } from "src/vehicles/entities/vehicle.entity";
import { CreateManufacturerDto } from "./dto/create-manufacturer.dto";
import { UpdateManufacturerDto } from "./dto/update-manufacturer.dto";
import { ManufacturersService } from "./manufacturers.service";

@Controller("manufacturers")
export class ManufacturersController {
    constructor(private readonly manufacturersService: ManufacturersService) {}

    @Post()
    create(@Body() createManufacturerDto: CreateManufacturerDto) {
        return this.manufacturersService.create(createManufacturerDto);
    }

    @Get()
    findAll(@Query(FILTERS.vehicleType) vehicleType?: VehicleType) {
        return this.manufacturersService.findAll(vehicleType);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.manufacturersService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateManufacturerDto: UpdateManufacturerDto,
    ) {
        return this.manufacturersService.update(+id, updateManufacturerDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.manufacturersService.remove(+id);
    }
}
