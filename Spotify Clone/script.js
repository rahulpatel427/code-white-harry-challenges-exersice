console.log("jay ma renuka....")

async function getSongs() { // ek async function banaya taki ander await kam kr ske

  let a = await fetch("http://127.0.0.1:5500/Spotify%20Clone/Songs/")
  let response = await a.text(); /// await lika or a.text() se ise string me convert kr liya taki use kr ske. or .text ki jagah pr .json() bhi likh skte he.
  console.log(response);

  let div = document.createElement("div")
  div.innerHTML = response

  let as = div.getElementsByTagName("a");
  // console.log(as)
  let songs = []

  for (let index = 0; index < as.length; index++) {
    const element = as[index];

    if (element.href.endsWith(".mp3")) {
      songs.push(element.href)
    }
  }
  return songs
}

async function main() {
  // get the list of all the songs
  let song = await getSongs()
  console.log(song)

  // play the first songs
  var audio = new Audio(song[0])
  audio.play();
}


main()