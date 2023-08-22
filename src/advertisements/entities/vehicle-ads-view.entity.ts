import { ViewColumn, ViewEntity } from "typeorm";
import { VehicleColor, VehicleState } from "./advertisement.entity";

@ViewEntity({
    name: "vehicle_ads_view",
})
export class VehicleAdsView {
    @ViewColumn()
    id: number;

    @ViewColumn()
    created_at: Date;

    @ViewColumn()
    updated_at: Date;

    @ViewColumn()
    deleted_at: Date | null;

    @ViewColumn()
    value: number;

    @ViewColumn()
    plate_last_digit: string;

    @ViewColumn()
    mileage: number;

    @ViewColumn()
    primary_color: VehicleColor;

    @ViewColumn()
    secondary_color: VehicleColor | null;

    @ViewColumn()
    vehicle_state: VehicleState;

    @ViewColumn()
    city: string;

    @ViewColumn()
    name: string;

    @ViewColumn()
    year: number;

    @ViewColumn()
    model: number;

    @ViewColumn()
    manufacturer: string;

    @ViewColumn()
    display_name: string;

    @ViewColumn()
    images: string[];
}
