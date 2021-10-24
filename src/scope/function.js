const fruits =()=>{
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit);


//variables asignadas con let o const no se pueden volver a reasignar
const anotherFunction= ()=>{
    var x=1;
    var x=2;
    let y=1;
    //let y=2;
    console.log(x);
    console.log(y);

};
anotherFunction();