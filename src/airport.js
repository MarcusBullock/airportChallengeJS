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
  this.stormy = this.randomWeather();
};

Weather.prototype.randomWeather() {
  if (this.rand(1, 20) === 15) {
    return true;
  } else {
    return false;
  };
};

Weather.prototype.rand(a,b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
};
