console.log("hello world");

/*
//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
//Sample numbers: 3, -7, 2 
//Output: 3, 2, -7  


var x,y,z;
x = prompt("Enter First Number");
y = prompt("Enter Second Number");
z = prompt("Enter Theird Number");

if (x>y && x>z)
{
    if (y>z)
    alert ("sorted numbers are "+x+y+z);
    else 
    alert ("sorted numbers are "+x+z+y);
}else if (y>x && y>z)
{
    if (x>z)
    alert ("sorted numbers are "+y+x+z);
    else 
    alert ("sorted numbers are "+y+z+x);
}else 
{
    if (x>y)
    alert ("sorted numbers are "+z+x+y);
    else
    alert ("sorted numbers are "+z+y+x);
}
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" 
//instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both 
//three and five print "FizzBuzz". 


for (var i=1;i <=100;i++)
{
 if (i%3==0 && i%5==0)
    console.log(i,"FizzBuzz");
    else if (i%3==0)
    console.log(i,"Fizz");
    else if (i%5==0)
    console.log(i,"Buzz");
    else 
    console.log(i);
}
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 


var i,sum=0;
for (i=1;i<=1000;i++)
{
if (i%3==0 && i%5==0)
{console.log(i);
sum=sum+i;}
}
console.log("sum the multiples of 3 and 5 :"+sum);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
//If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message ‘ wrong guess, 
//want to try again?’ if confirmed continue up to 3 times, if not stop the code, after 3 failed times, display message ‘game over’. 


var x;
var flag=false;
const num=5;
for(var i=0;i<3;i++)
{
x = prompt("Enter guess Number (1..10)");
if (x==num)
{
flag = true;
break;
}
else if (!confirm ("wrong guess, want to try again?"))
break;
}
if (flag==true)
alert ("Good Work");
else if (i<3)
alert ("game over");
else if (i==3)
alert ("3 failed times game over");
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








