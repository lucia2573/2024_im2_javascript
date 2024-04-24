// -> controls
const controlBtn = document.querySelector('#controls');
const controlText = controlBtn.querySelector('p');

// -> track container
const track01 = document.querySelector('#track_01');
const track02 = document.querySelector('#track_02');
const audio01 = track01.querySelector(`audio`);
const audio02 = track02.querySelector(`audio`);

// -> constants
const lowestSongNumber = 1;
const highestSongNumber = 24;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let audio_is_playing = false;
controlBtn.addEventListener (`click`, function (e){
    if (!audio_is_playing){
        //passiert wenn audios noch NICHT gespielt werden
        audio_is_playing = true;
        controlText.innerText = `stop`;
        let songId1 = randomNumber (1,24);
        let songId2 = randomNumber (1,24);
        audio01.src = `sound/${songId1}.mp3`;
        audio02.src = `sound/${songId1}.mp3`;
        audio01.play ();
        audio02.play ();

    }else {
        //passiert wenn audios am SPIELEN sind
        audio_is_playing = false;
        controlText.innerText = `play`;
        audio01.pause ();
        audio02.pause ();
    }
})
//lautstärke funktion
const browserWindowWidth = window.innerWidth; //Fensterbreite vom Computer
document.addEventListener('mousemove', function (e) { //Mausbewegung
    if (audio_is_playing) { //Bedingung die nur eintritt wenn Audio am spielen ist
        const mousePositionX = e.clientX; //Herausfinden wo die Maus ist auf X- Achse, Y- Achse ist egal da man Maus nur von links nach rechts bewegt
        if (browserWindowWidth / 2 >= mousePositionX) {
            audio01.volume = 1;
            const volumeAudio2 = (mousePositionX / (browserWindowWidth / 2));
            audio02.volume = volumeAudio2;
        } else {
            audio02.volume = 1
            const volumeAudio1 = ((mousePositionX - (browserWindowWidth/2)) / (browserWindowWidth - (browserWindowWidth / 2))) * ((0 - 1)) + 1;
            audio01.volume = volumeAudio1;
        }
    }
})




