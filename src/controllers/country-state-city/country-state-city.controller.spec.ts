import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateCityController } from './country-state-city.controller';

describe('CountryStateCityController', () => {
  let controller: CountryStateCityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryStateCityController],
    }).compile();

    controller = module.get<CountryStateCityController>(CountryStateCityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
