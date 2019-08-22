function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
var demo = new Vehicle("Ford", "Taurus",1998,"Green")

function function_1(){
    document.getElementById("New_and_This").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color+ "-colored " +Erik.Vehicle_Model+ " manufactured in "+Erik.Vehicle_Year;
}

function Student(Name,Age,Grade,GPA,){
    this.Name=Name;
    this.Age=Age;
    this.Grade=Grade;
    this.GPA=GPA;
}
 var Student1= new Student("Sarah",15,"10th",3.65)
 var Student2= new Student("Jameson",18,"12th",2.64)
 var Student3= new Student("Morgan",13,"9th",4.0)

 function function_2(){
    document.getElementById("new_student").innerHTML=Student2.GPA;
 }

 function function_3(){
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var starting_point= 11;
        function Plus_five() {starting_point +=5;}
        Plus_five();
        return starting_point
    }

 }