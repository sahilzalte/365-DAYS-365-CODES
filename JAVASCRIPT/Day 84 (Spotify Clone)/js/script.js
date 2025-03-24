console.log("This Media Player is Developed by Sahil")
let currentSong = new Audio()
let songs
let currFolder

function secondsToMinutes(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00"
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}



async function getSongs(folder) {
    currFolder = folder
    let a = await fetch(`/${folder}/`)

    let response = await a.text()

    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")

    songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index]
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }

    }

    // Show all The Songs in the playlist 
    let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUl.innerHTML = ""

    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>


        <img class="invert" src="img/music.svg" alt="">
        <div class="info"> 
            <div>${song.replaceAll("%20", " ")}</div>
            <div>Sahil</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="img/play1.svg" alt="">
        </div>
    </li>`
    }

    // Attach an event listener to each song

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {

        currentSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}


async function displayAlbums() {
    let a = await fetch("/songs/")

    let response = await a.text()


    let div = document.createElement("div")
    div.innerHTML = response

    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];


        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json()
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <img src="img/play.svg" alt="">
                        </div>
                        <img src="/songs/${folder}/cover.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.Description}</p>
                    </div>`
        }
    }


    // Load the Playlist whenever card is clicked

    Array.from(document.getElementsByClassName("card")).forEach((e) => {
        e.addEventListener("click", async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])
        })
    })
}



async function main() {
    // Get the List of All Songs 
    await getSongs("songs/Hindi")
    playMusic(songs[0], true)

    // Display all albums on the page

    displayAlbums()
    // Attach an event listener to play ,next and previous button

    play.addEventListener("click", () => {

        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play.svg"
        }

    })

    // Play the first song
    var audio = new Audio(songs[0])
    // audio.play()
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration
    })


    // Listen for time update 

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutes(currentSong.currentTime)} / ${secondsToMinutes(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    //  Add and event listener to the seekbar

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an Event listener for hamburger button

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an Event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })


    // Add an Event listener for previous button
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index + 1])
        }
    })
    // Add an Event listener for next button

    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length - 1) {
            playMusic(songs[index + 1])
        }

    })

    // Add an event to volume button

    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {

        currentSong.volume = parseInt(e.target.value) / 100
    })

    // Add Event listener to mute the track

    document.querySelector(".volume>img").addEventListener("click", e => {


        if (e.target.src.includes("img/volume.svg")) {
            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
            currentSong.volume = 0
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0
        }
        else {
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10

        }
    })


}

main()  