import { Component, OnInit, Renderer2 } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from 'datatype';
@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {
  allCountries: undefined|Country[];
  isDarkMode = false;



constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((result)=>{
    this.allCountries=result  
    })
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
