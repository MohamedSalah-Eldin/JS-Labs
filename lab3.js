
/*

// you are required to, given a string, replace every letter with its position in the alphabet 
// If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc. 
// Example: alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) 


function positioning(string) {
    var position="";
  
    for (var i = 0; i < string.length; i++) {
  
        if (string.charCodeAt(i) - 96 > 0 && string.charCodeAt(i) - 96 <= 26) 
        {
            position+=string.charCodeAt(i) - 96 + ' ';
        }
        else if (string.charCodeAt(i) - 64 > 0 && string.charCodeAt(i) - 64 <= 26)
        {
            position+=string.charCodeAt(i) - 64 + ' ';
        }
      }
      return position;
    }

    var xstr;
    xstr = prompt("Enter a string");
    alert(xstr);
    alert(positioning(xstr));

    */


    //=========================================================================================================================================================

    
    /*
    
    
    // Your task is to sort a given string. Each word in the string will contain a single number. 
    // This number is the position the word should have in the result. 
    // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). 
    // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. 
    // Examples 
    // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est" 
    // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople" .


function order_str(text)
    {
        if (text)
        {
        var Order_arr=[];
        var str=text.split(' ');
        str.forEach(word=>{var index=Number(word.match(/\d+/g)) ; Order_arr[index-1]=word})
            return Order_arr;
        }
    }

    var xstr;
    xstr = prompt("Enter a string including numbers (1-9)");
    alert(xstr);
    alert(order_str(xstr));


    */



    



    
