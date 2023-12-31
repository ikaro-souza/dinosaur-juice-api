import { Advertisement } from "src/advertisements/entities/advertisement.entity";
import { Manufacturer } from "src/manufacturers/entities/manufacturer.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { z } from "zod";

const injections = ["electric", "carburator"] as const;
export const injectionTypes = z.enum(injections);
export type InjectionType = z.infer<typeof injectionTypes>;

const fuels = [
    "gasoline",
    "diesel",
    "electric",
    "ethanol",
    "flex",
    "hybrid",
] as const;
export const fuelTypes = z.enum(fuels);
export type FuelType = z.infer<typeof fuelTypes>;

export const types = ["car", "motorcycle"] as const;
export const vehicleTypes = z.enum(types);
export type VehicleType = z.infer<typeof vehicleTypes>;

@Entity({ name: "vehicles" })
export class Vehicle {
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

    @Column("smallint")
    year: number;

    @Column("smallint")
    model: number;

    @Column("decimal", { precision: 2, scale: 2 })
    displacement: number;

    @Column("enum", { enum: injections })
    injection_type: InjectionType;

    @Column("enum", { enum: fuels })
    fuel_type: FuelType;

    @Column("enum", { enum: types })
    type: VehicleType;

    @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.vehicles)
    @JoinColumn({ name: "manufacturer_id" })
    manufacturer: Manufacturer;

    @OneToMany(() => Advertisement, (advertisement) => advertisement.vehicle)
    advertisements: Advertisement[];
}
