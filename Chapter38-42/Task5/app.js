function myIndex(str , searchValue){
for (var i = 0; i < str.length ; i++){
if (str[i] === searchValue){
    return i;
}

}
return "not found";
}
console.log(myIndex("hello world" , "o"));
console.log(myIndex("hello world" , "z"));
console.log(myIndex("Safia Zahid" , "Z"));

 