import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComponentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createComponentDto: CreateComponentDto) {
    try {
      const category = await this.prisma.category.findUnique({
        where: { id: createComponentDto.categoryId },
      });

      if (!category) {
        throw new NotFoundException(`Category with ID ${createComponentDto.categoryId} not found`);
      }

      return await this.prisma.component.create({
        data: createComponentDto,
      });
    } catch (error) {
      throw new Error('Error creating component');
    }
  }

  async findAll() {
    try {
      return await this.prisma.component.findMany({
        include: { category: true },
      });
    } catch (error) {
      throw new Error('Error retrieving components');
    }
  }

  async findOne(id: string) {
    try {
      const component = await this.prisma.component.findUnique({
        where: { id },
        include: { category: true },
      });

      if (!component) {
        throw new NotFoundException(`Component with ID ${id} not found`);
      }

      return component;
    } catch (error) {
      throw new Error(`Error retrieving component with ID ${id}`);
    }
  }

  async update(id: string, updateComponentDto: UpdateComponentDto) {
    try {
      const component = await this.prisma.component.findUnique({
        where: { id },
      });

      if (!component) {
        throw new NotFoundException(`Component with ID ${id} not found`);
      }

      if (updateComponentDto.categoryId) {
        const category = await this.prisma.category.findUnique({
          where: { id: updateComponentDto.categoryId },
        });

        if (!category) {
          throw new NotFoundException(`Category with ID ${updateComponentDto.categoryId} not found`);
        }
      }

      return await this.prisma.component.update({
        where: { id },
        data: updateComponentDto,
      });
    } catch (error) {
      throw new Error(`Error updating component with ID ${id}`);
    }
  }

  async remove(id: string) {
    try {
      const component = await this.prisma.component.findUnique({
        where: { id },
      });

      if (!component) {
        throw new NotFoundException(`Component with ID ${id} not found`);
      }

      return await this.prisma.component.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error deleting component with ID ${id}`);
    }
  }
}
