import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryStateCityModule } from './modules/country-state-city/country-state-city.module';
import { CountryStateCityController } from './controllers/country-state-city/country-state-city.controller';
import { CountryStateCityService } from './services/country-state-city/country-state-city.service';
import { CorsMiddleware } from './middlewares/cors.middlware';

@Module({
  imports: [CountryStateCityModule],
  controllers: [AppController, CountryStateCityController],
  providers: [AppService, CountryStateCityService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes("*")
  }
}
