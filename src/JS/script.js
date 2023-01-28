const music = new Audio('audio/1.m4a');
// music.play();


// Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
// })






let playPause = document.getElementById('masterControl');

playPause.onclick = function(){
    if (music.paused || music.currentTime <= 0) {
        music.play();
        playPause.classList.add('fa-pause');
        playPause.classList.remove('fa-play');
    } else {
        music.pause();
        playPause.classList.add('fa-play');
        playPause.classList.remove('fa-pause');
    }
}

let idNum = 0;

Array.from(document.getElementsByClassName('col-sm')).forEach((e) => {
    e.addEventListener('click', (el) => {
        idNum = el.target.id;
        music.src = `audio/${idNum}.m4a`;
        music.play();
        playPause.classList.add('fa-pause');
        playPause.classList.remove('fa-play');
    })
})