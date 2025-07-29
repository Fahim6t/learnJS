// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Code is resolved');
//         },2000);
//     });
// };


// async function greetings(){
//     let data = await getData();
//     console.log(data);
// }

// greetings();

async function fetchData(){
    try{
        let result = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await result.json();
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}
fetchData();