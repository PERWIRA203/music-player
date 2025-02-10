const content = [{
    img: "picture/bad.jpg",
    title: "Lady Gaga - Bad Romanced",
    music: "music/Lady Gaga - Bad Romance (Lyrics).mp3",
},
{
    img: "picture/locked.jpg",
    title: "Bruno Mars - Locked Out Of Heaven",
    music: "music/Bruno Mars - Locked Out Of Heaven.mp3",
},
{
    img: "picture/wolves.jpg",
    title: "Selena Gomez Marshmello - Wolves",
    music: "music/Selena Gomez Marshmello - Wolves (Lyrics).mp3",
},
{
    img: "picture/lovers_what.jpg",
    title: "Maroon 5 - What Lovers Do feat. SZA",
    music: "music/Maroon 5 - What Lovers Do (Lyrics) feat. SZA.mp3",
},
{
    img: "picture/lavida.jpg",
    title: "Coldplay - Viva la Vida",
    music: "music/Coldplay - Viva la Vida (Lyrics).mp3",
},
{
    img: "picture/brothers.jpg",
    title: "Avicii - Hey Brother",
    music: "music/Avicii - Hey Brother (Lyrics).mp3",
},
];
const main = document.getElementById("main");


main.innerHTML = content.map(music => 
`
    <div class="container">
            <div class="image">
                <img src="${music.img}" alt="">
            </div>
            <div class="title">
                <h5>${music.title}</h5>
            </div>
            <div class="loader">
                <audio controls class="audio-player" id="player">
                    <source src="${music.music}" type="audio/mp3">
                  </audio>
            </div>
    </div>
`).join("");

main.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const container = event.target.closest(".container");
        const audioPlayer = container.querySelector(".audio-player");
        audioPlayer.play();
    }
});
const audioPlayers = document.querySelectorAll("#player");
let currentIndex = 0;

audioPlayers.forEach(player => {
    player.addEventListener("play", function() {
        audioPlayers.forEach(otherplayer => {
            if(otherplayer !== player){
                otherplayer.pause();
                otherplayer.currentTime = 0;
                console.log("urutan ke : ", player)
                console.log("durasi maksimum : ", player.duration)
                player.addEventListener("ended", function(){
                    console.log("music berakhir")
                })
            } 
        })
    })
});

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowRight") {
        audioPlayers[currentIndex].pause();
        audioPlayers[currentIndex].currentTime = 0;
        currentIndex = (currentIndex + 1) % audioPlayers.length;
        audioPlayers[currentIndex].play();
    } else if (event.code === "ArrowLeft") {
        audioPlayers[currentIndex].pause();
        audioPlayers[currentIndex].currentTime = 0;
        currentIndex = (currentIndex - 1 + audioPlayers.length) % audioPlayers.length;
        audioPlayers[currentIndex].play();
    }
});

