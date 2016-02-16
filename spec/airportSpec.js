'use strict';

describe("Airport", function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to instruct a plane to land", function(){
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

  it("should be able to instruct a plane to takeoff", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.hangar).not.toContain(plane);
  });


});
