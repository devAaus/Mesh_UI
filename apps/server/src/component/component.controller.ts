import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Controller('api/component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createComponentDto: CreateComponentDto) {
    return await this.componentService.create(createComponentDto);
  }

  @Get()
  async findAll() {
    return await this.componentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.componentService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateComponentDto: UpdateComponentDto) {
    return await this.componentService.update(id, updateComponentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.componentService.remove(id);
  }
}
