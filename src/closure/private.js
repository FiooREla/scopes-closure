const person=()=>{//metodos internos
    var saveName="Name";
    return {
        getname: () =>{
            return saveName;
        },
        setname: (name) =>{
            saveName=name;
        },
    };
};

newPerson= person();
console.log(newPerson.getname());
newPerson.setname('Fio');
console.log(newPerson.getname());


//PRACTICA
const person=()=>{
    anyName="Name";
    return {
        getname: ()=>{
            return anyName;
        },
        setname: (name)=>{
            anyName=name;
        },
    };
    
};
newPerson=person();
console.log(newPerson.getname());
newPerson.setname("Fio");
console.log(newPerson.getname());
