
function function_1(){
    var digit= "";
    var H = 10
    while (H >= 0 ) {
        digit += "<br>" + H;
        H--;
    }
    document.getElementById("countdown").innerHTML=digit
}

function function_2() {
    var string = "How much wood could a wood-chuck chuck?";
    var x = string.length;
    document.getElementById("stringlength").innerHTML = x;
}
var instruments = ["Paino","Cello","Piccolo","Pan pipes","Steel drums","Guitar"]
var result = "";
var A;

function function_3(){
    for (A= 0; A < instruments.length; A++) {
        result +=instruments[A] + "<br>";
    }
    document.getElementById("for_loop").innerHTML =result;
}
function function_4(){
    const Car= {make: "Audi",model: "R8 Spyder",year:2020};
    Car.year = 2019
    Car.price =" $200,000";
    document.getElementById("constant").innerHTML= "The cost of the " + Car.year + Car.make +" "+Car.model
    + " is "+ Car.price;
}
var V=65;
document.write(V)
function function_5(){
        let V=72;
    document.getElementById("let").innerHTML=("<br>"+ V); 
}

function function_6 (name){
    return "Hello " + name;
};
document.getElementById("return").innerHTML= function_6("Dave")

function function_7(){
let Car= {
    make: "Audi",
    model: "R8 Spyder",
    year:2020,
    price:" $200,000",
    style: function() {
        return "The vehicle is a " + this.year + this.make + this.model + " worth over " + this.price;
    }
};
    document.getElementById("let_object").innerHTML= Car.style();
}

function function_8(){
var count=""
var C;
    for (C= 0; C < 5; C++) {
        if (C ==4) {break;}
        count += C+ " Missisipi"+ "<br>"
    }
    document.getElementById("break_loop").innerHTML =count;
}
function function_9(){
    var count=""
    var C;
        for (C= 0; C < 10; C++) {
            if (C ==6)  {continue;}
            count += C+ " Missisipi"+ "<br>"
        }
        document.getElementById("continue_loop").innerHTML =count;
    }

