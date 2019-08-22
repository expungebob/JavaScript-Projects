var x= 40;
var y= 20;
function function_1(){
    "var y= 20;"
    var a= 20
    document.getElementById("example1").innerHTML=(x+100+y+a)
}
function function_2(){
    document.getElementById("example2").innerHTML=(x+70+y)
}
function_1();
function_2();
function function_3(){
    if (new Date().getHours() <= 12){
    document.getElementById("gethours").innerHTML="Good morning"
    }
    if (new Date().getHours() >= 12){
        document.getElementById("gethours").innerHTML="Good Afternoon"
        }
}

function function_4(){
    if (new Date().getMonth() >= 3){
    document.getElementById("time_date").innerHTML="Happy Spring"
    }
    if (new Date().getMonth() >= 6 ){
        document.getElementById("time_date").innerHTML="Happy Summer"
        }
        if (new Date().getMonth() >= 9 ){
            document.getElementById("time_date").innerHTML="Happy Fall"
            }
}

function function_5(){
    score =document.getElementById("score").value;
    if (score >=32) {
        msg = "Yes. You are eligible to apply for Medical School";
    }
    else{
        msg= "Sorry, you are not eligible to apply. Please study more."
    }
    document.getElementById("mcatscore").innerHTML= msg;
    }
function function_6(){
    var time= new Date().getHours();
    var reply;
       if (time <12 == time > 0){
           reply= "it is morning time";
       }
       else if (time >12 == time <18 ) {
           reply= "it is the afternoon";
       }
       else {
           reply = "it is evening time";
       }
    document.getElementById("timeofday").innerHTML=reply
    }
