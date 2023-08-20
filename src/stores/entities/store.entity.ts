import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stores")
export class Store {
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

    @Column("varchar", { length: 100 })
    address: string;

    @Column("char", { length: 11 })
    phone_number: string;
}
