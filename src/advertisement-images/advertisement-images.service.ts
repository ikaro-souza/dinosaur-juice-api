import { Injectable } from "@nestjs/common";
import { CreateAdvertisementImagesDto } from "./dto/create-advertisement-image.dto";
import { UpdateAdvertisementImagesDto } from "./dto/update-advertisement-image.dto";

@Injectable()
export class AdvertisementImagesService {
    create(createAdvertisementImageDto: CreateAdvertisementImagesDto) {
        return "This action adds a new advertisementImage";
    }

    findAll() {
        return `This action returns all advertisementImages`;
    }

    findOne(id: number) {
        return `This action returns a #${id} advertisementImage`;
    }

    update(
        id: number,
        updateAdvertisementImageDto: UpdateAdvertisementImagesDto,
    ) {
        return `This action updates a #${id} advertisementImage`;
    }

    remove(id: number) {
        return `This action removes a #${id} advertisementImage`;
    }
}
