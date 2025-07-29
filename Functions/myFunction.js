function func1(num1,num2){
    return num1+num2;
}
function func2(){
    setTimeout(()=>{
        console.log("Two");
    },2000)
    
}
function func3(num1,num2){
    return num1**num2;
}
console.log(func1(1,2));
func2();
console.log(func3(10,2));
