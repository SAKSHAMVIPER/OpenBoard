let canvasBoard = document.querySelector("canvas");
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
let tool = canvasBoard.getContext("2d");
// tool.strokeStyle = "lightpink";
let cTool = "pencil";
tool.strokeStyle = "lightpink";
