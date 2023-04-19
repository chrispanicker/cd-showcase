let bkgImage = document.querySelector(".writtenTitle img");


let imgArray = [];
for(let i=1; i<6; i++){
	imgArray[i]= `./media/showcase${i}.png`
};

let j=1;
setInterval(()=>{
	if(j<=imgArray.length-1){
		bkgImage.src=imgArray[j];
		j++;
	}else{
		j=1;
		bkgImage.src=imgArray[j];
	}
}, 300);


document.getElementById('saveToImage').addEventListener('click', function() {
	let canvas = document.querySelector("canvas");
    let dataURL = canvas.toDataURL("image/png", 1.0);
    imgArray[imgArray.length]=`${dataURL}`
}, false);