'use strict';

describe("weather", function(){

  beforeEach(function(){
    weather = new Weather();
  });

  it("should generate bad weather at random", function(){
    // spyOn(weather, 'random').and.returnValue(true);
    testArray = []
    for (var i = 0; i < 101; i ++) {
      testArray.push(weather.stormy)
    }
    expect(testArray).toContain(true)
    expect(testArray).toContain(false)
  });

});
