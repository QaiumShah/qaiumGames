//Function to reverse a string
function reverseString(str) {
    var array = str.split(''); //Firstly splitting the string into the array
    array = array.reverse(); // reversing the array using the reverse function
    array = array.join(''); // joining the reversed array
    console.log(array); // displaying the reversed string in console
}
reverseString("hello"); // Initializing the function reveseString with a string "hello" parameter

//returning the fractorial of a given number


function factorialize(num) {
    var leng=1;
    for(var i = 1; i <= num; i++){
        leng *= i;
    }
    return leng;
}

factorialize(5);


// Palindrome

function palindrome(str) {

    var first = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var second = first.split('');

    var reverseSecond = second.reverse();
    reverseSecond = reverseSecond.join('');


    if(first == reverseSecond){
        return true;
    }else{
        return false;
    }
}

palindrome("_eye");
