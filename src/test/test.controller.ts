// src/test/test.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '../entities/test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Test> {
    return this.testService.findOne(+id); // Konversi id menjadi number
  }

  @Post()
  async create(@Body() test: Test): Promise<void> {
    try {
      await this.testService.create(test);
    } catch (error) {
      console.error('Error in POST method:', error);
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() test: Test): Promise<void> {
    try {
      await this.testService.update(+id, test); // Konversi id menjadi number
    } catch (error) {
      console.error('Error in PUT method:', error);
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testService.remove(+id); // Konversi id menjadi number
  }
}
