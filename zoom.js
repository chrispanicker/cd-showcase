let img = document.querySelector("#mapImg");
let zoom = document.querySelector("#zoomMe");

img.addEventListener("click", ()=>{
	zoom.classList.toggle("hide");
	zoom.classList.toggle("show");
})

zoom.addEventListener("click", ()=>{
	zoom.classList.toggle("hide");
	zoom.classList.toggle("show");
})