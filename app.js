// var b = 0
// while(b < 10){
//     alert(b);
//     b++;
// }

// var c = 0 
// do {
//     alert(c);
//     c++;
// }
// while (c<10)


// function foo(){
//     alert ("hy")
// }

// function foo(){
//     alert (2 + 2)
// }

// function foo(greet){
//     alert (greet)
// }



// function foo(){
//     alert("nanaan")
// }



// function getName(){
//     var  name = document.getElementById("name")
//     alert (name.value)
// }


// function getName(){
//     var  name = document.getElementById("name")
//     alert (name.value)
//     name.value= ""
// }


// function setName(){
    // var  name = document.getElementById("name")
    // alert (name.value)
    // name.value= "hyhyhyhyhy"
    
// }

// setName()


// function setName(){
//     var para = document.getElementById("para")

//     para.innerHTML ="hello is the example text "
// }

// setName()


function getNumber(num){
    var result = document.getElementById("result")
    result.value += num ;
}


function clearResult(){
    var result = document.getElementById("result");
    result.value = "" 
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value) 
}

