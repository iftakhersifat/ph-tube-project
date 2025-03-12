const addCategories =()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}
const displayCategories=(items)=>{
    // console.log(categories);
    for(let cat of items){
        console.log(cat);
    
    const putCategories = document.getElementById("categories-container");
    const div = document.createElement("div");
    div.innerHTML=`
    <button class="btn btn-soft hover:bg-red-500 hover:text-white">${cat.categories}</button>
    `
    putCategories.appendChild(div);
    }
}
addCategories();