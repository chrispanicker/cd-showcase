let menu = document.querySelector("#mobileMenu");
let burger = document.querySelector("#menuButton");
let allButtons = document.querySelectorAll("#mobileMenu button");

burger.addEventListener("click", ()=>{
	menu.classList.toggle("mobileHide");
})

menu.addEventListener("click", ()=>{
	menu.classList.toggle("mobileHide");
})

for(let i=0; i<allButtons.length; i++){
	allButtons[i].addEventListener("click", ()=>{
		menu.classList.toggle("mobileHide");
	})
}