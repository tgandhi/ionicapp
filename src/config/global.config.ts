import { Injectable } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { Countries } from '../pages/countries/countries';
@Injectable()
export class GlobalConfig {
	
	@ViewChild(Nav) nav: Nav;

    apibaseAddress = 'http://localhost:8081';
	
	pages = [
            {title: 'Country Lists', component: Countries, icon: "globe"}
        ];
    constructor() { }
	
	
}