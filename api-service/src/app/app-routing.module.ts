import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountryComponent } from './all-country/all-country.component';
const routes: Routes = [{path:'', component:AllCountryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
