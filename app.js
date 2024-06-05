// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${firstName[0]}.`)
// }
// function repeat(str, numTimes){
//     let result='';
//     for(let i=0; i<numTimes; i++){
//         result+=str;
//     }
//     console.log(result);
// }
// function add(x,y){
//     if(typeof x!=='number'|| typeof y !== 'number'){
//         return false;
//     } else{
//         let sum=x+y;
//         return sum;
//     }
// }
// function callTwice(func){
//     func();
//     func();

// }
// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1
//     console.log(roll)
// }
// callTwice(rollDie)


//Ejercicio-1-Arrays
var weekDays;
weekDays=arr(6);
let weekDays=['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.log(weekDays);

//Ejercicio-2-Arrays??
const days=[
'lunes',
'martes',
'miércoles',
'jueves',
'viernes'];
console.log(days.toUpperCase());

//Ejercicio-3-Arrays
var num=arr(10);
num=[2,3,4,5,6,7,8,9,10,11];
var par= arr.filter ((cont)=>cont%2===0);
var impar= arr.filter ((cont)=>cont%2!==0);
console.log(par);
console.log(impar);

