import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

@Injectable()
export class GpsService {
  
  constructor(private http:Http) { 
if(navigator.geolocation){
  console.log('gps available in this device');
  //this.coords.latitude = 0;
  //this.coords.longitude = 0;
}else{
  console.log('gps unavailable in this device');
}

  }
//coords = {lat:'',long:''};
coords:Coords = {latitude : '',longitude:''};
  setPosition(position,checkRain){
   
    
    this.coords.latitude = position.coords.latitude;
    this.coords.longitude = position.coords.longitude;
    let reqparams = {apikey:'oCUxdHjXGFnUepGz2m9hX2AhGiGHKGHe' ,q:this.coords.latitude+'%2C'+ this.coords.longitude,language:'en-us',details:false,toplevel:false }
    let respbody;
    let httpresponse = this.http.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+reqparams.apikey+'&q='+reqparams.q)
    .subscribe(function(data){
      if(!data.ok){
        let badlocation = {ok:false};
        checkRain(badlocation);
      }else{ 
      console.log(data);
       console.log('converting to json');
       try{respbody = data.json();console.log('convert successfull');}
       catch(e){console.log('failed to convert! ');}
       
       let locationInfo = {ok:true,citykey:respbody.Key,city:respbody.LocalizedName};
       console.log('city key :' + locationInfo.citykey); 
       checkRain(locationInfo);}   
    });
    
    console.log('coords received- l: '+this.coords.latitude+'lon'+this.coords.longitude);
    //this.coords.longitude = position.coords.longitude;
    //console.log('l : ' + this.latitude);
    
   // checkRain(this.coords);
  }
  checkLocation(checkRain){
    //context.summary ="getting gps coords";
    //this.lat = 1 ;
   let chk =  navigator.geolocation.getCurrentPosition((position)=>this.setPosition(position,checkRain));
   
     // return this.lat;
   // return this.coords;   
     }
}

export interface Coords{
  latitude:string;
  longitude:string;
}