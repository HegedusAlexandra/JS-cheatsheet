/* 
const
let
var

kulcsszavakkal hozunk létre változókat

VÁLTOZÓNÉV = ÉRTÉK

a primitívek:

szöveg - string
szám
bolean - true/false
undefined
null
*/

let aString = "This is a sting";
// `` backtickkel többsoros stringet tudunk létrehozni 
// "" csak egy sorosat
// mindig idézőjelbe tesszük a szöveget
let aNumber = 4;                //nincs idézőjel
let aBoolean = true;            //nincs idézőjel
let anUndefined = undefined;    //nincs idézőjel
let aNull = null;               //nincs idézőjel
let notANumber = NaN;           //nincs idézőjel

console.log(0/0) //node cheatsheet.js NaN t ad

console.log(typeof aString)            //node cheatsheet.js string et ad típusként

console.log(typeof anUndefined)        //node cheatsheet.js undefined et ad típusként

console.log(typeof aNull)              //node cheatsheet.js object et ad típusként

console.log(typeof notANumber)         //node cheatsheet.js number t ad típusként

console.log(aFunction1());

function aFunction1() {
    //ez a függvény belseje
    //mindenképpen RETURN something ,if not than UNDEFINED

    return "this is a function"
}

//itt még nem fut console.log(aFunction2()); mert változóban van (const,var,let) ,csak utána

const aFunction2 = function() {
    //ugyanúgy viselkedik mintha a függvénynek neve lenne

    return "this is another function"
}

console.log(aFunction2());

console.log("0" == 0);

// mindig 3 db egyenlőségjel az összehasonlítás
console.log("0" === 0)

const arr = [34, 15, 88, 2] // ez egy tömb- forciklussal lehet végigmenni rajta

for (let index=0;index <<arr.length;index++) {
    console.log(arr[index]);
}

for (const item of arr) {
    console.log(item)
}

