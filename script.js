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
    img: "picture/lovers_do.jpg",
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

const audioPlayers = document.querySelectorAll(".audio-player");

audioPlayers.forEach(player => {
    player.addEventListener('play', () => {
        audioPlayers.forEach(otherPlayer => {
            if (otherPlayer !== player) {
                otherPlayer.pause();
            }            
        });
    });
});
