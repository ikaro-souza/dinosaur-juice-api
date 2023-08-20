import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { env } from "./env";
import { ManufacturersModule } from "./manufacturers/manufacturers.module";
import { VehiclesModule } from "./vehicles/vehicles.module";
import { MotorcyclesModule } from './motorcycles/motorcycles.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: env.DB_HOST,
            port: env.DB_PORT,
            username: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
            autoLoadEntities: true,
        }),
        ManufacturersModule,
        VehiclesModule,
        MotorcyclesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
