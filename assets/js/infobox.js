var infoBox = document.getElementById('info-dialog');
var btn = document.getElementById("info-btn");
btn.onclick = function() {
    infoBox.style.display = "block";
};
window.onclick = function(event) {
    if (event.target == infoBox) {
        infoBox.style.display = "none";
    }
};