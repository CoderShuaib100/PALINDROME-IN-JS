// creating the procedure
function palindrome(string) {
    // removes any special character in the string
    
    var result = string.replace(/[^A-Z0-9]/ig,"").toLowerCase();
    // to check if it is a palindrome we split the string reverse it and join it and compare it to get the answer
    var ReversedResult = result.split("").reverse().join("");
    if (result == ReversedResult){
        document.write("it is a palindrome.");
        alert("it is a palindrome.");
    }
    else{
        document.write("it is not a palindrome.");
        alert("it is not a palindrome.");
    }
}
// taking the input from the user
var input = prompt("Enter a word to check if it is a palindrome or not.");
palindrome(input);
