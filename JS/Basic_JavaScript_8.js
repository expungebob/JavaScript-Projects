function function_1(){
    var one="Jack and Jill ";
    var two=" went up the hill";
    var three=" to fetch a ";
    var four=" pail of water.";
    var sentence= one.concat(two,three,four);
    document.getElementById("concat").innerHTML=sentence;
}
function function_2(){
    var sentence_2= "Jack and Jill went up the hill to fetch a pail of water.";
    var section= sentence_2.slice(26,30);
    document.getElementById("slice").innerHTML=section;
}
function function_3(){
    var sentence_3= document.getElementById("toUpper").innerHTML;  
    document.getElementById("toUpper").innerHTML=sentence_3.toUpperCase();
}
function function_4(){
    var sentence_4= "Jack and Jill went up the hill to fetch a pail of water.";
    var locate= sentence_4.search("water")
    document.getElementById("Search").innerHTML=locate;
}
function function_5(){
    var a= 11478;   
    document.getElementById("toString").innerHTML=a.toString(16);
}
function function_6(){
    var pi=Math.PI;
    document.getElementById("toPrecision").innerHTML=pi.toPrecision(30);
}
function function_7(){
    var euler=Math.E;
    document.getElementById("toFixed").innerHTML=euler.toFixed(8)
}
function function_8(){
    a=54
    document.getElementById("valueOf").innerHTML=a.valueOf();
}
