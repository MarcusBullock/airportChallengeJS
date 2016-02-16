'use strict';

function Weather(){
  this._CHANCE_OF_STORMY = 0.5;
}

Weather.prototype.isStormy = function(){
  return (Math.random() > this._CHANCE_OF_STORMY);
};

function Airport(weather) {
  this.hangar = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("Too stormy");
  } else {
    plane.land();
    this.hangar.push(plane);
  };
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("Too stormy");
  } else {
  plane.takeoff();
  this.hangar.splice(this.hangarLookUp(plane), 1);
  };
};

Airport.prototype.hangarLookUp = function(plane) {
    var index = this.hangar.indexOf(plane)
    return index
};




function Plane() {
  this.landed = false
  this.inFlight = false
};

Plane.prototype.takeoff = function() {
   this.inFlight = true;
   this.landed = false;
};

Plane.prototype.land = function() {
   this.landed = true;
   this.inFlight = false;
};
