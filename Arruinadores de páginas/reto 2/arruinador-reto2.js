
function cambiarColor(){
    document.body.style.background = "#F7BFBE";
    document.getElementsByTagName("nav")[0].style.background = "#F7BFBE";
    document.getElementsByTagName("header")[0].style.background = "#F7BFBE";
    document.getElementsByTagName("img")[1].src = "https://files.merca20.com/uploads/2018/02/WhatsApp-Image-2018-02-16-at-11.36.10-PM.jpeg";
}

var btn = document.createElement("button");
btn.textContent = "Cambiar color";
var d = document.getElementsByTagName("nav")[0];
d.appendChild(btn);
btn.onclick = cambiarColor;