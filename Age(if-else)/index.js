const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultName = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age>=100){
        resultName.textContent = `You are TOO OLD to enter this site`;
    }else if(age==0){
        resultName.textContent = `You can't enter. You were just born`;
    }else if(age>=18){
        resultName.textContent = `You are old enough to enter this site`;
    }
    else if(age<0){
        resultName.textContent= `You are age cannot be below zero`;
    }else{
        resultName.textContent = `You must be 18+ to enter this site`;
    }


}