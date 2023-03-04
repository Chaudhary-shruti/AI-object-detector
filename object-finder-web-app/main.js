img=""
function preload(){

}
function setup(){
canvas=createCanvas(400,350)
canvas.center()
canvas.position(470,350)
video=createCapture(VIDEO)
video.size(350,350)
video.hide()
}
function draw(){
    image(video, 0, 0, 640, 420)
}