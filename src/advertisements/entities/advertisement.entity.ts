import { AdvertisementImage } from "src/advertisement-images/entities/advertisement-image.entity";
import { Store } from "src/stores/entities/store.entity";
import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { z } from "zod";

const colors = [
    "black",
    "gray",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
] as const;
export const vehicleColors = z.enum(colors);
export type VehicleColor = z.infer<typeof vehicleColors>;

const states = ["new", "used"] as const;
export const vehicleStates = z.enum(states);
export type VehicleState = z.infer<typeof vehicleStates>;

@Entity("advertisements")
export class Advertisement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp")
    created_at: Date;

    @Column("timestamp")
    updated_at: Date;

    @Column("timestamp", { nullable: true })
    deleted_at: Date | null;

    @Column("decimal", { precision: 10, scale: 2 })
    value: number;

    @Column("char", { length: 1 })
    plate_last_digit: string;

    @Column("integer")
    mileage: number;

    @Column("enum", { enum: colors, enumName: "vehicle_colors" })
    primary_color: VehicleColor;

    @Column("enum", {
        enum: colors,
        enumName: "vehicle_colors",
        nullable: true,
    })
    secondary_color: VehicleColor | null;

    @Column("enum", { enum: states, enumName: "vehicle_states" })
    vehicle_state: VehicleState;

    @Column("varchar", { length: 32 })
    city: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.advertisements)
    @JoinColumn({ name: "vehicle_id" })
    vehicle: Vehicle;

    @ManyToOne(() => Store, (store) => store.advertisements)
    @JoinColumn({ name: "store_id" })
    store: Store;

    @OneToMany(() => AdvertisementImage, (image) => image.advertisement)
    images: AdvertisementImage[];
}
