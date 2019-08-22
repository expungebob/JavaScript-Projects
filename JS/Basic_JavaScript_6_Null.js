function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
var null = new Vehicle("Ford", "Taurus",1998,"Green")

function function_1(){
    document.getElementById("New_and_This").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color+ "-colored " +Erik.Vehicle_Model+ " manufactured in "+Erik.Vehicle_Year;
}
function function_2(){
    document.getElementById("reserved").innerHTML= "this car is "+null.Vehicle_Model
}