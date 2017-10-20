webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  background-color: #FFB56B;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <app-mainui></app-mainui>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mainui_mainui_component__ = __webpack_require__("../../../../../src/app/components/mainui/mainui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_rainservice_service__ = __webpack_require__("../../../../../src/app/services/rainservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gpsservice_service__ = __webpack_require__("../../../../../src/app/services/gpsservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import {FormsModule} from '@angular/forms';


//import { UserComponent } from './components/user/user.component';
//import {DataService} from './services/data.service';



//import{main}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_mainui_mainui_component__["a" /* MainuiComponent */]
            //UserComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            //FormsModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_rainservice_service__["a" /* RainService */], __WEBPACK_IMPORTED_MODULE_6__services_gpsservice_service__["a" /* GpsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/mainui/mainui.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Fascinate+Inline);", ""]);

// module
exports.push([module.i, "img{\r\n  width: 70%;\r\n  height:auto;  \r\n}\r\n.pineaple{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -ms-flex-line-pack: end;\r\n      align-content: flex-end;\r\n  position: relative;\r\n  text-align: center;\r\n \r\n  min-height: 100vh;\r\n \r\n  \r\n}\r\n.container{\r\n  overflow: hidden;\r\n}\r\n.base{\r\n  \r\nposition:absolute;\r\ntop: 0;\r\nleft: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n z-index: 10;\r\n \r\n\r\n}\r\n.eyes{\r\n  z-index:11;\r\n position: absolute;\r\n  top:150px;\r\n  width: 90%;\r\n  height: auto;\r\n  left: 4%;\r\n}\r\n.eyebrows{\r\n  z-index:12;\r\n position: absolute;\r\n  top:100px;\r\n  width: 90%;\r\n\r\n  left: 5%;\r\n}\r\n.mouth{\r\n   z-index:11;\r\n position: absolute;\r\n  top:75px;\r\n  width: 90%;\r\n  height: auto;\r\n  left: 7%;\r\n}\r\n.shadow{\r\n   z-index:11;\r\n position: absolute;\r\n  top:150px;\r\n  width: 90%;\r\n  height: auto;\r\n  left: 3%;\r\n}\r\n.weather{\r\n margin-bottom: 30vh;\r\n  width: 100%;\r\n  text-align: center;\r\n  \r\n  \r\n  font-family: 'Fascinate Inline', cursive;\r\n}\r\n.weather p{\r\n  font-size: 1.2em;\r\n}\r\n.container-fluid{\r\n \r\nheight: 100vh;\r\n  background-color: #FFC59B;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mainui/mainui.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"container-fluid\">\r\n  <div class=\"row\">\r\n     <div class=\"col-xs-12 col-md-12 col-lg-6 pineaple\">\r\n   <img class=\"eyebrows\" src={{pineaple.eyebrows}}>\r\n   <img class=\"base\" src=\"../assets/imgs/base.png\">\r\n   \r\n   <img id=\"eyes\" class=\"eyes\"src=\"{{pineaple.eyes}}\"> \r\n   <img id=\"mouth\" class=\"mouth\"src=\"{{pineaple.mouth}}\"> \r\n   <img class=\"shadow\"src=\"../assets/imgs/shadow.png\"> \r\n   \r\n   <div class=\"weather\">\r\n     <h1 style=\"color:orange\"> Weather Info: </h1>\r\n     <p> {{summary}} </p>\r\n     </div>\r\n     </div>\r\n  </div>\r\n   \r\n\r\n    \r\n  \r\n\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/mainui/mainui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainuiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gpsservice_service__ = __webpack_require__("../../../../../src/app/services/gpsservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rainservice_service__ = __webpack_require__("../../../../../src/app/services/rainservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import{Coords} from '../../services/gpsservice.service';
var MainuiComponent = (function () {
    function MainuiComponent(gpsserv, rainserv) {
        this.gpsserv = gpsserv;
        this.rainserv = rainserv;
    }
    MainuiComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let container = document.getElementById("fullcomponent");
        // container.setAttribute("height",document.documentElement.clientHeight.toString());
        var mouth = document.getElementById("mouth");
        this.rainserv.summary.subscribe(function (update) {
            _this.summary = update;
            //this.pineaple.eyes = "../assets/imgs/eyes_closed.png";
            _this.pineaple.mouth = "../assets/imgs/mouth_open.png";
            // let eyes = document.getElementById("eyes");
            mouth.style.top = "240px";
            mouth.style.left = "5%";
            //eyes.style.marginTop = "20px";
            setTimeout(function () {
                _this.pineaple.eyes = "../assets/imgs/eyes_normal.png";
                //this.pineaple.mouth = "../assets/imgs/mouth_closed.png";
                // mouth.style.top = "75px";
            }, 1000);
        });
        this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv));
        var controler = new PineapleController();
        // controler.blink(this.pineaple);
        this.pineaple = { eyes: "none", eyebrows: "none", mouth: "none" };
        this.pineaple.eyes = "../assets/imgs/eyes_normal.png";
        this.pineaple.mouth = "../assets/imgs/mouth_closed.png";
        mouth.style.top = "75px";
        this.pineaple.eyebrows = "../assets/imgs/eyebrows_normal.png";
        var blinktime = 0;
        var normal;
        var blinking = setInterval(function () {
            blinktime = Math.floor(Math.random() * 5000);
            this.pineaple.eyes = "";
            normal = setTimeout(function () {
                this.pineaple.eyes = "../assets/imgs/eyes_normal.png";
            }.bind(this), 200);
        }.bind(this), 3000 - blinktime);
        // this.isRaining = this.rainserv.raincheck.isRaining;
        //this.timeToRain=this.rainserv.raincheck.timeToRain;
        //this.city = this.rainserv.raincheck.city;
        //this.gpsserv.checkLocation(this.rainserv.checkRain.bind(this.rainserv));
        setInterval(function () {
            // this.isRaining = this.rainserv.raincheck.isRaining;
            // this.timeToRain=this.rainserv.raincheck.timeToRain;
            // this.summary = this.rainserv.raincheck.summary;
            // this.city = this.rainserv.raincheck.city;
        }.bind(this), 1000);
        setInterval(function () {
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
        }.bind(this), 30000);
        // console.log(this.gpsserv.message());
        //console.log('mainui latitude: ' + this.gpsserv.coords.latitude);
    };
    return MainuiComponent;
}());
MainuiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-mainui',
        template: __webpack_require__("../../../../../src/app/components/mainui/mainui.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mainui/mainui.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gpsservice_service__["a" /* GpsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gpsservice_service__["a" /* GpsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_rainservice_service__["a" /* RainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rainservice_service__["a" /* RainService */]) === "function" && _b || Object])
], MainuiComponent);

