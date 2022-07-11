//Print odd numbers
for(i=1; i<=10; i++){
    if(i%2!=0){
        console.log("Odd number",i);
    }
}







//Sum of even numbers
let sum=0;
for(i=1; i<=10; i++){
    if(i%2!=0){
   sum+=i;
    }
}
console.log("Sum of even numbers",sum);
    






//First and last digit of a number
let num=24;
let firstDigit=Math.floor(num/10);
let lastDigit=num%10;
console.log("First digit of number",firstDigit);
console.log("last digit of number",lastDigit);







//Check number is Armstrong or not
let num1=371;
let first_digit=Math.floor(num1/100);
let d=Math.floor(num1/10);
let second_digit=d%10;
let third_digit=num1%10;
if(((first_digit**3)+(second_digit**3)+(third_digit**3))==num1){
    console.log("Number is Armstrong number");
}else{
    console.log("Number is not Armstrong number");
}








//Product of number whose second last digit is 4 and number is even
let product = 1;
  for(let i = 1;i<=45 ;i ++){
    let checking = Math.floor(i/10);
  	if(i%2==0 && checking%10==4){
      product = product * i;
	  }
  }
 if(product ==1 ){
   console.log(0);
 }else{
   console.log("Product of number whose second last digit is 4 and number is even",product);
 }






//Print all even digit of a number
let number=36786;
while(number>0){
    let digit = number % 10;
    if(digit %2==0){
        console.log("Even digit of a number",digit);
    }
    number= Math.floor(number/10);
}







let num3=282;
let firstdigit=Math.floor(num3/100);
let b=Math.floor(num3/10);
let seconddigit=b%10;
let thirddigit=num3%10;
let reveseNumber=((thirddigit*100)+(seconddigit*10)+firstdigit);
if(reveseNumber==num3){
    console.log("Number is equal to its reverse number");
}else{
    console.log("Number is not equal to its reverse number");
}
