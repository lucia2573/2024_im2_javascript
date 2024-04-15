/*
* 07.b - Progress
* Du hast ein Audiofile, welches einfach über einen Knopf (#play)
* gestartet bzw. pausiert werden soll. Natürlich soll sich auch der
* Titel des Buttons entsprechend verändern.
*
* Ausserdem möchtest du das Ganze visuell etwas spannender gestalten.
* Deshalb hast du zwei Overlays (#overlay1 und #overlay2) in verschiedenen
* Farben. Ein Overlay (#overlay1) soll prozentual zur abgelaufenen Zeit des
* Audios seine width verändern. Der zweite Overlay (#overlay2) soll
* das Ganze doppelt so schnell machen.
* */

const control = document.querySelector('#control');
const audio = document.querySelector('#audio');
const overlay1 = document.querySelector('#overlay1');
const overlay2 = document.querySelector('#overlay2');
const main = document.querySelector('main');

control.addEventListener('click', function (e) {
    if (control.innerText === 'play') {
        control.innerText = 'pause';
        audio.play();
    } else {
        control.innerText = 'play';
        audio.pause();
    }
})

audio.addEventListener('timeupdate', function (e) {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percent =  (currentTime / duration) * 100;
    overlay1.style.width = `${percent}%`;
    overlay2.style.width = `${percent * 2}%`
})
