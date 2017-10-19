import { Component } from '@angular/core';
import{ OnInit} from '@angular/core';
import {GpsService} from '../../services/gpsservice.service';
import{RainService} from '../../services/rainservice.service'
import { Observable } from 'rxjs/Observable';
//import{Coords} from '../../services/gpsservice.service';
@Component({
  selector: 'app-mainui',
  templateUrl: './mainui.component.html',
  styleUrls: ['./mainui.component.css']
})
export class MainuiComponent implements OnInit {
 pineaple:{eyes:string,mouth:string,eyebrows:string};
 
 isRaining:boolean;
 timeToRain:number;
 summary:string;
 city:string;
  constructor(private gpsserv:GpsService ,private rainserv:RainService) { }

  ngOnInit() {
    //let container = document.getElementById("fullcomponent");
   // container.setAttribute("height",document.documentElement.clientHeight.toString());
    let mouth = document.getElementById("mouth");
   this.rainserv.summary.subscribe((update)=>{this.summary = update;
     //this.pineaple.eyes = "../assets/imgs/eyes_closed.png";
   this.pineaple.mouth = "../assets/imgs/mouth_open.png";
    // let eyes = document.getElementById("eyes");
  
  mouth.style.top = "240px";
   mouth.style.left="5%";
    //eyes.style.marginTop = "20px";
    setTimeout(()=>{this.pineaple.eyes = "../assets/imgs/eyes_normal.png";
//this.pineaple.mouth = "../assets/imgs/mouth_closed.png";
  // mouth.style.top = "75px";
  
  },1000)}
  );
   this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv)) ; 
    let controler = new PineapleController();
   // controler.blink(this.pineaple);
   this.pineaple = {eyes:"none",eyebrows:"none",mouth:"none"};

   this.pineaple.eyes = "../assets/imgs/eyes_normal.png";
  this.pineaple.mouth = "../assets/imgs/mouth_closed.png";
  mouth.style.top = "75px";
   this.pineaple.eyebrows = "../assets/imgs/eyebrows_normal.png";
   let blinktime = 0;
    var  normal;
 let blinking = setInterval(function(){
   blinktime= Math.floor(Math.random() * 5000);
  this.pineaple.eyes = "";
 normal = setTimeout(function(){
 this.pineaple.eyes =  "../assets/imgs/eyes_normal.png";
  }.bind(this),200)
  
 }.bind(this),3000 - blinktime) 
 
   // this.isRaining = this.rainserv.raincheck.isRaining;
    //this.timeToRain=this.rainserv.raincheck.timeToRain;
  
    //this.city = this.rainserv.raincheck.city;
   //this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv));
    setInterval(function(){
     // this.isRaining = this.rainserv.raincheck.isRaining;
     // this.timeToRain=this.rainserv.raincheck.timeToRain;
     // this.summary = this.rainserv.raincheck.summary;
     // this.city = this.rainserv.raincheck.city;
    
     }.bind(this),1000)
    setInterval(function(){ 
    console.log('updating results');
  //  clearInterval(blinking);
    //clearTimeout(normal);

    
//    this.pineaple.eyes = "../assets/imgs/eyes_closed.png";
  //  this.pineaple.mouth = "../assets/imgs/mouth_open.png";
  /* let eyes = document.getElementById("eyes");
   let mouth = document.getElementById("mouth");
   mouth.style.top = "220px";
   mouth.style.left="5%";
    eyes.style.marginTop = "20px";
   // this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv)) ; 
    this.isRaining = this.rainserv.raincheck.isRaining;
    this.timeToRain=this.rainserv.raincheck.timeToRain;
   // this.summary = this.rainserv.raincheck.summary;
    this.city = this.rainserv.raincheck.city;*/
  
  }.bind(this),30000);
    
    
    
  // console.log(this.gpsserv.message());
  

     //console.log('mainui latitude: ' + this.gpsserv.coords.latitude);

   
  }

}
 class PineapleController{
  eyes_normal:string;
  eyes_blinking:string;
  eyes_talking:string;
  mouth_open:string;
  mouth_closed:string;
constructor(){
  this.eyes_normal = "../assets/imgs/eyes_normal.png";
  this.eyes_blinking = "../assets/imgs/eyes_blinking.png";
  this.eyes_talking =  "../assets/imgs/eyes_talking.png";
  this.mouth_open = "../assets/imgs/mouth_open.png";
  this.mouth_closed = "../assets/imgs/mouth_closed.png";
}
public change(mood){

}
public blink(pineaple){
setInterval(function(){
  
pineaple.eyes = this.eyes_blinking;
setTimeout(function(){
pineaple.eyes = this.eyes_normal;
  },100)
},500);
}

}