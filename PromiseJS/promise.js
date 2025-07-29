function myValue(value){
    console.log('My Value is : '+value);
}
myValue(5);

let myPromise = new Promise((resolve,reject)=>{
    
    //Producing code
    let x=5;
    if(x===5){
        resolve("Promise is solved!!");
    }else{
        reject("Promise is not solved!!");
    }
});
//consuming code
myPromise.then((result)=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});