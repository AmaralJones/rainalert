import { Component } from '@angular/core';
import{ OnInit} from '@angular/core';
import {GpsService} from '../../services/gpsservice.service';
import{RainService} from '../../services/rainservice.service'
//import{Coords} from '../../services/gpsservice.service';
@Component({
  selector: 'app-mainui',
  templateUrl: './mainui.component.html',
  styleUrls: ['./mainui.component.css']
})
export class MainuiComponent implements OnInit {
 isRaining:boolean;
 timeToRain:number;
 summary:string;
 city:string;
  constructor(private gpsserv:GpsService ,private rainserv:RainService) { }

  ngOnInit() {

    this.isRaining = this.rainserv.raincheck.isRaining;
    this.timeToRain=this.rainserv.raincheck.timeToRain;
    this.summary = this.rainserv.raincheck.summary;
    this.city = this.rainserv.raincheck.city;
   //this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv));
    setInterval(function(){
      this.isRaining = this.rainserv.raincheck.isRaining;
      this.timeToRain=this.rainserv.raincheck.timeToRain;
      this.summary = this.rainserv.raincheck.summary;
      this.city = this.rainserv.raincheck.city;
    
     }.bind(this),1000)
    setInterval(function(){ 
    console.log('updating results');
    this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv)); 
    this.isRaining = this.rainserv.raincheck.isRaining;
    this.timeToRain=this.rainserv.raincheck.timeToRain;
    this.summary = this.rainserv.raincheck.summary;
    this.city = this.rainserv.raincheck.city;
  
  }.bind(this),30000);
    
    
    
  // console.log(this.gpsserv.message());
  

     //console.log('mainui latitude: ' + this.gpsserv.coords.latitude);

   
  }

}