var PineapleController = (function () {
    function PineapleController() {
        this.eyes_normal = "../assets/imgs/eyes_normal.png";
        this.eyes_blinking = "../assets/imgs/eyes_blinking.png";
        this.eyes_talking = "../assets/imgs/eyes_talking.png";
        this.mouth_open = "../assets/imgs/mouth_open.png";
        this.mouth_closed = "../assets/imgs/mouth_closed.png";
    }
    PineapleController.prototype.change = function (mood) {
    };
    PineapleController.prototype.blink = function (pineaple) {
        setInterval(function () {
            pineaple.eyes = this.eyes_blinking;
            setTimeout(function () {
                pineaple.eyes = this.eyes_normal;
            }, 100);
        }, 500);
    };
    return PineapleController;
}());
var _a, _b;
//# sourceMappingURL=mainui.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/gpsservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GpsService = (function () {
    function GpsService(http) {
        this.http = http;
        //coords = {lat:'',long:''};
        this.coords = { latitude: '', longitude: '' };
        if (navigator.geolocation) {
            console.log('gps available in this device');
            //this.coords.latitude = 0;
            //this.coords.longitude = 0;
        }
        else {
            console.log('gps unavailable in this device');
        }
    }
    GpsService.prototype.setPosition = function (position, checkRain) {
        this.coords.latitude = position.coords.latitude;
        this.coords.longitude = position.coords.longitude;
        var reqparams = { apikey: 'oCUxdHjXGFnUepGz2m9hX2AhGiGHKGHe', q: this.coords.latitude + '%2C' + this.coords.longitude, language: 'en-us', details: false, toplevel: false };
        var respbody;
        var httpresponse = this.http.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + reqparams.apikey + '&q=' + reqparams.q)
            .subscribe(function (data) {
            if (!data.ok) {
                var badlocation = { ok: false };
                checkRain(badlocation);
            }
            else {
                console.log(data);
                console.log('converting to json');
                try {
                    respbody = data.json();
                    console.log('convert successfull');
                }
                catch (e) {
                    console.log('failed to convert! ');
                }
                var locationInfo = { ok: true, citykey: respbody.Key, city: respbody.LocalizedName };
                console.log('city key :' + locationInfo.citykey);
                checkRain(locationInfo);
            }
        });
        console.log('coords received- l: ' + this.coords.latitude + 'lon' + this.coords.longitude);
        //this.coords.longitude = position.coords.longitude;
        //console.log('l : ' + this.latitude);
        // checkRain(this.coords);
    };
    GpsService.prototype.checkLocation = function (checkRain) {
        var _this = this;
        //context.summary ="getting gps coords";
        //this.lat = 1 ;
        var chk = navigator.geolocation.getCurrentPosition(function (position) { return _this.setPosition(position, checkRain); });
        // return this.lat;
        // return this.coords;   
    };
    return GpsService;
}());
GpsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GpsService);

