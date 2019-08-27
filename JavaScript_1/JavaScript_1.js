function function_1(){
    var order;
    var food= document.getElementById("food").value;
    var phrase = " Mamma Mia, that is my favorite!"
    switch(food){
        case "Spaghetti":
        order = "Spaghetti"+"!"+ phrase;
        break;
        case "Lasagna":
        order = "Lasagna"+"!"+ phrase;
        break;
        case "Chiken parmigiana":
        order = "Chiken parmigiana"+"!"+ phrase;
        break;
        case "Fettucini":
        order = "Fettucini"+"!"+ phrase;
        break;
        case "Lettucini":
        order = "Lettucini "+" is like a salad. ";
        break;
        case "Spicy Meat-a-ball":
        order = "Thats a "+"Spicy Meat-a-ball"+"!";
        break;
        case "Ravioli":
        order = "Ravioli"+"!"+ phrase;
        break;

        default: 
        order = "\'Scuzi, please order your food.";
    }
    document.getElementById("order_out").innerHTML=order;
}
function function_2(){
    var F = document.getElementsByClassName("example1");
    F[0].innerHTML= " this element was called by class name"
}
function function_3() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    var img = document.getElementById("space");
    ctx.drawImage(img,10,10);
  }

function function_4(){
    var c = document.getElementById("canvas2");
    var ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"green");
    grd.addColorStop(1,"white");
    
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);

    
}








//Comments





