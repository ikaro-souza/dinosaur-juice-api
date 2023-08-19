import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { env } from "./env";
import { ManufacturersModule } from "./manufacturers/manufacturers.module";

@Module({
    imports: [
        ManufacturersModule,
        TypeOrmModule.forRoot({
            type: "postgres",
            host: env.DB_HOST,
            port: env.DB_PORT,
            username: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
            logger: "simple-console",
            autoLoadEntities: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
