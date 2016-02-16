'use strict';

describe("Airport", function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
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


  it("should not instruct a plane to takeoff if the weather is stormy", function(){
    spyOn(Math,'random').and.returnValue(0);
    airport.land(plane);
    spyOn(airport._weather,'isStormy').and.returnValue(true);
    expect( function(){airport.takeoff(plane); } ).toThrow(new Error("Too stormy"));
    expect(airport.hangar).toContain(plane);
  });

  it("should not instruct a plane to land if the weather is stormy", function() {
    spyOn(Math,'random').and.returnValue(1);
    expect( function(){airport.land(plane); } ).toThrow(new Error("Too stormy"));
  });


});
