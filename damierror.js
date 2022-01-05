///--one---//
//--prgrm -5--//
let num = parseInt(prompt('enter num:'));
let prevalue = 0, currentvalue= 1, nextterm;
 console.log(prevalue);
 console.log(currentvalue);
 nextterm= prevalue+currentvalue;
while(nextterm<=num){
    console.log(prevalue);
    prevalue= currentvalue;
    currentvalue= nextterm;
    nextterm=  prevalue+currentvalue;
}

//--extra--//
// let num = parseInt(prompt('enter num:'));
// let num1 =0, num2=1,nextTerm;
// console.log('Fibonacci Series:');

// for(let i=1; i<=num;i++){

//     nextTerm=  num1+num2;
//         num1= num2;
//          num2= nextTerm;
// console.log(num1);

        
// }


///---factorial--//
function fact(num)   
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * fact( num - 1 ); 
 
}  
}
//   var inputNum = parseInt(prompt('enter num'));
//   var call =fact(inputNum);
//   console.log(call)
var kk=fact(5);
console.log(kk)