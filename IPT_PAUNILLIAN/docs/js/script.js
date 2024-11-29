const typingElement = document.getElementById("typing");
const text = "GRAC3.4UL";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}

window.onload = typeEffect;