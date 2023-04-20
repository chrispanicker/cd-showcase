	// SETTING ALL VARIABLES

    var isMouseDown=false;
    var isFingerDown=false;
    var canvas = document.createElement('canvas');
    var body = document.getElementsByTagName("body")[0];
    var ctx = canvas.getContext('2d');
    var linesArray = [];
    let currentSize = 20;
    var currentColor = "rgb(0,0,0)";
    var currentBg = "transparent";

    let drawCanvas = document.querySelector("#drawCanvas");
    let drawCanvasDiv = document.querySelector("#drawCanvas div");

    // INITIAL LAUNCH
    let drawButtons = document.querySelectorAll("#drawButton");
    let draw = document.querySelector("#draw");

    for(let i=0; i<drawButtons.length; i++){
        drawButton[i].addEventListener("click", ()=>{
            createCanvas();
            draw.classList.toggle("hide")
            drawCanvas.classList.toggle("hide")
            drawCanvas.classList.toggle("drawShow")
            drawCanvas.scrollIntoView();
    
            let menu = document.querySelector("#mobileMenu")
            menu.classList.toggle("mobileHide");

        });        
    }


    // BUTTON EVENT HANDLERS

    document.getElementById('canvasUpdate').addEventListener('click', function() {
        createCanvas();
    });
    document.getElementById('controlSize').addEventListener('change', function() {
        currentSize = this.value;
        document.getElementById("showSize").innerHTML = this.value;
    });
    document.getElementById('closeDraw').addEventListener('click', function() {
        drawCanvas.classList.toggle("hide");
        drawCanvas.classList.toggle("drawShow");
        draw.classList.toggle("hide");
    });

    document.getElementById('saveToImage').addEventListener('click', function() {
        setTimeout(()=>{createCanvas();},100);
}, false);

    // REDRAW 

    function redraw() {
            for (var i = 1; i < linesArray.length; i++) {
                ctx.beginPath();
                ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y);
                ctx.lineWidth  = linesArray[i].size;
                ctx.lineCap = "round";
                ctx.lineTo(linesArray[i].x, linesArray[i].y);
                ctx.stroke();
            }
    }

    // DRAWING EVENT HANDLERS

    canvas.addEventListener('mousedown', function() {mousedown(canvas, event);});
    canvas.addEventListener('mousemove',function() {mousemove(canvas, event);});
    canvas.addEventListener('touchstart', function(e) {e.preventDefault(); e.stopPropagation(); touchStart(canvas, event);});
    canvas.addEventListener('touchmove',function(e) {e.preventDefault(); e.stopPropagation(); touchMove(canvas, event);});
    canvas.addEventListener('mouseup',mouseup);

    // CREATE CANVAS

    function createCanvas() {
        let imgSize = document.querySelector(".writtenTitle img").getBoundingClientRect();
        console.log(imgSize)
        canvas.id = "canvas";
        canvas.width = imgSize.width;
        canvas.height = imgSize.height;
        // setInterval(()=>{
        //     if(imgSize.width!=canvas.width || imgSize.height!=canvas.height){
        //         canvas.width = imgSize.width;
        //         canvas.height = imgSize.height;
        //     }else{
        //     }
        // }, 100)

        canvas.style.zIndex = 0;
        canvas.style.position = "absolute";
        // canvas.style.top=50;
        // canvas.style.right=10;
        ctx.fillStyle = currentBg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawCanvas.appendChild(canvas);
    }

    // DOWNLOAD CANVAS

    function downloadCanvas(link, canvas, filename) {
        link.href = document.getElementById(canvas).toDataURL();
        link.download = filename;
    }

    // SAVE FUNCTION

    function save() {
        localStorage.removeItem("savedCanvas");
        localStorage.setItem("savedCanvas", JSON.stringify(linesArray));
        console.log("Saved canvas!");
    }

    // LOAD FUNCTION

    function load() {
        if (localStorage.getItem("savedCanvas") != null) {
            linesArray = JSON.parse(localStorage.savedCanvas);
            var lines = JSON.parse(localStorage.getItem("savedCanvas"));
            for (var i = 1; i < lines.length; i++) {
                ctx.beginPath();
                ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y);
                ctx.lineWidth  = linesArray[i].size;
                ctx.lineCap = "round";
                ctx.lineTo(linesArray[i].x, linesArray[i].y);
                ctx.stroke();
            }
            console.log("Canvas loaded.");
        }
        else {
            console.log("No canvas in memory!");
        }
    }

    // ERASER HANDLING

    function eraser() {
        currentSize = 50;
    }

    // GET MOUSE POSITION

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function getTouchPos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.touches[0].clientX - rect.left,
            y: evt.touches[0].clientY - rect.top
        };
    }

    // ON MOUSE DOWN

    function mousedown(canvas, evt) {
        var mousePos = getMousePos(canvas, evt);
        isMouseDown=true
        var currentPosition = getMousePos(canvas, evt);
        ctx.moveTo(currentPosition.x, currentPosition.y)
        ctx.beginPath();
        ctx.lineWidth  = currentSize;
        ctx.lineCap = "round";
    }

    function touchStart(canvas, evt) {
        var touchPos = getTouchPos(canvas, evt);
        isFingerDown=true
        var currentPosition = getTouchPos(canvas, evt);
        ctx.moveTo(currentPosition.x, currentPosition.y)
        ctx.beginPath();
        ctx.lineWidth  = currentSize;
        ctx.lineCap = "round";
    }

    // ON MOUSE MOVE

    function mousemove(canvas, evt) {
        var currentPosition = getMousePos(canvas, evt);
        if(isMouseDown){
            ctx.lineTo(currentPosition.x, currentPosition.y)
            ctx.stroke();
            store(currentPosition.x, currentPosition.y, currentSize, currentColor);
        }
    }

    function touchMove(canvas, evt) {
        var currentPosition = getTouchPos(canvas, evt);
        if(isFingerDown){
            ctx.lineTo(currentPosition.x, currentPosition.y)
            ctx.stroke();
            store(currentPosition.x, currentPosition.y, currentSize, currentColor);
        }
    }

    // STORE DATA

    function store(x, y, s) {
        var line = {
            "x": x,
            "y": y,
            "size": s,
        }
        linesArray.push(line);
    }

    // ON MOUSE UP

    function mouseup() {
        isMouseDown=false
        store()
    }