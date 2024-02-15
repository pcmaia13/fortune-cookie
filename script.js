function imgClick() {

const image = document.getElementById('image');

if (image.src.match("/images/cookie.png")) {
    image.src = "/images/cookie2.png";
} else {
    image.src = "/images/cookie.png";
}

const mensages = ["Wanting something bigger in your life doesn't mean you're dissatisfied with what you have.", "I just have to thank each and every one of the challenges that brought me here, that made me grow and learn so many things!", "It's important to be grateful for today without ever giving up on tomorrow!"];
const ramdomMensage = mensages[Math.floor(Math.random() * mensages.length)]
 
document.getElementById('textHere').innerHTML = ramdomMensage;

}




