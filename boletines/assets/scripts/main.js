




function changeAnimated(){
let  content = document.querySelector(".content")

if (content) {
content.classList.remove("pulse");
content.classList.remove("animated");


content.classList.add("fadeInDown");
content.classList.add("animated");
}



let  serie = document.querySelector(".serie");

serie.classList.remove("pulse");
serie.classList.remove("animated");


serie.classList.add("fadeInDown");
serie.classList.add("animated");

}


setTimeout(function(){
	changeAnimated();


},150)
	




