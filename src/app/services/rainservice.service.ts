import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import{GpsService} from './gpsservice.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
@Injectable()
export class RainService {
summary:Observable<string>;
summarysubject:Subject<string>;
  constructor(private http:Http,private gpsserv:GpsService) { 
   
   
    this.summarysubject = new Subject<string>();
    this.summary = this.summarysubject.asObservable();
  //  this.summarysubject.next('rain service online');

//this.raincheck.isRaining=true;
//this.raincheck.timeToRain=4;
//this.raincheck.summary='checking...';

//this.summarysubject.next("somethting");
//this.summarysubject.next('translating GPS to city...');
//this.updateRainCheck(this.raincheck);
  }
  raincheck:RainCheck = {city:'',summary:'', isRaining:false,timeToRain:5};
  checkRain(locationInfo){
    
    setTimeout(()=>this.summarysubject.next('Connecting to AccuWeather services...'),1000);
    
    console.log('locationInfo object');
    console.log(locationInfo);
    let raincheckinside:RainCheck = {isRaining:false,timeToRain:5,city:'Locating...',summary:'Searching...'};
    if(locationInfo.ok == false){
      raincheckinside.city = 'Internet Disconnected';
      raincheckinside.summary='Check your connection';
    }else{
      raincheckinside.city = locationInfo.city;
     setTimeout(()=>this.summarysubject.next("Getting weather for "+ locationInfo.city + "..."),2000);
      let reqparams = {apikey:'oCUxdHjXGFnUepGz2m9hX2AhGiGHKGHe',language:'en-us',details:false};
      console.log('requesting weather data...');
      
      this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+locationInfo.citykey+'?apikey='+reqparams.apikey+'&&language='+reqparams.language)
      .subscribe(function(data){
       setTimeout(()=>this.summarysubject.next('...received weather data'),4000);
        console.log(data);
        let jdata = data.json();
        console.log(jdata);
       setTimeout(()=> this.summarysubject.next('Its '+ jdata[0].Temperature.Metric.Value + 'º '+jdata[0].Temperature.Metric.Unit+' and '+ jdata[0].WeatherText + ' in ' + raincheckinside.city),5000); 
      // raincheckinside.summary = jdata[0].WeatherText;
       raincheckinside.isRaining = true;
       raincheckinside.timeToRain = 3;
       console.log('checking for rain at location key: ' + locationInfo.citykey);
       console.log('using dummy info');
     this.updateRainCheck(raincheckinside);
      }.bind(this))
      
    }
    
    //console.log('RainService.checkrain ' + this.gpsserv.coords.latitude);
    //this.http.get();
    
    //console.log('rain check coords :'+ JSON.stringify(coords));
    
    
    //console.log('checking raing at coordinate longitude: '+ coords.latitude +' latitude: '+ coords.longitude);
    
  }
updateRainCheck(rainresponse:RainCheck){
  ///console.log('checking weather in ' + rainresponse.city); 
  //this.raincheck.isRaining = rainresponse.isRaining;
  //this.raincheck.timeToRain =rainresponse.timeToRain;
  this.raincheck.city=rainresponse.city;
  this.raincheck.summary=rainresponse.summary;
  //console.log(this.raincheck.isRaining +' ' + this.raincheck.timeToRain+' '+ this.raincheck.city+' '+this.raincheck.summary);
}
}
export interface RainCheck{
  isRaining:boolean;
  timeToRain:number;
  city:string;
  summary:string;
}
