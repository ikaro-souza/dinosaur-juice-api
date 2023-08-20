import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { env } from "./env";
import { ManufacturersModule } from "./manufacturers/manufacturers.module";
import { MotorcyclesModule } from "./motorcycles/motorcycles.module";
import { StoresModule } from "./stores/stores.module";
import { VehiclesModule } from "./vehicles/vehicles.module";

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
        StoresModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
