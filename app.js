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
let days=[
'lunes',
'martes',
'miércoles',
'jueves',
'viernes'];
let cap= days.map(day => day.charAt(0).toUpperCase()+day.slice(1));
console.log(cap);

//Ejercicio-3-Arrays
var num=arr(10);
num=[2,3,4,5,6,7,8,9,10,11];
var par= arr.filter ((cont)=>cont%2===0);
var impar= arr.filter ((cont)=>cont%2!==0);
console.log(par);
console.log(impar);

//Ejercicio-4-Arrays
var arrnum=arrNumbers(10);
let sumPar=0;
let sumImpar=0;
for(let i=0; i<arrnum.length; i++){
    if(arrnum[i]%2===0) {
        sumPar+=arrnum[i];
    } else {
        sumImpar+=arrnum[i]; 
    }
}
console.log (sumPar);
console.log (sumImpar);

//Ejercicio-5-Arrays
function repetidos(claseA, claseB){
    let contentRep=[];
    for(let i=0; i<claseA.length; i++){
    let elemen=claseA[i];
        if(claseB.includes(elemen)&& !contentRep.includes(elemen)){
            contentRep.push(elemen);
        }

    }
    console.log(contentRep);
}
//Ejercicio-6-Arrays
let fam = [
    { name: "Juan", edad: 34 },
    { name: "Pepa", edad: 40 },
    { name: "Ana", edad: 12 },
    { name: "Luis", edad: 14 } ];

    let mayor=fam[0];
    let menor=fam[0];
    

for(let i=0; i<fam.length; i++){
    if(fam[i].edad>mayor.edad){
        mayor=fam[i];
    }
    if(fam[i].edad<menor.edad){
        menor=fam[i];
    }
    console.log(`Miembro mayor: ${mayor.name} de ${mayor.edad} años.`);
    console.log(`Miembro más joven: ${menor.name} de ${menor.edad} años.`);
}