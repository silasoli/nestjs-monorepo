import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { AdjectivesModule } from '../../../users/src/adjectives/adjectives.module';

@Module({
  imports: [AdjectivesModule],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
