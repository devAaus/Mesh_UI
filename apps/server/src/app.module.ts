import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ComponentModule } from './component/component.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ComponentModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
