a=2;
var a;
console.log(a);//2
//hoisting eleva las asignaciones  en declaraciones

console.log(a);
var a=2; // hoisting no eleva en inicializaciones



nameOfDog('Obama');
function nameOfDog(name) {
    console.log(name);
}//hoisting eleva la funcion en la memoria


