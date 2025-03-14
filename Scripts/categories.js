// p1
const addCategories =()=>{
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then(res=>res.json())
  .then(data=>{
      displayBar(data.categories)});
}

// id show
const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) =>{
      const clickedButton =document.getElementById(`${id}`)
      clickedButton.classList.add("bg-red-500", "text-white")
      console.log(clickedButton)
      displayVideo(data.category)})
   }

// p1
const displayBar=(bar)=>{
  for(const cat of bar){
      console.log(cat);
  
  const putCategories = document.getElementById("categories-container");
  
  const div = document.createElement("div");
  div.innerHTML=`
  <button id="${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-soft hover:bg-red-500 hover:text-white">${cat.category || cat.name}</button>
  `
  putCategories.appendChild(div);
  }
}

// p2
const videoLoad = ()=>{
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then(response=>response.json())
  .then(dataAll=>displayVideo(dataAll.videos))
}
// p2
const displayVideo =(videos)=>{
  const videoShow =document.getElementById("video-container");
  // for id
  videoShow.innerHTML ="";

  // if videos zero
  if(videos.length==0){
    videoShow.innerHTML =`
    <div class="col-span-full flex flex-col items-center text-center py-10 ">
          <img src="assets/Icon.png" alt="">
          <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
         </div>
    `
    return;
  }
  
  for(let show of videos){
      console.log(show);

  const div = document.createElement("div");
  div.innerHTML=`
 <div class="card bg-base-100">
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
// videoLoad();

addCategories();