let num = 0;

console.log ("repetição while");

while (num<=10) {
    if (num%2==0) {
        console.log(`o número ${(num)} é par`)
    }else{
        console.log(`o número ${(num)} é ímpar`)
    }
    num++;
}

console.log ("repetição do while");

let num1 = 11;

do{
    console.log(`valor do número é ${(num1)}`);
    num1++;
}while(num1<=0);

console.log ("repetição for");

for(let num2 = 0; num2<=10; num2++){
    console.log(`valor do número é ${(num2)}`);
}