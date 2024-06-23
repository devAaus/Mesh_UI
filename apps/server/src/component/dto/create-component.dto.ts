import { IsString } from 'class-validator';

export class CreateComponentDto {
    @IsString()
    title: string;

    @IsString()
    code: string;

    @IsString()
    categoryId: string;
}
