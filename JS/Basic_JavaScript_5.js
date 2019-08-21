function function_1(){
    document.getElementById("Test").innerHTML=Number.NaN;
}
function function_2(){
    document.getElementById("infinity").innerHTML=1.7976931348623157E309
}
function function_3(){
    document.getElementById("neginfinity").innerHTML=-1.7976931348623157E309;
}
function function_4(){
    document.getElementById("greater").innerHTML=100>34;
}
function function_5(){
    document.getElementById("lesser").innerHTML=100<34;
}
console.log(2+2)

document.write("10"+5);

console.log(100<34)

function function_6(){
    document.getElementById("dbleql").innerHTML=(50==50);
}

function function_7(){
    document.getElementById("negdbleql").innerHTML=(31==42);
}

function function_8(){
    document.getElementById("trpleql").innerHTML=(60===60);
}

function function_9(){
    x=67           
    y="green"
    document.getElementById("negtrpleql_1").innerHTML=(x===y);
}
function function_10(){
    A=45
    B="45"
    document.getElementById("negtrpleql_2").innerHTML=(A===B);
}

function function_11(){
    C="large"
    D="small"
    document.getElementById("negtrpleql_3").innerHTML=(C===D);
}

function function_12(){
    document.getElementById("ANDtrue").innerHTML=(6<7 && 8>4);
}

function function_13(){
    document.getElementById("ANDfalse").innerHTML=(5<4 && 14>12);
}

function function_14(){
    document.getElementById("ORtrue").innerHTML=(5>2 || 6<2);
}

function function_15(){
    document.getElementById("ORfalse").innerHTML=(4<2 || 5<3);
}

function function_16(){
    document.getElementById("NOTtrue").innerHTML=!(50>40);
}
function function_17(){
    document.getElementById("NOTfalse").innerHTML=!(12>15);
}