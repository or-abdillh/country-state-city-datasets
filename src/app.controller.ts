import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) { }

  @Get()
  getHello() {
    return {
      status: true,
      code: HttpStatus.OK,
      message: this.appService.getHello()
    };
  }

  @Get('/')
  @HttpCode(200)
  getAll() {

    // get all datasets
    const datasets = this.appService.getAllDatasets()

    return {
      status: true,
      code: HttpStatus.OK,
      data: { datasets }
    };
  }

  @Get("/country")
  @HttpCode(200)
  getAllCountries() {
    // get all datasets
    const countries = this.appService.getCountries()

    return {
      status: true,
      code: HttpStatus.OK,
      data: { countries }
    };
  }

  @Get("/country/:code/state")
  @HttpCode(200)
  getStatesByCountryCode(@Param('code') code: string) 
  {
    // get states by country code
    const states = this.appService.getStatesByCountry(code)

    return {
      status: true,
      code: HttpStatus.OK,
      data: { states }
    };
  }

  @Get("/country/:countryCode/state/:stateCode/city")
  @HttpCode(200)
  getCitiesByState(@Param('countryCode') countryCode: string, @Param('stateCode') stateCode: string) {

    // get cities by state code
    const cities = this.appService.getCitiesByState(countryCode, stateCode)

    return {
      status: true,
      code: HttpStatus.OK,
      data: { cities }
    };
  }
}
