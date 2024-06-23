import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateComponentDto {
    @ApiProperty({ description: 'The title of the component' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'The code of the component' })
    @IsString()
    code: string;

    @ApiProperty({ description: 'The category Id of the component' })
    @IsString()
    categoryId: string;
}
