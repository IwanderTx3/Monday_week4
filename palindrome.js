var word = document.getElementById("nameTextBox")
var btn = document.getElementById("clickMe")
var h1 = document.getElementById("heading1")
//var drow = ""
//var palindrome = ""

function reverseWord(word)
{
    var drow=""
    for (var i = word.length-1; i>=0 ; i--)
    {
        drow +=word[i];
    }
    return drow;
}

function compareWordDrow(word,drow){
    var palindrome = "Is NOT a palindrome"
    if (word.ignorecase == drow.ignorecase) {
        palindrome = "Is a palindrome"
    }
    return palindrome;
}


btn.addEventListener('click',function(){
    var userinput = word.value 
    console.log (userinput)
    var reveresed = reverseWord(userinput);
    var palindrome =compareWordDrow(userinput,reveresed);
    console.log (reveresed, palindrome)
    h1.innerHTML= userinput + " " + palindrome
}

)