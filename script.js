
//clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
//display values
function display(value) {
    document.getElementById("result").value += value;
}

//evalutaes the expression and returns results

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}