var a='Hello';
function hello() {
    let b='Hello world';
    const c='Hello World!';
    if (true) {
        let d='Hello world!!';
        debugger
    }
}
hello();


const moneyBox = ()=>{
    debugger
    var saveCoins=0;
    const countCins=(coins)=>{
        debugger
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCins;
};

let myMoneyBox=moneyBox();//guarda el parametro que le fue dado

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);