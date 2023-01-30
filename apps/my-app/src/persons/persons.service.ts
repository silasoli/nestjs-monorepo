import { Injectable } from '@nestjs/common';
import { AdjectivesService } from '../../../users/src/adjectives/adjectives.service';

@Injectable()
export class PersonsService {
  constructor(private readonly adjectivesService: AdjectivesService) {}

  getRandomArbitrary() {
    const min = Math.ceil(0);
    const max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  findOne(name: string) {
    const numberRandom = this.getRandomArbitrary();
    const adjective = this.adjectivesService.findOne(numberRandom);
    return `${name} você é uma pessoa muito ${adjective}`;
  }
}
