
var myBtn = document.getElementsByClassName("fa fa-trash");

var dots = document.getElementsByClassName("fa fa-ellipsis-h");

var span = document.getElementsByClassName("close")[0];

myBtn.onclick = function() {
    fa fa-trash.style.display = "block";
}

dots.onclick = function() {
	fa fa-ellipsis-h.style.display = "block";
}

span.onclick = function() {
    myBtn.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myBtn) {
        fa fa-trash.style.display = "none";
    }
}