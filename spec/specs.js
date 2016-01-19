describe('triangleCalc',function(){
  it("is false if the sum of two sides is less than or equal to the third side", function(){
    expect(triangleCalc(4,4,4)).to.equal(true);
  });
});
