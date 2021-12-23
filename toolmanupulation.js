let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
let sizeBoxArr = document.querySelectorAll(".size-box");


pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        //second click
        //options below
        options[0].style.display = "flex";
    } else {

        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "pencil";
        tool.strokeStyle = "lightpink";
        tool.lineWidth = pencilSize;
    }
})

eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        //second click
        //options below
        options[1].style.display = "flex";
    } else {
        // eraser.style.border = "1px solid red";
        cTool = "eraser";
        tool.strokeStyle = "white";

        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
      
        tool.lineWidth = eraserSize;

    }
})


rect.addEventListener("click", function (e) {

    if (cTool == "rect") {
        //second click
        //options below
        options[2].style.display = "flex";
    } else {

        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "rect";
        tool.strokeStyle = "lightpink";
        tool.lineWidth = rectSize;
    }
})

line.addEventListener("click", function (e) {

    if (cTool == "line") {
        //second click
        //options below
        options[3].style.display = "flex";
    } else {

        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "line";
        tool.strokeStyle = "lightpink";
        tool.lineWidth = lineSize;
    }
})





redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
})




let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;



sizeBoxArr[0].addEventListener("click", function (e) {
    //actual event occur -> target
    let elems = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstclass = alltheClasses[0];
    let test = elems.includes(firstclass);

    if (test) {
        if (firstclass == "size1") {
            pencilSize = 5;
        } else if (firstclass == "size2") {
            pencilSize = 10;
        } else if (firstclass == "size3") {
            pencilSize = 15;
        } else if (firstclass == "size4") {
            pencilSize = 20;
        }

    }
    tool.lineWidth = pencilSize;
})

sizeBoxArr[1].addEventListener("click", function (e) {
    //actual event occur -> target
    let elems = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstclass = alltheClasses[0];
    let test = elems.includes(firstclass);

    if (test) {
        if (firstclass == "size1") {
            eraserSize = 5;
        } else if (firstclass == "size2") {
            eraserSize = 10;
        } else if (firstclass == "size3") {
            eraserSize = 15;
        } else if (firstclass == "size4") {
            eraserSize = 20;
        }

    }

    tool.lineWidth = eraserSize;
})

sizeBoxArr[2].addEventListener("click", function (e) {
    //actual event occur -> target
    let elems = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstclass = alltheClasses[0];
    let test = elems.includes(firstclass);

    if (test) {
        if (firstclass == "size1") {
            rectSize = 5;
        } else if (firstclass == "size2") {
            rectSize = 5;
        } else if (firstclass == "size3") {
            rectSize = 5;
        } else if (firstclass == "size4") {
            rectSize = 5;
        }

    }
    tool.lineWidth = rectSize;
})

sizeBoxArr[3].addEventListener("click", function (e) {
    //actual event occur -> target
    let elems = ["size1", "size2", "size3", "size4"];
    let alltheClasses = e.target.classList;
    let firstclass = alltheClasses[0];
    let test = elems.includes(firstclass);

    if (test) {
        if (firstclass == "size1") {
            lineSize = 5;
        } else if (firstclass == "size2") {
            lineSize = 5;
        } else if (firstclass == "size3") {
            lineSize = 5;
        } else if (firstclass == "size4") {
            lineSize = 5;
        }

    }
    tool.lineWidth = lineSize;
})