var _a;
//# sourceMappingURL=gpsservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/rainservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gpsservice_service__ = __webpack_require__("../../../../../src/app/services/gpsservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RainService = (function () {
    function RainService(http, gpsserv) {
        this.http = http;
        this.gpsserv = gpsserv;
        this.raincheck = { city: '', summary: '', isRaining: false, timeToRain: 5 };
        this.summarysubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.summary = this.summarysubject.asObservable();
        //  this.summarysubject.next('rain service online');
        //this.raincheck.isRaining=true;
        //this.raincheck.timeToRain=4;
        //this.raincheck.summary='checking...';
        //this.summarysubject.next("somethting");
        //this.summarysubject.next('translating GPS to city...');
        //this.updateRainCheck(this.raincheck);
    }
    RainService.prototype.checkRain = function (locationInfo) {
        var _this = this;
        setTimeout(function () { return _this.summarysubject.next('Connecting to AccuWeather services...'); }, 1000);
        console.log('locationInfo object');
        console.log(locationInfo);
        var raincheckinside = { isRaining: false, timeToRain: 5, city: 'Locating...', summary: 'Searching...' };
        if (locationInfo.ok == false) {
            raincheckinside.city = 'Internet Disconnected';
            raincheckinside.summary = 'Check your connection';
        }
        else {
            raincheckinside.city = locationInfo.city;
            setTimeout(function () { return _this.summarysubject.next("Getting weather for " + locationInfo.city + "..."); }, 2000);
            var reqparams = { apikey: 'oCUxdHjXGFnUepGz2m9hX2AhGiGHKGHe', language: 'en-us', details: false };
            console.log('requesting weather data...');
            this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationInfo.citykey + '?apikey=' + reqparams.apikey + '&&language=' + reqparams.language)
                .subscribe(function (data) {
                var _this = this;
                setTimeout(function () { return _this.summarysubject.next('...received weather data'); }, 4000);
                console.log(data);
                var jdata = data.json();
                console.log(jdata);
                setTimeout(function () { return _this.summarysubject.next('Its ' + jdata[0].Temperature.Metric.Value + 'º ' + jdata[0].Temperature.Metric.Unit + ' and ' + jdata[0].WeatherText + ' in ' + raincheckinside.city); }, 5000);
                // raincheckinside.summary = jdata[0].WeatherText;
                raincheckinside.isRaining = true;
                raincheckinside.timeToRain = 3;
                console.log('checking for rain at location key: ' + locationInfo.citykey);
                console.log('using dummy info');
                this.updateRainCheck(raincheckinside);
            }.bind(this));
        }
        //console.log('RainService.checkrain ' + this.gpsserv.coords.latitude);
        //this.http.get();
        //console.log('rain check coords :'+ JSON.stringify(coords));
        //console.log('checking raing at coordinate longitude: '+ coords.latitude +' latitude: '+ coords.longitude);
    };
    RainService.prototype.updateRainCheck = function (rainresponse) {
        ///console.log('checking weather in ' + rainresponse.city); 
        //this.raincheck.isRaining = rainresponse.isRaining;
        //this.raincheck.timeToRain =rainresponse.timeToRain;
        this.raincheck.city = rainresponse.city;
        this.raincheck.summary = rainresponse.summary;
        //console.log(this.raincheck.isRaining +' ' + this.raincheck.timeToRain+' '+ this.raincheck.city+' '+this.raincheck.summary);
    };
    return RainService;
}());
RainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gpsservice_service__["a" /* GpsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gpsservice_service__["a" /* GpsService */]) === "function" && _b || Object])
], RainService);

var _a, _b;
//# sourceMappingURL=rainservice.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map