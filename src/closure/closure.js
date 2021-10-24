//conbinacion de funcion y ambito lexico, recuerda ellambito donde fue creado


const moneyBox = (coins) =>{
    var saveCoins=0;
    saveCoins+=coins;
    console.log(`MoneyBox: $${saveCoins}`);

}
moneyBox(5);
moneyBox(10);


const moneyBox = ()=>{
    var saveCoins=0;
    const countCins=(coins)=>{
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCins;
};

let myMoneyBox=moneyBox();//guarda el parametro que le fue dado

myMoneyBox(4);//4
myMoneyBox(6);//10
myMoneyBox(10);//20


//PRACTICA
// const anotherFuction=()=>{
//     var billetera=0;
//     const sumaCoins =(coins)=>{
//         billetera+=coins;
//         console.log(`Monedero: $${billetera}`)
//     }
//     return sumaCoins;
// }

// let myMoneyBox=anotherFuction();
// myMoneyBox(4);
// myMoneyBox(6);
// myMoneyBox(10);


