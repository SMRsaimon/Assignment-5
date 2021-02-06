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

                <div class="food-wrapper">
                 
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