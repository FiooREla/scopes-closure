const buildCount=(i)=>{
    let count =i;
    const displayCount=()=>{
        //alcance donde esta asignado dentro de una funcion
        console.log(count++);
    };
    return displayCount;
};

const myCount= buildCount(1);
myCount();
myCount();
myCount();
//nuevo closure, nuevo alcance
const myOtherCount=buildCount(10);
myOtherCount();
myOtherCount();
