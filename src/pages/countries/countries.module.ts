import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Countries } from './countries';

@NgModule({
  declarations: [
    Countries,
  ],
  imports: [
    //IonicModule.forChild(Countries),
  ],
  exports: [
    Countries
  ]
})
export class CountriesModule {}
