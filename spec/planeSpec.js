describe("Plane", function() {


  beforeEach(function() {
    plane = new Plane();
  });

  it("a plane should be able to take off", function() {
    plane.takeoff();
    expect(plane.inFlight).toEqual(true);
  });

  it("a plane should be able to land", function() {
    plane.land();
    expect(plane.landed).toEqual(true);
  });

  it("a plane should show as not landed after take off", function() {
    plane.takeoff();
    plane.land();
    plane.takeoff();
    expect(plane.landed).toEqual(false);
  });

  it("a plane should show as not in flight after landing", function() {
    plane.land();
    plane.takeoff();
    plane.land();
    expect(plane.inFlight).toEqual(false);
  });

});
