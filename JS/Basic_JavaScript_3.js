
function function_1() {
    var result_add = 9+10;
    document.getElementById("add").innerHTML = result_add;
  }
  function function_2() {
    var result_sub = 7-6;
    document.getElementById("sub").innerHTML = result_sub;
  }
  function function_3() {
    var result_mult = 12*12;
    document.getElementById("mult").innerHTML = result_mult;
  }
  function function_4() {
    var result_div = 144/12;
    document.getElementById("div").innerHTML = result_div;
  }
  function function_5() {
    var maths = ((14+8)*6)/4;
    document.getElementById("maths").innerHTML = maths;
  }
  function function_6() {
    var modulus = 113/16;
    document.getElementById("modulus").innerHTML = "The remainder of 113 divided by 16 is: " +modulus;
  }
  function function_7() {
    var unary = 1024;
    document.getElementById("unary").innerHTML = -unary;
  }
  function function_8() {
    var x = 3.14156;
    x++;
    document.getElementById("increment").innerHTML = x;
  }
  function function_9() {
    var y = 100
    y--;
    document.getElementById("decrement").innerHTML = y;
  }
  window.alert(Math.random());
  window.alert(Math.random()*100);

  function function_10() {
    var Maths_2 = Math.E;
    document.getElementById("Maths_2").innerHTML= Maths_2;
  }
  