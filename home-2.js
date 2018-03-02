// var a = parseInt(process.argv[2]);
// var b = parseInt(process.argv[3]);

var a = 10;
// количество чисел
var b = 2;
// чему кратно
var iter = 0;
// счетчик итераций
var summ = 0;
// сумма чисел

for(var i = 1; i<=10;i++){
  if(i%b==0){
    iter++;
    summ += i;
    console.log(iter, summ);
    }
 else{
     }
  }
console.log(`Количество итераций = ${iter}, сумма чисел кратных ${b} = ${summ}`);