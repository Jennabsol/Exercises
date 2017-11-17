$(document).ready(function () {
    const outputEl = $("#all-my-songs")
    $.ajax({
        "url": "songs.json",
        "method": "GET"
    }).then(

        function (songData) {
            let songsHtmlRep = ""
            songData.songs.forEach(song => {
                songsHtmlRep += `
               <song>
                <h1>${song.title}</h1>
                Performed by ${song.artist} on the album
                ${song.album}
               </song>`
            })
            outputEl.html(songsHtmlRep)
        }
        )
}
)