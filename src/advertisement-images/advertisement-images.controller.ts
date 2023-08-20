import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { AdvertisementImagesService } from "./advertisement-images.service";
import { CreateAdvertisementImagesDto } from "./dto/create-advertisement-image.dto";
import { UpdateAdvertisementImagesDto } from "./dto/update-advertisement-image.dto";

@Controller("advertisement_images")
export class AdvertisementImagesController {
    constructor(
        private readonly advertisementImagesService: AdvertisementImagesService,
    ) {}

    @Post()
    create(@Body() createAdvertisementImageDto: CreateAdvertisementImagesDto) {
        return this.advertisementImagesService.create(
            createAdvertisementImageDto,
        );
    }

    @Get()
    findAll() {
        return this.advertisementImagesService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.advertisementImagesService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateAdvertisementImageDto: UpdateAdvertisementImagesDto,
    ) {
        return this.advertisementImagesService.update(
            +id,
            updateAdvertisementImageDto,
        );
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.advertisementImagesService.remove(+id);
    }
}
