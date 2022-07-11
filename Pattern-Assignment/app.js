//Question1:-
let num1=5
for(let i=1; i<=num1; i++){
   let star="";
    for(let j=1; j<=num1; j++){
      if(i==j || (i+j==num1+1)){
        star+=`${"*"}    `;
      }else{
        star+="     "
      }
    }
    console.log(star)
  }








//Question2:-
// let n=3;
// x=n;
// y=n;
// for(let i=1; i<=n; i++){
//  let star=' ';
 
//   for(let j=1; j<n*2; j++){
    
//     if(j==x || j==y){
//       star+=`${"*"}    `
//     }else{
//       star+="     ";
//     }
//   }
//    x--;
//    y++;
//   console.log(star)
  
// }
// let m=2;
// x=1;
// y=2*m-1;
// for(let i=1; i<=m; i++){
//  let star= '      ';
//   for(let j=1; j<m*2; j++){
    
//     if(j==x || j==y){
//       star+=`${"*"}    `
//     }else{
//       star+="     ";
//     }
//   }
//    x++;
//    y--;
//   console.log(star)
  
// }
  // let num=5;
  // for(let i=1; i<=num; i++){
  //   let star="";
  //   for(let j=1; j<=num; j++){
  //     if((i+j==4) || (j-i==2) || (i+j==8) || i-j==2){
  //       star+=`${"*"}    `;
  //     }else{
  //       star+="      "
  //     }
  //   }
  //   console.log(star)
  // }





  

  
//Question3:-
  let number=5;
  let count=1;
  for(let i=1; i<=number; i++){
    let space=" ";
    let stars='';
    for(let j=1; j<=i; j++){
      if(count<=9){
        space="  ";
      }
      stars = stars + `${count++} `+ space;
    }
    console.log(stars)
  }






//Question4:-Print fibonnaci series 
let numb=4;
let a=0, b=1,c=a+b,space;
for(let i=0; i<=numb;i++){
  fibo="";
  for(let j=0; j<=i; j++){
    fibo+=`${a}  `;
    c=a+b;
    a=b;
    b=c;
  }
  console.log(fibo);
}