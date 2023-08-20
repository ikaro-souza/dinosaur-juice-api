import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { z } from "zod";

const ignitionTypes = ["electric", "manual", "both"] as const;
export const motorcycleIgnitionTypes = z.enum(ignitionTypes);
export type MotorcycleIgnitionType = z.infer<typeof motorcycleIgnitionTypes>;

const bodyTypes = [
    "chopper",
    "naked",
    "sports",
    "atv",
    "cross",
    "scooter",
    "street",
    "touring",
] as const;
export const motorcycleBodyTypes = z.enum(bodyTypes);
export type MotorcycleBodyType = z.infer<typeof motorcycleBodyTypes>;

@Entity("motorcycles")
export class Motorcycle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp")
    created_at: Date;

    @Column("timestamp")
    updated_at: Date;

    @Column("timestamp", { nullable: true })
    deleted_at: Date | null;

    @Column("enum", { enum: ignitionTypes })
    ignition_type: MotorcycleIgnitionType;

    @Column("enum", { enum: bodyTypes })
    body_type: MotorcycleBodyType;

    @OneToOne(() => Vehicle)
    @JoinColumn({ name: "vehicle_id" })
    vehicle: Vehicle;
}
