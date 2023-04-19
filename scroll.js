let sched = document.querySelector("#guide");
let schedButtons = document.querySelectorAll("#schedButton")

let about = document.querySelector("#about");
let aboutButtons = document.querySelectorAll("#aboutButton")

let map = document.querySelector("#map");
let mapButtons = document.querySelectorAll("#mapButton")

let menu = document.querySelector("#mobileMenu")
let drawCanvas = document.querySelector("#drawCanvas")

for(let i=0; i<schedButton.length; i++){
	schedButtons[i].addEventListener("click", ()=>{
		sched.scrollIntoView();
		menu.classList.toggle("mobileHide");
		
	})
	
	aboutButtons[i].addEventListener("click", ()=>{
		about.scrollIntoView();
		menu.classList.toggle("mobileHide");
	})
	
	mapButtons[i].addEventListener("click", ()=>{
		map.scrollIntoView();
		menu.classList.toggle("mobileHide");
	})
}



document.addEventListener("scroll", (e)=>{
	let scroll = window.scrollY;
	let img = document.querySelector(".writtenTitle	img");
	if(scroll/500 <5){
		img.style.filter = `blur(${scroll/500}vh)`;
	}
})