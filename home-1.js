// var a = parseInt(process.argv[2]);
var a = 100;
var tria="";
for(var i = 0; i<=a; i++){
    if(i%3==0){
        tria+="|";
    }
    else if(i%4==0){
        tria+="x";
    }
    else if(i%2==0){
        tria+=")))";
    }
    else{
        tria+="))))"
    }
}
console.log(tria);