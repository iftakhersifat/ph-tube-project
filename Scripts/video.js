
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
            <figure class="relative">
              <img class="w-full h-[200px] object-cover"
                src="${show.thumbnail}"
                alt="" />
                <span class="text-white bg-black px-2 py-1 rounded-lg absolute bottom-2 right-2">3hrs 56 min ago</span>
            </figure>

            <div class="flex py-5 px-0 gap-5">
                <div>
                    <div class="avatar p-0">
                        <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                          <img src="${show.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>

                  <div>
                    <h2 class="font-bold">${show.title}</h2>
                    <p class="text-gray-400 flex gap-2">${show.video_id} <img class="w-6" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""> </p>
                    <p class="text-gray-400">${show.others.views}</p>

                  </div>
            </div>
          </div>
    `   
    videoShow.appendChild(div);
    }
}
videoLoad();