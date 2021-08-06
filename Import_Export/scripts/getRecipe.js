async function showRandom(){

    // INPUT AND BUTTON DISABLED ON THIS PAGE
    // document.getElementById("userInput").disabled = true;
    // let usersearch = document.getElementById("userInput").value;
    // console.log(usersearch);
    
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    let data = await res.json();
    let foodDataDiv = document.getElementById("data");
    foodDataDiv.innerHTML = "";

    data.meals.forEach(({strMeal, strMealThumb, strInstructions})=>{
        let singleProductDiv = document.createElement("div");
        singleProductDiv.setAttribute("id","prodDiv")
        let nameMeal = document.createElement("h4");
        let descriptionMeal = document.createElement("small");
        descriptionMeal.setAttribute("id","prodDescription")
        descriptionMeal.innerHTML = strInstructions;
        nameMeal.innerHTML = strMeal;

        let descriptionDiv = document.createElement("div");
        let imgMeal = document.createElement("img");
        imgMeal.src = strMealThumb;
        imgMeal.style.height="40%";
        imgMeal.style.width = "100%";

        nameMeal.style.height = "9%"
        nameMeal.style.margin = "0px"


        descriptionDiv.append(descriptionMeal);
        descriptionDiv.setAttribute("id","descDiv")
        
        singleProductDiv.append(imgMeal,nameMeal,descriptionDiv);
        foodDataDiv.append(singleProductDiv);
    })
}
showRandom();