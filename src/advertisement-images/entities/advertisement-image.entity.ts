import { Advertisement } from "src/advertisements/entities/advertisement.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("advertisement_images")
export class AdvertisementImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    image_url: string;

    @ManyToOne(() => Advertisement, (advertisement) => advertisement.images)
    @JoinColumn({ name: "advertisement_id" })
    advertisement: Advertisement;
}
