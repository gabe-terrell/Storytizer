var defaults = [N, N, A, V, P, C, S, Q, Z];
var headers = ["Placeholder", "[Noun]", "[A]", "[V]", "[P]", "Character", "[Spice]",
               "[Quality]", "Specify Placeholder Here"];

function toString(A) {
    return A.toString().replace(/,/g, ", ");
}

function replaceTemplates() {
    poem = $("#template").val()
    for (i = 1; i <= 8; i++) {
        // Define IDs of HTML tags
        regID = '#r' + i;
        wordlistID = '#l' + i;

        // Grab user defined parameters
        regex = $(regID).val();
        wordlist = $(wordlistID).val();
        if (!(/\s+/g.test(regex)) && regex != "" && wordlist != "") {
            // Save user defined parameters to local storage
            // TODO: Implement saving to local storage
            // localStorage[regID] = regex
            // localStorage[wordlistID] = wordlist;

            // Convert wordlist into an array
            wordlist = wordlist.split(", ")

            // Replace instances of regex with random words from wordlist
            c = 0;
            while(poem.indexOf(regex) != -1 && c < 50) {
                console.log(poem);
                c++;
                console.log(regID + " -- regex: " + regex + " + " + poem + " --> " + poem.indexOf(regex));
                poem = poem.replace(regex, wordlist[Math.floor(Math.random()*wordlist.length)]);
            }
        }
    }
    $("#poem").val(poem);
}

$("document").ready(function() {
    $("#template").val(template);
    for (i = 1; i <= 8; i++) {
        // Define IDs of HTML tags
        regID = '#r' + i;
        wordlistID = '#l' + i;

        $(regID).val(headers[i]);
        $(wordlistID).val(toString(defaults[i]));

        // TODO: Implement custom template saving on localstorage

        // If previous parameters have been defined, reload them
        // if (regID in localStorage && wordlistID in localStorage) {
        //  if (localStorage[regID] != undefined && localStorage[wordlistID] != undefined &&
        //      localStorage[regID] != "undefined" && localStorage[wordlistID] != "undefined") {
        //      $(regID).val(localStorage[regID]);
        //      if (/\s+/g.test(localStorage[wordlistID])) {
        //      }
        //      else {
        //          $(wordlistID).val(localStorage[wordlistID]);
        //      }
        //  }
        // }
    }
});