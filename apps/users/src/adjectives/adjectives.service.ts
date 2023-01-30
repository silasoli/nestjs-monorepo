import { Injectable } from '@nestjs/common';

@Injectable()
export class AdjectivesService {
  private data = ['esperto', 'estudioso', 'generoso', 'furioso', 'sortudo'];

  findAll() {
    return this.data;
  }

  findOne(position: number) {
    return this.data[position];
  }
}
