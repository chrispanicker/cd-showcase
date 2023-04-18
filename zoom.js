let img = document.querySelector("#mapImg");
let zoom = document.querySelector("#zoomMe");
console.log(img, zoom)
img.addEventListener("click", ()=>{
	console.log("zoom in")
	zoom.classList.toggle("hide");
})

zoom.addEventListener("click", ()=>{
	console.log("zoom out")
	zoom.classList.toggle("hide");
})