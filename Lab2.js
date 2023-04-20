///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//Write a JavaScript program to sort the items of an array.

var x =parseInt(prompt("enter size of array"));
var arr=new Array(x);
var temp ;

for (var i=0;i<x;i++)
{
   arr[i]=parseInt(prompt("enter numbers"));
}


for(var i = 0; i < x - 1; i++)
{
    var min = i;
    for(var j = i + 1; j < x; j++)
    {
        if(arr[j] > arr[min])
            min = j;
    }
    temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
console.log(arr);


*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Sample Data and output: 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development' 


var str;
var length;
var temp;
str = prompt("enter text");
const arr = str.split(" ");

temp = arr[0];
length=arr[0].length
for (var i=0; i<arr.length;i++)
{
    for (var j=0;j<arr.length;j++)
   {
    if( length <arr[j].length )
    {length=arr[i].length;
    temp=arr[i];}
   }
}
console.log(arr);
console.log(length);
console.log(temp);


*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. 


function prime_or(x)
{
    var p=true;

    if(x==0 || x==1)
    p=false;

    for (var i=2;i<x;i++)
    {
        if (x%i==0)
        {
            p=false;
            break ;
        }
    }
    if(p)
    alert(x+" is a prime");
    else 
    alert(x+" is not a prime")
}
    prime_or(prompt("Enter a number"));

    
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1  


var size= parseInt(prompt("enter size"));
var amount= parseInt(prompt("enter amount"));
var coins=new Array(size);

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }  
    }   
}  

for (var i=0;i<size;i++)
{
    coins[i]=parseInt(prompt("enter coins"));
}

// to sort the coins array
for(var i = 0; i < size - 1; i++)
{
    var min = i;
    for(var j = i + 1; j < size; j++)
    {
        if(coins[j] > coins[min])
            min = j;
    }
    temp=coins[i];
    coins[i]=coins[min];
    coins[min]=temp;
}
console.log(coins);

alert(amountTocoins(amount,coins));


*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
