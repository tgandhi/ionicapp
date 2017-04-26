import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,Loading, NavParams } from 'ionic-angular';
import{ Country } from '../../providers/country';

/**
 * Generated class for the Countrydetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-countrydetails',
  templateUrl: 'countrydetails.html',
})
export class Countrydetails {
uuid :any;
details:any;
country = [];
states  = [];
lengths:number=0;
loading : Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController, public countryService: Country) {
    this.uuid = this.navParams.get('uuid');
    this.loadcountryDetails();
    
  }

  loadcountryDetails(){
    this.showLoading();
      this.countryService.getCountrydetail(this.uuid).subscribe((data) => {
        this.details = data;
        this.country = this.details.country;
        this.states = this.details.state;
        this.lengths = this.states.length;
		this.loading.dismiss();
       });
	   
  }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Countrydetails');
  }

}
