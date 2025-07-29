const lst = [1,2,3,4,5];
try{
    if(lst[5]===undefined) throw new Error("Exception");
    let x = '5';
    if(x==='') throw new Error('X is Empty');
    if(isNaN(x)) throw new Error('X is do not number data types');

}catch(e){
    console.log("An Exception occured!!");
    console.log(e.message);
}
finally{
    console.log("Completed...");
}