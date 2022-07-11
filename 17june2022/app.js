let num=parseInt(process.argv[3]);
for(i=1; i<=10; i++){
    console.log(i);
}


let number=parseInt(process.argv[13]);
for(i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}


let num1=parseInt(process.argv[18]);
for(i=10; i>=1; i--){
    console.log(i)
}





let num2=parseInt(process.argv[38]);
let factorial=1;
for(i=4; i>=1; i--){
    factorial=factorial*i;
}
    console.log(factorial);





let a=1;
let b=1;
for(let i=1; i<=10; i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}





let num4=978;
for(let i=num4; i>0; i=i){
    console.log(i%10);
    i=Math.floor(i/10);
}



let num5=6;
let check=true;
for(let i=2; i<num5; i++){
    if(num5%2==0){
        check=false;
    }
}
if(check==true){
    console.log("YES");
}else{
    console.log("NO");
}


let num6=20;
    if(num6/3==0){
        console.log("Hello");
    }else if(num6/5==0){
        console.log("World");
    }else if(num6/15==0){
        console.log("HelloWorld");
    }else{
        console.log(num6);
    }






let num7=292;
let first_digit=Math.floor(num7/100);
let d=Math.floor(num7/10);
let second_digit=d%10;
let third_digit=num7%10;
let reveseNumber=((third_digit*100)+(second_digit*10)+first_digit);
if(reveseNumber==num7){
    console.log("Number is Palindrome number");
}else{
    console.log("Number is not Palindrome number");
}




// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
