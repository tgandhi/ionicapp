import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Countrydetails } from './countrydetails';

@NgModule({
  declarations: [
    Countrydetails,
  ],
  imports: [
    //IonicModule.forChild(Countrydetails),
  ],
  exports: [
    Countrydetails
  ]
})
export class CountrydetailsModule {}
