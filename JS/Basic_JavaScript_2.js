
function function_1() {
    document.getElementById("Time").innerHTML = Date();
  }
  
function function_2() {
  var colors= "Sample Text";
  var result=colors.fontcolor("blue");
  document.getElementById("colors").innerHTML=result;
}

function function_3() {
  var sentence =" How much wood";
  sentence += " would a woodchuck chuck ";
  sentence += " if a woodchuck could chuck wood? "
  document.getElementById("Concatenate").innerHTML = sentence;
}
