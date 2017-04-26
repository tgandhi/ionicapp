import { Component,trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController,LoadingController,Loading, NavParams } from 'ionic-angular';

import { Country } from '../../providers/country';
import{ Countrydetails } from '../countrydetails/countrydetails';
/**
 * Generated class for the Countries page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html',
  animations: [
    //For the Title
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
     //For the country list
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class Countries {
	titleState:any='in';
	listState:any='in';
	countries = [];
	result = [];
	hasresult:any=true;
	private start:number=0;
	loading : Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController, public countryService: Country) {
    this.loadCountry();
   
  }
loadCountry(){
	this.showLoading();
    this.countryService.getCountries(this.start).subscribe((data) => {
      
		if(this.result.length > data.length){
			this.hasresult = false;
			console.log('Async operation has ended '+this.result.length);
		}else{
			this.hasresult = true;
			console.log('Getting result count is '+this.result.length);
		}
		this.result = data;
		for(var i=0;i<data.length;i++){
			this.countries.push(data[i]);
		}
        this.loading.dismiss();
    });
}

getdetails(countrydetail){
  let data = countrydetail;
	this.navCtrl.push(Countrydetails,data);    
}

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    //   this.countryService.getCountries().subscribe((data) => {
    //   //console.log(data); return false;
    //   this.countries = data;
    //   for (let i = 0; i < 10; i++) {
    //   this.countries.push( this.countries.length );
    // }

    //   });
  }


  doInfinite(infiniteScroll) {

  console.log('doInfinite, start is currently '+this.start);
  this.start+=20;
  setTimeout(() => {
      this.loadCountry();
      infiniteScroll.complete();
    }, 500);
} 



}
