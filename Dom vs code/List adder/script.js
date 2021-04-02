var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     if(input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
    
// })

// input.addEventListener("keypress", function(event) {
//     if (input.value.length > 0 && event.which==13) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
    
// })

// Shortend code (DRY RULE)

function inputlength() {
    return input.value.length; // get length of input
}

function createlist() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); // creates and inserts a list element on list
    var btndel = document.createElement("button");
    btndel.classList.add("delete");
    btndel.textContent = "DELETE";
    li.appendChild(btndel);
    ul.appendChild(li);
    input.value = "";
        
}

function addlistonclick() {  // adds list element on click
    if (inputlength() > 0) {
        createlist();
        
    }
}


function addlistonkeypress(event) { // adds list on keypress
    if(inputlength() > 0 && event.keycode == 13 ){
        createlist();
    }
}

function deleteAfterClick(event) { //delets the list element after click
    if(event.target.classList.contains("delete")){ // selects the target class
        event.target.closest("li").remove(); // selects and removes the  closest li ansestor
    }
}


button.addEventListener("click", addlistonclick); // adds functon of addlist on click

input.addEventListener("keypress", addlistonkeypress); // adds function of addlist 

ul.addEventListener("click", deleteAfterClick);



