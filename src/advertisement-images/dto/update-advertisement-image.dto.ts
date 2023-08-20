import { PartialType } from "@nestjs/mapped-types";
import { CreateAdvertisementImagesDto } from "./create-advertisement-image.dto";

export class UpdateAdvertisementImagesDto extends PartialType(
    CreateAdvertisementImagesDto,
) {}
