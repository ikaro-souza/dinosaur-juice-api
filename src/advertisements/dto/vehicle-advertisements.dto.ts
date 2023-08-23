import { Expose, Transform } from "class-transformer";
import { z } from "zod";
import {
    VehicleColor,
    VehicleState,
    vehicleColors,
    vehicleStates,
} from "../entities/advertisement.entity";

export const vehicleAdvertisementsDto = z
    .object({
        id: z.preprocess((arg) => Number(arg), z.number()),
        created_at: z.date(),
        updated_at: z.date(),
        deleted_at: z.date().nullable(),
        value: z.preprocess((arg) => Number(arg), z.number()),
        plate_last_digit: z.string(),
        mileage: z.number(),
        primary_color: vehicleColors,
        secondary_color: vehicleColors.nullable(),
        vehicle_state: vehicleStates,
        city: z.string(),
        name: z.string(),
        year: z.number(),
        model: z.number(),
        manufacturer: z.string(),
        display_name: z.string(),
        images: z.array(z.string()),
    })
    .array();

export type VehicleAdvertisementsDto = z.infer<typeof vehicleAdvertisementsDto>;

export class VehicleAdsDto {
    @Expose()
    @Transform(({ value }) => Number(value))
    id: number;

    @Expose()
    @Transform(({ value }) => new Date(value))
    created_at: Date;

    @Expose()
    @Transform(({ value }) => new Date(value))
    updated_at: Date;

    @Expose()
    @Transform(({ value }) => (value ? new Date(value) : null))
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
    vehicle_state: VehicleState;

    @Expose()
    city: string;

    @Expose()
    name: string;

    @Expose()
    year: number;

    @Expose()
    model: number;

    @Expose()
    manufacturer: string;

    @Expose()
    display_name: string;

    @Expose()
    images: string[];
}
