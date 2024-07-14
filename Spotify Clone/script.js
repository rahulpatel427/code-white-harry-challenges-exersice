let currentSong = new Audio();
async function getSongs() { // ek async function banaya taki ander await kam kr ske

  let a = await fetch("http://127.0.0.1:5500/Spotify%20Clone/playlist/")
  let response = await a.text(); // await lika or a.text() se ise string me convert kr liya taki use kr ske. or .text ki jagah pr .json() bhi likh skte he.
  // console.log("this is response"+ response);

  let div = document.createElement("div")
  div.innerHTML = response

  let as = div.getElementsByTagName("a");
  // console.log(as)
  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href)
      // yha pr [1] ka mtblt he ki / se phle or / ke bad 2 array hme milte he .. to hmne bad wala array liya he ...
    }
  }
  return songs
}

const playMusic = (track) => {
  // let audio = new Audio("/playlist/" + track)
  currentSong.src = track;
  currentSong.play();
  play.src = "img/pause.svg"();
  document.querySelector(".songinfo").innerHTML = "track";
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";


}

async function main() {

  // get the list of all the songs
  let songs = await getSongs()
  console.log("This is songs:" + songs)

  // show all the songs in the playlist
  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + ` 
          <li>
            <img class="invert" src="img/music.svg" alt="music img">
            <div class="info">
              <div>${song.replaceAll(/%20|_/g, " ")}</div>
              <div>Rahul Patel</div>
            </div>
            <div class="playnow">
              <span>Play Now</span>
              <img class="invert" src="img/play.svg" alt="">
            </div>
          </li>
        `
  }



  // Attack an event Listener to each song
  Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    })

  })

  // attack and event listner to play, next and previous
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play()
      play.src = "img/play.svg"
    }
    else {
      currentSong.pause()
      play.src = "img/pause.svg"
    }
  })

  // var audio = new Audio(songs[0])
  // audio.play();


}
main()
