import { Module } from '@nestjs/common';
import { AdjectivesModule } from './adjectives/adjectives.module';

@Module({
  imports: [AdjectivesModule],
})
export class AppModule {}
