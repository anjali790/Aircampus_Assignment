//Ques1:-Print all number in a given range
function range(num1,num2){
   if(num1<=num2){
    console.log(num1);
    return range(num1+1,num2);
   }
}
range(20,30);





//Ques2:-Print all numbers in decending order
function decendingOrder(num1,num2){
    if(num1<=num2){
        console.log(num2);
        return decendingOrder(num1,num2-1);
    }
}
decendingOrder(10,20);





//Ques3:-Print all even number in a given range
function even(num1,num2){
    console.log(num1);
    while(num1%2==0 && num1<num2){
        return even(num1+2,num2);
    }
}
even(40,50);







//Ques4:-Find the factorial of a given number
function factorial(num,fact){
    if(num>0){
        fact=num*fact;
        return factorial(num-1, fact)
    }
    return fact;
}
console.log(factorial(6,1));






//Ques5:-Print fibonacci series
function fibonacci(first,second,counter){
    if(counter<10){
        let c=first+second;
        return fibonacci(second,c,counter+1);
    }
    console.log(first);
}
fibonacci(1,1,1)






//Ques6:-Print all the number between given range
function range(num1,num2){
    console.log(num1);
    while(num1<num2){
        return range(num1+1,num2);
    }
}
range(1,5);






//Ques7:-Print the product of all the numbers in the given range
function product(num1,num2){
    if(num1<=num2){
      return num1*product(num1+1,num2);
    }else{
      return 1;
    }
  }
  console.log(product(1,6))

  





//Ques9:-Print sum of all the numbers in the given range
function sumOfNumber(num1,num2,sum){
    if(num1<num2){
        sum=sum+num1;
        return sumOfNumber(num1+1,num2,sum);
    }
    return sum;
}
console.log(sumOfNumber(1,10,0))









//Ques10:-Write a recursive program to find the power of given number and exponent
function power(num,pow){
    if(pow>0){
       return num*power(num,pow-1);
    }else{
        return 1;
    }
}
console.log(power(2,6))