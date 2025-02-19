import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CountryStateCityService } from 'src/services/country-state-city/country-state-city.service';

@Controller('datasets')
export class CountryStateCityController {

    constructor (private countryStateCityService: CountryStateCityService) {}

    @Get('/')
    @HttpCode(200)
    getAll() {

        // get all datasets
        const datasets = this.countryStateCityService.getAllDatasets()

        return {
            status: true,
            code: HttpStatus.OK,
            data: { datasets }
        };
    }
}
