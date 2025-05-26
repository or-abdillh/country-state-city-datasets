import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { City, State, Country, ICity, IState, ICountry } from 'country-state-city';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService) {

  }

  /**
   * A collection of all cities retrieved using the `City.getAllCities()` method.
   * This property holds an array of city objects conforming to the `ICity` interface.
   */
  private cities: ICity[] = City.getAllCities()


  /**
   * Retrieves a welcome message describing the purpose of the service.
   *
   * @returns A string message indicating that the service handles
   *          retrieving datasets for countries, states, and cities.
   */
  getHello(): string {
    return `This is the service part of ${ this.configService.get('app.name') }. The service only handles getting country, state, and city datasets. Develop by Oka R. Abdillah - Digitaliz`
  }


  /**
   * Retrieves a list of datasets containing information about cities, their corresponding states, 
   * and countries. Each dataset is represented as a string in the format: 
   * "City Name, State Name, Country Name".
   *
   * @returns {string[]} An array of strings where each string represents a city, its state, 
   * and its country. If a state or country is not found, their names will be omitted in the result.
   */
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

  /**
   * Retrieves a list of all countries.
   *
   * @returns {ICountry[]} An array of country objects.
   */
  getCountries(): ICountry[] {

    return Country.getAllCountries()
  }

  /**
   * Retrieves a list of states for a given country code.
   *
   * @param code - The ISO 3166-1 alpha-2 code of the country.
   * @returns An array of states belonging to the specified country.
   */
  getStatesByCountry(code: string): IState[] {

    return State.getStatesOfCountry(code)
  }

  /**
   * Retrieves a list of cities for a given state within a specified country.
   *
   * @param countryCode - The ISO 3166-1 alpha-2 code of the country.
   * @param stateCode - The code of the state within the specified country.
   * @returns An array of cities (`ICity[]`) belonging to the specified state.
   */
  getCitiesByState(countryCode: string, stateCode: string): ICity[] {

    return City.getCitiesOfState(countryCode, stateCode)
  }
}
