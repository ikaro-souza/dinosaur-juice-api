import { z } from "zod";
import { vehicleColors, vehicleStates } from "../entities/advertisement.entity";

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
