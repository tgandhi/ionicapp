import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Nav } from 'ionic-angular';
import { GlobalConfig } from '../../config/global.config';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Nav) nav: Nav;
	rootPage:any = HomePage;
	private pages :any; 
  
  constructor(public navCtrl: NavController, globalConfig: GlobalConfig) {
	this.pages = globalConfig.pages ;
 
  }
  openPage(page) { 
    //console.log(page);       
		this.navCtrl.push(page.component);
    }

}

