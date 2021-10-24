var hello='HELLO';
var hello = 'hello +';
//solo var reasigna valores
let world = 'hello world';
//let y const no puedes sobreescribir el codigo
let world ='Hello';
const helloWorld = 'hello world!'


const anotherFunction = () => { //permite acceder a las variables globales de arriba
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();
//no hacer estos dos
const helloWorld=()=>{
    globalVar ='im global'
}

helloWorld();
console.log(globalVar);//puedo acceder a la variable global pero esto es mala practica

//globales: No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.



const anotherFunction = ()=>{
    var localVar = globalVar = 'im global';
}
anotherFunction();
console.log(globalVar);// se accede a la varialbe pero no se hace
//VARIABLE LOCAL
//entras a la variable solo en esa estructura