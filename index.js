// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){
cats.push(name);

}
function  destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(){
    cats.shift(name);
}
function appendCat(name){
    const name_1=[...cats,name]
    return name_1;
}
function  prependCat(name){
    const name_2=[name,...cats]
    return name_2;
}
function removeLastCat(){
    const cats1=cats.slice(0,cats.length-1);
    return cats1;
}
function removeFirstCat(){
    const cats2=cats.slice(1);
    return cats2;
}