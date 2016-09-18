// // Function to search the Bing Web Portal - No Needed, kept for future reference
// function searchBing(searchStr){
//     // Get the input element where we pass the search string
//     var elSearch = document.getElementById('sb_form_q');
//     // Set the value to the search string
//     elSearch.value = searchStr;

//     // Get the form that searches the web
//     var elSearchForm = document.getElementById('sb_form');
//     // Simulate clicking the submit button
//     elSearchForm.submit();
// }

// A simple function to make random string
// Source - http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeRandomString()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// Make a loop to serch the Bing web site 10 times
var index;
var maxSearchBing = 20;

var randomStringArr = [];
for(index = 0; index < maxSearchBing; index++){
    var randomStr = makeRandomString();
    randomStringArr[index]= randomStr;
}
console.log(randomStringArr);
//var openWindow = window.open('https://www.bing.com/search?q='+randomStringArr[0],'_blank');
for(index = 0; index < maxSearchBing; index++){
     window.open('http://www.bing.com/search?q='+randomStringArr[index],'_blank');
}
