const helloWorld =()=>{
    const hello = 'Hello world';
    console.log(hello);
};

helloWorld();
console.log(hello);

//AMBITO LEXICO, NO REESCRIBE EL valor, solo toma de acuerdo a la variable local o global

var scope="i am global";
const functionScope = ()=>{
    const scope = "i am just a local"
    var func=()=>{
        return scope;
    }
    console.log(func());
};
functionScope();
console.log(scope);