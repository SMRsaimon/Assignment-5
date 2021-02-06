function $(selecetedId) {
    return document.getElementById(selecetedId);
}

const mealList = $('foodIteam');

// const notFound = document.getElementsByClassName('notFound');
$('searchButton').addEventListener('click', foodIteam);

function foodIteam() {
    const searchIteam = $('searchIteam').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchIteam}`)
        .then((response) => response.json())
        .then((data) => {
            const food = data.meals;
            let htmlTemplate = '';

            if (food) {
                food.forEach((x) => {
                    htmlTemplate += `

                <div onclick="foodDetails('${x.idMeal}')"  class="food-wrapper">
                 
               <img  src="${x.strMealThumb}" alt="food image">
               <h3>${x.strMeal}</h3>
                  
                </div>
              
               
               `;
                });
                mealList.classList.remove('notFound');
            } else {
                htmlTemplate = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }
            mealList.innerHTML = htmlTemplate;
        });
}

// click event and show food deatils

const detailsShow = $('showDetails');

function foodDetails(detailById) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailById}`)
        .then((response) => response.json())
        .then((data) => {
            const details = data.meals;

            let htmlTemplateForDetails = '';
            details.forEach((x) => {
                htmlTemplateForDetails = `
              <div class="foodDetailsContainer">
               <img  src="${x.strMealThumb}" alt="food image">
                 <h2>${x.strMeal}</h2>
                  <h3>  Ingredien :</h3>
                
                <p><span>${x.strMeasure1}</span> <span>${x.strIngredient1}</span> </p>
                  <p><span ${x.strMeasure2}</span> <span>${x.strIngredient2}</span> </p>
                    <p><span>${x.strMeasure3}</span> <span>${x.strIngredient3}</span> </p>
                      <p><span>${x.strMeasure4}</span> <span>${x.strIngredient4}</span> </p>
                        <p><span>${x.strMeasure5}</span> <span>${x.strIngredient5}</span> </p>
                          <p><span>${x.strMeasure6}</span> <span>${x.strIngredient6}</span> </p>
                            <p><span>${x.strMeasure7}</span> <span>${x.strIngredient7}</span> </p>
                              <p><span>${x.strMeasure8}</span> <span>${x.strIngredient8}</span> </p>
                                <p><span>${x.strMeasure9}</span> <span>${x.strIngredient9}</span> </p>
                                  <p><span>${x.strMeasure10}</span> <span>${x.strIngredient10}</span> </p>
                                    <p><span>${x.strMeasure11}</span> <span>${x.strIngredient11}</span> </p>
                
              </div>
               

                `;
            });

            detailsShow.innerHTML = htmlTemplateForDetails;
        });
}