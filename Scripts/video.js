
const videoLoad = ()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response=>response.json())
    .then(dataAll=>displayVideo(dataAll.videos))
}
const displayVideo =(videos)=>{
    for(let show of videos){
        console.log(show);

    const videoShow =document.getElementById("video-container");
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${show.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${show.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>
    `   
    videoShow.appendChild(div);
    }
}
videoLoad();