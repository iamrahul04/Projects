let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})




/*     let input = document.querySelector("#calculator");
    let button = document.querySelector("#result");
    let result = document.querySelector("#h1");

    button.addEventListener("click", 
    function(){
        let output = eval(input.value);
        // console.log(output);
        h1.innerHTML = output;
    }) */


/* let input = document.getElementsByClassName(".result");
let button = document.getElementsByClassName[0](".btn");

button.addEnventListner("click", 
function(){
    let output = input.value;
    console.log(output);
}) */