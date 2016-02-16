function Airport() {
  this.hangar = []
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  this.hangar.splice(this.hangarLookUp(plane), 1);
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

function Weather() {
};

Weather.prototype.randomWeather() {
  var stormy = [true, false, false, false, false];
  return stormy[Math.floor(Math.random() * stormy.length)];
};
