import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { z } from "zod";

export const vehicleTypes = z.enum(["car", "motorcycle"]);
export type VehicleType = z.infer<typeof vehicleTypes>;

@Entity({ name: "manufacturers" })
export class Manufacturer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp")
    created_at: Date;

    @Column("timestamp")
    updated_at: Date;

    @Column("timestamp", { nullable: true })
    deleted_at: Date | null;

    @Column("varchar", { length: 32 })
    name: string;

    @Column("text")
    logo_url: string;

    @Column("enum", {
        enum: [vehicleTypes.Enum.car, vehicleTypes.Enum.motorcycle],
    })
    vehicle_type: string;
}
