var modal = document.getElementsByClassName("modal")[0];
var modal1 = document.getElementsByClassName("modal")[1];

var btn = document.getElementsByClassName("topButtons")[1];
var btn1 = document.getElementsByClassName("topButtons")[0];

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modal1.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

