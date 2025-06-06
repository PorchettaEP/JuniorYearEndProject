
let data,songs;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://e152c473-5217-4491-a6d1-2a264147c932-00-zli62kd77q4u.picard.replit.dev";
  let route= "/songs"
  songs = $.getJSON(link+route).responseJSON;

  generateCards(songs);

}

function generateCards(songs){
  // 1- getelement output
  let output = document.getElementById("output");
  let build ="";
  
  for(let i=0; i<songs.length; i++){
    let song = songs[i]
    build += `<div class="card" >`
    build += `<h3> Song Name </h3>`;
    build += `<p> ${song.Name}</p>`;
    build += `<div> Album </div>`;
    build += `<div2> ${song.Title} </div2>`;
    build += `<div> Composer </div>`;
    build += `<div2> ${song.Composer}</div2>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  output.innerHTML = build;

}

