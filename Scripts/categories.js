const addCategories =()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>{
        displayBar(data.categories)});
}
const displayBar=(bar)=>{
    for(const cat of bar){
        console.log(cat);
    
    const putCategories = document.getElementById("categories-container");
    const div = document.createElement("div");
    div.innerHTML=`
    <button class="btn btn-soft hover:bg-red-500 hover:text-white">${cat.category || cat.name}</button>
    `
    putCategories.appendChild(div);
    }
}
addCategories();