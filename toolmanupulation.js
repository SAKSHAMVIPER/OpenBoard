
        let pencil = document.querySelector("#pencil");
        let eraser = document.querySelector("#eraser");
        let rectangle = document.querySelector("#rect");
        let line = document.querySelector("#line");
        let options = document.querySelectorAll(".size-box");


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
            }
        })

        eraser.addEventListener("click", function (e) {
            if (cTool == "eraser") {
                //second click
                //options below
                options[1].style.display = "flex";
            } else {
                // eraser.style.border = "1px solid red";

                for (let i = 0; i < options.length; i++) {
                    options[i].style.display = "none";
                }
                cTool = "eraser";
                tool.strokeStyle = "white";

            }
        })


        rectangle.addEventListener("click", function (e) {

            if (cTool == "rect") {
                //second click
                //options below
                options[2].style.display = "flex";
            } else {

                for (let i = 0; i < options.length; i++) {
                    options[i].style.display = "none";
                }
                cTool = "rect";
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
            }
        })




        let redColor = document.querySelector(".red");
        let greenColor = document.querySelector(".green");
        let blueColor = document.querySelector(".blue");
        redColor.addEventListener("click", function () {
            tool.strokeStyle = "red";
        })
        greenColor.addEventListener("click", function () {
            tool.strokeStyle = "green";
        })
        blueColor.addEventListener("click", function () {
            tool.strokeStyle = "blue";
        })