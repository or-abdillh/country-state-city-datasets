import { Injectable } from '@nestjs/common';
import { City, State, Country, ICity, IState } from 'country-state-city';

@Injectable()
export class CountryStateCityService {

    private cities: ICity[] = City.getAllCities()

    getAllDatasets(): string[] {

        const datasets: string[] = []

        // loop through cities
        for (const city of this.cities) {

            // get country
            const country = Country.getCountryByCode(city.countryCode)

            // initial value for state
            let state: IState | undefined

            if (country) {

                // get state
                state = State.getStateByCodeAndCountry(city.stateCode, city.countryCode)
            }

            // push into datasets
            const result = `${city.name}, ${state?.name}, ${country?.name}`

            datasets.push(result)
        }

        return datasets
    }
}
