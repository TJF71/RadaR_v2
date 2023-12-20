
// get the user input to check
function getValues() {
    // get the text out of the input and assign it to a variable
    let message = document.getElementById('userInput').value;


      let regex = /[^a-zA-Z0-9]/g;
      let cleanInput = message.replaceAll(regex, '');


    // validate input and make sure its not empty
    if (cleanInput.length == 0) {

        Swal.fire(
            {
                backdrop: 'error',
                backdrop: false,
                text: 'Please enter a string to check'   
            }
        );

    } else {

        // pass the user input to reverseMessage function and assign it's return to a variable
        let revMsg = reverseMessage(cleanInput);

        //send the message adn reverse message to checkForPalindrome
        let palindrome = checkForPalindrome(cleanInput, revMsg);

        // give th results to display messare
        displayResults(cleanInput, revMsg, palindrome);


    }
}

// reverse the string
function reverseMessage(input) {

    // define return
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    return output;

}


// check to see if the strings match

function checkForPalindrome(msg, revmsg) {
    if (msg == revmsg) {
        return true;
    } else {
        return false;
    }

    // JV notes
    // let reversed = reverseMessage(cleanInput); JV
    // let isPalindrom = reversed == cleanInput; JV  <- returns boolean
    // 
    // let results = {
    // reversedMessage: reversed,
    // isPalindrome: isPanindrome
    // };
    // return results;  <- return object with mulitple values.  Can only return one item from function
    // so if you want more you can use an object
}

function displayResults(msgEntered, revMsg, PalTrueFalse) {

    // document.getElementById('msg').textContent = `Your message is ${msgEntered}`;
    // document.getElementById('msg').textContent = `Your reversed message is ${revMsg}`;

    if (PalTrueFalse == true) {
    document.getElementById('msg').textContent = `Your message of ${msgEntered} is a palindrome!`;
} else {
    document.getElementById('msg').textContent = 'Sorry, but your message is not a palindrome';
}




    document.getElementById('alert').classList.remove('invisible');
    // document.getElementById('alert').classList.remove('invisible', 'alert-danger, 'alert-success');  <- could remove all alerts at once
    // document.getElementById('alert').classList.add( 'alert-danger');  <- add the alert you want

}

