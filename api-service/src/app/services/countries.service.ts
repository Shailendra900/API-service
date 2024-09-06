import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from 'datatype';
@Injectable({
  providedIn: 'root'
})
export class CountriesService  {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all?')
  }
}
