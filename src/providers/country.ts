import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { GlobalConfig } from '../config/global.config';
//import{ GlobalConfig } from '../config/global.config';

/*
  Generated class for the Country provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Country {
perpage:number = 20;
  data: any = [];
  param = [];

 private apiBaseUrl =''; 
 private headers: Headers;
 constructor(private http: Http) {
    //this.apiBaseUrl = 'http://localhost:8081';
    this.apiBaseUrl = 'https://node27.herokuapp.com';
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.data = null;
  }
 
  getCountries(start:number=0){
 
    return Observable.create(observer =>{
 
      this.http.get(this.apiBaseUrl+'/countries/'+this.perpage+'/'+start).map(res => res.json()).subscribe(
        data => {
          this.data = data;
          observer.next(data);
          observer.complete();
        });
    });
 
  }

  getCountrydetail(uuid:any){ 
    return Observable.create(observer =>{ 
      this.data = {country:[],state:[]}
      this.http.get(this.apiBaseUrl+'/countrydetails/'+uuid).map(res => res.json()).subscribe(
        data => {         
         //this.data = data;
          let dateils:any = [];
          data.forEach(element => {
           this.data.country =  element;
           dateils.push(element.name);
          });
          if(dateils.length>1){
          this.data.state = dateils;
          }
          observer.next(this.data);
          observer.complete();
        });
    });
 
  }

}
