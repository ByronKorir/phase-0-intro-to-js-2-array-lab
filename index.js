// Write your solution here
const cats  = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   cats.push("Ralph");

}
function destructivelyPrependCat(name){
   cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
   cats.pop();
}

function destructivelyRemoveFirstCat(){
   cats.shift();
}

function appendCat(name){
   const appendNewCat = [...cats];
   appendNewCat.push(name);
   return appendNewCat;
}

function prependCat(name){
   const prependNewCat = [...cats];
   prependNewCat.unshift(name)
   return prependNewCat
}

function removeLastCat(){
   const removeLastCat = [...cats];
   removeLastCat.pop();
   return removeLastCat
}

function removeFirstCat(){
   const removeFirstCat = [...cats];
   removeFirstCat.shift();
   return removeFirstCat
}
