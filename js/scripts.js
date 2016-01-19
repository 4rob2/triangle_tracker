// var triangleCalc = function(side1,side2,side3) {
// if (side1=side2=side3) {
//   return "Equilateral";
// }
//   else if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side1 + side3) <= side2)) {
//     return "No Triangle";
//   }
//   else if (side1 = side2 != side3) || (side2 = side2 != side1) || (side1 = side3 != side1){
//     return "Isosclese";
//   }
//     else (side1 != side2 != side3){
//     return "Scalene";
//   }
// };

var triangleCalc = function(side1,side2,side3) {
  if (side1 === side2 && side2 === side3 && side1 === side3) {
    return "Equilateral";
  } else if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side1 + side3) <= side2)) {
    return "Not a triangle";
  } else if ((side1 === side2 && side1 !== side3) || (side1 === side3 && side1 !== side2) || (side2 === side3 && side2 !== side1)) {
    return "Isoceles";
  } else {
    return "Scalene";
  }
};

$(document).ready(function(){
  $("form#triangles").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangleCalc(side1,side2,side3);

    $(".classification").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
