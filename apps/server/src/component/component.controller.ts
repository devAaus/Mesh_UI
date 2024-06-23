import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('components')
@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) { }

  @ApiOperation({ summary: 'Create a new component' })
  @Post()
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentService.create(createComponentDto);
  }

  @ApiOperation({ summary: 'Get all components' })
  @Get()
  findAll() {
    return this.componentService.findAll();
  }

  @ApiOperation({ summary: 'Get a component by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the component' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a component by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the component' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentDto: UpdateComponentDto) {
    return this.componentService.update(id, updateComponentDto);
  }

  @ApiOperation({ summary: 'Delete a component by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the component' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentService.remove(id);
  }
}
