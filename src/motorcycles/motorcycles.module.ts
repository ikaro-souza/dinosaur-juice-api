import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Motorcycle } from "./entities/motorcycle.entity";
import { MotorcyclesController } from "./motorcycles.controller";
import { MotorcyclesService } from "./motorcycles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Motorcycle])],
    controllers: [MotorcyclesController],
    providers: [MotorcyclesService],
})
export class MotorcyclesModule {}
