import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryStateCityModule } from './modules/country-state-city/country-state-city.module';
import { CountryStateCityController } from './controllers/country-state-city/country-state-city.controller';
import { CountryStateCityService } from './services/country-state-city/country-state-city.service';

@Module({
  imports: [CountryStateCityModule],
  controllers: [AppController, CountryStateCityController],
  providers: [AppService, CountryStateCityService],
})
export class AppModule {}
