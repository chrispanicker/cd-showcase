let cd = document.querySelector("#cd");
let mainTitle = document.querySelector("#mainTitle")
let fullTitle  = `COMMUNICATION\xa0DESIGN`;

mainTitle.addEventListener("mouseenter", () =>{
	if(cd.innerHTML==="CD"){
		let x="";
		typeStart(x);	
	}else{
		let x=cd.innerHTML;
		typeStart(x);	
	}

})


function typeStart(x){
	let index=x.length;

	let type = setInterval(()=>{
		x = x + `${fullTitle[index]}`;
		cd.innerHTML= x;
		if(x==="COMMUNICATION\xa0DESIGN"){
			clearInterval(type);
		}
		index++
	}, 70)

	mainTitle.addEventListener("mouseleave", () => {
		clearInterval(type)
		cd.innerHTML="CD"
	})
}


