let video = document.querySelector(`#video`);
let playButton = document.querySelector (`#play`);
let pauseButton = document.querySelector (`#pause`);
let muteButton = document.querySelector (`#mute`);
let unmuteButton = document.querySelector (`#unmute`);
let time = document.querySelector (`#time`);

playButton.addEventListener ("click", function (event){
    video.play ();
})


pauseButton.addEventListener ("click", function (){
    video.pause ();

})

muteButton.addEventListener ("click", function (){
    video.muted = true;
})

unmuteButton.addEventListener ("click", function (){
    video.muted = false;
})

video.addEventListener ("timeupdate", function (){

    time.innerText = Math.round(video.currentTime);
    console.log (video.currentTime);

})

