var infoBox = document.getElementById('info-dialog');
var btn = document.getElementById("info-btn");
var sendBtn = document.getElementById("send-btn");
btn.onclick = function() {
    infoBox.style.display = "block";
};
window.onclick = function(event) {
    if (event.target == infoBox) {
        infoBox.style.display = "none";
    }
};