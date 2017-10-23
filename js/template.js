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

//finding the longest word in the sentence

function findLongestWord(str) {

    var sentence = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < sentence.length; i++) {
        if (longest < sentence[i].length) {
            longest = sentence[i].length;
            word = sentence[i];
        }
    }
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Changing the first letter of every word in a sentence to Captial letter and the rest to lower letter

function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(titleCase("I'm a little tea pot"));