const msg=()=>console.log("Arrow Function");
let data=[10,20,30,40,50,60.56,70.2,"KIET",msg];
console.log(data);
data.forEach(value=>console.log(`value of Array=${value}`));
//for (let value of data){
//    console.log(`value of array=${value}`);
//}

//for (let i=0;i<data.length;i++){
//    console.log(`value of ${i} is ${data[i]}`);
//}
//for( let index in data){
//    console.log(`value of ${index} is ${data[index]}`);
//}