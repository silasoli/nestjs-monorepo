import { Controller, Get, Param } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get(':id')
  findOne(@Param('id') name: string) {
    return this.personsService.findOne(name);
  }
}
