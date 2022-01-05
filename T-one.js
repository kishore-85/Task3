//---prgrm-1---//
// function myfun(a,b){
//     if(a.length != b.length){
//         return false;
//     }
//     var aa = a.split('').sort().join('');
//     var bb = b.split('').sort().join('');

//     var result = (aa === bb);
//     return result;
// }
// document.write(myfun('triangle','integral'));

///---prgrm-2---//


// let logic = ['kishore','naveen','praveen','kannan','naveen','kannan'];

// let logic2=[];

// logic.forEach((x) => {
//     if(!logic2.includes(x))
//     logic2.push(x);
// });
// console.log(logic2)


//---prgrm-3---//
// let a = 5;
// var fact=1;
// var ans=[];
// for(i=a; i>1;i--){
//     fact=fact*i;
//     ans.push(fact)
// }
// console.log(ans[ans.length-1])


// function fact(num)   
// {  
// if (num == 0) {  
// return 1;  
// }  
// else {  
// return num * fact( num - 1 ); 
 
// }  
// }

// var kk=fact(5);
// console.log(kk)

//---prgm-4---//
// function gcd(num1,num2){
//     if(num2 == 0){
//         return num1;
//     }
//     else{
//         var rem = num1%num2;
//         return gcd(num2,rem);
//     }
// }
// gcd(12,0);
// gcd(34,18);

//--prgrm-5//
//   let getnum = parseInt( prompt('enter you num') );
//   let num1 = 0, num2 = 1, nextterm;
//   console.log(num1);
//   console.log(num2);
  
//   nextterm= num1 + num2;
//   while(nextterm<=getnum){
//     console.log(nextterm)

//     num1 = num2;
//     num2 = nextterm;
//     nextterm = num1+num2;
//   }




// ---prgrm-6---//
// var rows = 5;
// for(i=1;i<=rows; i++){
//     for(k=1;k<=(rows-i);k++){
//         document.write('&nbsp')
//     }
//     for(j=1;j<=i;j++){
//         document.write('*');
//     }
//     document.write('</br>')
// }

//--prgm-7--//
// let arr1=[30,22,12,7,87,2,-4,-9];
//   function swap(arr,a,b){
//      temp = arr[a];
//      arr[a]= arr[b];
//      arr[b]= temp;
//  }

//  function bubble(aa){
//      var len= aa.length;
//       for(i=0; i<len;i++){
//           for(j=0;j<len-i;j++){
//               if(aa[j]>aa[j+1]){
//                   swap(aa,j,j+1);
//               }
//           }
//       }
//       return aa;
//  }
//  var bubble = bubble(arr1);
//  console.log(bubble);

//--prgrm 8--//

// for(i=1;i<=100;i++){
//     if(i % 2 == 0){
//          document.write([i],'is even<br>')
//         // console.log([i],'is even')
//     }
//     else{
//         // console.log([i],'is odd')
//          document.write([i],' is odd'+'<br> ')
//     }
// }
//--prgrm-9--//
// let marks = prompt('enter your marks');
// if(marks>90){
//     document.write('A grade')
// }
// else if(marks>80){
//     document.write('B grade')
// }

// else if(marks>70){
//     document.write('c grade')
// }

// else if(marks>60){
//     document.write('D grade')
// }

// else if(marks>50){
//     document.write('E grade')
// }
// else if(marks<50){
//     document.write('fail')
// }

arr=[7,4,55,-5,2,-1]
 function swap(s,a,b){
     t=s[a];
     s[a]=s[b];
     s[b]=t;
 }
function real(v){
let l=v.length;
for(i=0;i<l;i++){
    for(j=0;j<l-i;j++){
          if(v[j]>v[j+1]){
              swap(v,j,j+1)
          }
    }
}
return v;
}
var real = real(arr);
 console.log(real);