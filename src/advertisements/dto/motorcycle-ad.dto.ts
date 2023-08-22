import { Expose, Transform } from "class-transformer";
import {
    MotorcycleBodyType,
    MotorcycleIgnitionType,
} from "src/motorcycles/entities/motorcycle.entity";
import { Store } from "src/stores/entities/store.entity";
import { VehicleColor, VehicleState } from "../entities/advertisement.entity";

export class MotorcycleAdDto {
    @Expose()
    id: number;

    @Expose()
    created_at: Date;

    @Expose()
    updated_at: Date;

    @Expose()
    deleted_at: Date | null;

    @Expose()
    @Transform(({ value }) => Number(value))
    value: number;

    @Expose()
    plate_last_digit: string;

    @Expose()
    mileage: number;

    @Expose()
    primary_color: VehicleColor;

    @Expose()
    secondary_color: VehicleColor | null;

    @Expose()
    state: VehicleState;

    @Expose()
    city: string;

    @Expose()
    name: string;

    @Expose()
    manufacturer: string;

    @Expose()
    ignition_type: MotorcycleIgnitionType;

    @Expose()
    body_type: MotorcycleBodyType;

    @Expose()
    display_name: string;

    @Expose()
    images: string[];

    @Expose()
    store: Store;
}
