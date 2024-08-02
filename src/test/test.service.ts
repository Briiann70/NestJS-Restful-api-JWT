// src/test/test.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.testRepository.findOne({ where: { id } });
  }

  async create(test: Test): Promise<void> {
    try {
      await this.testRepository.save(test);
      console.log('Data created successfully:', test);
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  }

  async update(id: number, test: Test): Promise<void> {
    try {
      await this.testRepository.update(id, test);
      console.log('Data updated successfully:', test);
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    await this.testRepository.delete(id);
  }
}
