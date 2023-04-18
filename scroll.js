let sched = document.querySelector("#guide");
let schedButton = document.querySelector("#schedButton")

let about = document.querySelector("#about");
let aboutButton = document.querySelector("#aboutButton")

let map = document.querySelector("#map");
let mapButton = document.querySelector("#mapButton")

let body = document.querySelector("body");

schedButton.addEventListener("click", ()=>{
	sched.scrollIntoView();
})

aboutButton.addEventListener("click", ()=>{
	about.scrollIntoView();
})

mapButton.addEventListener("click", ()=>{
	map.scrollIntoView();
})

document.addEventListener("scroll", (e)=>{
	let scroll = window.scrollY;
	let img = document.querySelector(".writtenTitle	img");
	if(scroll/500 <5){
		img.style.filter = `blur(${scroll/500}vh)`;
	}

})