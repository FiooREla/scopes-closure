const fruits=()=>{
    if (true) {
        var fruits1='apple';//es una asignacion del scope local
        //con let y const solo puedes acceder a ellos dentro del bloque
        let fruits2='banana';
        const fruits3='kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);


};
fruits();


let x=1;//global
{
    let x=2;
    console.log(x);
}
console.log(x);


var x=1;//global
{
    var x=2;//variable se transmite a la variable global. hay que tener cuidado

    console.log(x);
}
console.log(x);
//con var no es la funcionalidad que queremos, con let si, con var toma el ultimo valor, sobreescribe

const anotherFunction= ()=>{
    for (let i = 0; i < 10; i++) {
        setTimeout(()=>{
            console.log(i);
        }, 1000)
        
    }
}
anotherFunction();