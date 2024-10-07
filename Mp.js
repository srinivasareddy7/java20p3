const songs = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const playButton = document.getElementById('play');

function loadSong(index) {
    currentSongIndex = index;
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    audio.load();
    audio.play();
    playButton.textContent = "||"; // Change play button to pause
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "||"; // Change to pause symbol
    } else {
        audio.pause();
        playButton.textContent = "▶"; // Change to play symbol
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

// Load the first song by default
loadSong(currentSongIndex);
