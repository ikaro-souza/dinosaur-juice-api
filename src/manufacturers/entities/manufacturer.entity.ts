import {
    Vehicle,
    types,
    type VehicleType,
} from "src/vehicles/entities/vehicle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column("enum", { enum: types, enumName: "vehicle_type" })
    vehicle_type: VehicleType;

    @OneToMany(() => Vehicle, (vehicle) => vehicle.manufacturer)
    vehicles: Vehicle[];
}
