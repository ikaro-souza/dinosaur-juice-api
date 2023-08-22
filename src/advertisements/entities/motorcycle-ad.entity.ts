import {
    MotorcycleBodyType,
    MotorcycleIgnitionType,
} from "src/motorcycles/entities/motorcycle.entity";
import { Store } from "src/stores/entities/store.entity";
import { VehicleColor, VehicleState } from "./advertisement.entity";

export class MotorcycleAd {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    value: number;
    plate_last_digit: string;
    mileage: number;
    primary_color: VehicleColor;
    secondary_color: VehicleColor | null;
    state: VehicleState;
    city: string;
    name: string;
    manufacturer: string;
    ignition_type: MotorcycleIgnitionType;
    body_type: MotorcycleBodyType;
    display_name: string;
    images: string[];
    store: Store;
}
