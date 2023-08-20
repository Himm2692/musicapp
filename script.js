let songIndex = 0
let gif = document.getElementById('gif')
let prev = document.getElementById('previous')
let next = document.getElementById('next')
let play = document.getElementById('master play')
let progressbar = document.getElementById('progressbar')
let audio = new Audio('audio/1.mp3')
let title = document.getElementById('title')
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    { songName: " bom diggy", songIndex: [0], filePath: "audio/1.mp3" },
    { songName: " Har Har mahadev", songIndex: [1], filePath: "audio/2.mp3" },
    { songName: " Harry Porter", songIndex: [2], filePath: "audio/3.mp3" },
    { songName: " iPhone 13 ringtone", songIndex: [3], filePath: "audio/4.mp3" },
    { songName: " krishna flute", songIndex: [4], filePath: "audio/5.mp3" },
    { songName: " pokko", songIndex: [5], filePath: "audio/6.mp3" },
    { songName: " ram siya ram", songIndex: [6], filePath: "audio/7.mp3" },
    { songName: " romantic ringtone", songIndex: [7], filePath: "audio/8.mp3" },
    { songName: " santu", songIndex: [8], filePath: "audio/9.mp3" },
    { songName: " tu hai to mujhe", songIndex: [9], filePath: "audio/10.mp3" },
]


function updateSongItemPlayIcons() {
    songItemPlay.forEach((element, index) => {
        if (index === songIndex) {
            if (songIndex === 0 || audio.paused) {
                element.classList.remove('fa-pause');
                element.classList.add('fa-play');
            } else {
                element.classList.remove('fa-play');
                element.classList.add('fa-pause');
            }
        } else {
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        }
    });
}


play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        play.classList.replace('fa-play', 'fa-pause')
        gif.style.opacity = 1;

    } else {
        audio.pause()
        play.classList.replace('fa-pause', 'fa-play')
        gif.style.opacity = 0;

    }
    updateSongItemPlayIcons()
})


prev.addEventListener('click', () => {

})

audio.addEventListener('timeupdate', () => {
    progress = parseInt((audio.currentTime / audio.duration) * 100)
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audio.currentTime = progressbar.value * audio.duration / 100
})
const makeAllPlay = () => {
    songItemPlay.forEach((element) => {

        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
        play.classList.replace('fa-pause', 'fa-play')
       
        



    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id);
        
        if (songIndex === clickedIndex) {
            if (audio.paused) {
                audio.play();
                gif.style.opacity = 1;
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                play.classList.replace('fa-play', 'fa-pause')
 
            } else {
                audio.pause();
                gif.style.opacity = 0;
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
        play.classList.replace('fa-pause', 'fa-play')

            }
        } else {
            makeAllPlay();
            songIndex = clickedIndex;
            title.innerHTML = songs[songIndex].songName;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            play.classList.replace('fa-play', 'fa-pause')

            audio.src = `audio/${songIndex + 1}.mp3`;
            audio.play();
            gif.style.opacity = 1;
            audio.currentTime = 0;
        }
    });
});

function updateSongItemPlayIcons() {
    songItemPlay.forEach((element, index) => {
        if (index === songIndex ) {
            if (audio.paused) {
                element.classList.remove('fa-pause');
                element.classList.add('fa-play');
            } else {
                element.classList.remove('fa-play');
                element.classList.add('fa-pause');
            }
        } else {
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        }
    });
}





next.addEventListener('click', () => {
    if (songIndex < 9) {

        songIndex++
    
    audio.src = `audio/${songIndex + 1}.mp3`
    audio.play()
    gif.style.opacity = 1;
    title.innerHTML = songs[songIndex].songName
    
    play.classList.replace('fa-play', 'fa-pause')
    audio.currentTime = 0
    updateSongItemPlayIcons() 
          }
})
prev.addEventListener('click', () => {
    if (songIndex > 0) {

        songIndex--
    audio.src = `audio/${songIndex + 1}.mp3`
    gif.style.opacity = 1;
    title.innerHTML = songs[songIndex].songName
    audio.play()
    play.classList.replace('fa-play', 'fa-pause')
    audio.currentTime = 0
    updateSongItemPlayIcons() 
}
})
