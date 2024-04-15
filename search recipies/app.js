let searchBox = document.querySelector("#searchBox");
let searchBtn = document.querySelector("#searchBtn");
let box = document.querySelector(".box");
let card = document.querySelector(".card");

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let val = searchBtn.addEventListener("click" , ()=>{
    let searchVal = searchBox.value;
    searchRecipe(searchVal);
})

const imgDiv = document.createElement('div');
imgDiv.innerHTML = "";

async function searchRecipe(val){
    let res = axios.get(url + val);
    let data = await res;

    imgDiv.classList.add('recipe');
    imgDiv.innerHTML = `
    <img src= "${data.data.meals[0].strMealThumb}">
    `
    imgDiv.classList.add("imgStyle" , "container" , "card");
    card.prepend(imgDiv);

    document.querySelector("h5").innerText = data.data.meals[0].strMeal;
    // console.log(data.data.meals[0].strMeal);

    document.querySelector("p").innerText = data.data.meals[0].strInstructions;
    // console.log(data.data.meals[0].strInstructions);
}
 
let randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php"
for(let i = 1; i<=5; i++){
     getRandRecipe();
}
async function getRandRecipe(){
    let res = axios.get(randomRecipe);
    let data = await res;
    console.log(data);

    const randDiv = document.createElement('div');
    randDiv.classList.add("box" , "card");
    box.append(randDiv);

    const heading = document.createElement("h1").innerText = "Some random recipe for you";
    randDiv.append(heading);

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
    <img src= "${data.data.meals[0].strMealThumb}">
    `
    recipeDiv.classList.add("imgStyle" , "container" , "card");
    randDiv.appendChild(recipeDiv);

    const divHeading = document.createElement('h5');
    divHeading.classList.add("card-title");
    divHeading.innerHTML = data.data.meals[0].strMeal;
    randDiv.appendChild(divHeading);

    const para = document.createElement("p");
    para.classList.add("card-text" , "imgStyle");
    para.innerHTML = data.data.meals[0].strInstructions;
    randDiv.appendChild(para);
}
