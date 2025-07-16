/*
function outerfunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction;
}
let a = outerfunction();
console.log(a());
console.log(a());
*/
function count(){
    let c = 1;
    c++;
    console.log(c);
}
count();
count();