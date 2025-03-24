
function loadPageContent(url) {
    document.getElementById('contentObject').data = url;
}

//Search Recipes based on filter
function searchReceipes()
{
  var mealType = getSelectedValue('mealType'); 
  var time = getSelectedValue('time');
  var url ="Recipes.html?mealType=" + mealType+"&time="+time;
  window.location.href = url;

}

//get selected value for given check box
function getSelectedValue(elementName){
    var selValue = "";
    const elem = document.getElementsByName(elementName);
    for(i=0; i<elem.length; i++){
        if (elem[i].checked){
            selValue = elem[i].value;
            break;
        }
    }
    return selValue;

}

//get query parameter value
function getQueryParamValue(paramName){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);

}


function generateTable() {  
const recipes = [ 
  { id: 1, 
   image: "ChickenMakhani.jpg", 
   text:"Chicken Makhani",
   linkPage: "ChickenMakhani.html",
   mealType: "Lunch", 
   time: "mediumTime"
  },
  { id: 2, 
   image: "HyderabadChickenDumBiryani.jpg", 
   text: "Chicken Biryani",
   linkPage: "chickenBiryaniRecipe.html",
   mealType: "Lunch", 
   time: "moreTime"
  },
  { id: 3, 
   image: "EggFriedRice.jpg", 
   text: "Egg Fried Rice<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
   mealType: "Lunch", 
   time: "lessTime"
  },
  { id: 4, 
   image: "ThaiMangoRice.jpg", 
   text:"Thai Mango Rice",
   linkPage: "ThaiMangoRiceRecipe.html",
   mealType: "Lunch", 
   time: "mediumTime"
  },
  { id: 5, 
   image: "quesadilla.jpg", 
   text:"Quesadilla",
   linkPage: "QuesadillaRecipe.html",
   mealType: "Breakfast", 
   time: "mediumTime"
  },
  { id: 6, 
   image: "veggieWrap.jpg", 
   text:"Veggie Wrap",
   linkPage: "VeggieWraps.html",
   mealType: "Breakfast", 
   time: "lessTime"
  },
  { id: 7, 
   image: "BasilPestoEggSandwich.jpg", 
   text: "Basil Pesto Egg Sandwich<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
   mealType: "Breakfast", 
   time: "moreTime"
  },
  { id: 8, 
   image: "ScrambledEggs.jpg", 
   text: "Scrambled Eggs",
   linkPage: "ScrambledEggs.html",
   mealType: "Breakfast", 
   time: "lessTime"
  },
  { id: 9, 
   image: "RiceKrispies.jpg", 
   text:"Rice Krispies",
   linkPage: "RiceKrispies.html",
   mealType: "Dessert", 
   time: "lessTime"
  },
  { id: 10, 
   image: "crepe.jpg", 
   text: "Crepes",
   linkPage: "Crepes.html",
   mealType: "Dessert", 
   time: "moreTime"
  },
  { id: 11, 
   image: "chocolateMousse.jpg", 
   text: "Chocolate Mousse",
   linkPage: "ChocolateMousseRecipe.html",
   mealType: "Dessert", 
   time: "mediumTime"
  },
  { id: 12, 
   image: "mangolassi.jpg", 
   text:"Mango Lassi<br>(Coming Soon)",
   linkPage: "MangoLassiRecipe.html",
   mealType: "Dessert", 
   time: "lessTime"
  },
  { id: 13, 
   image: "GarlicKnots.jpg", 
   text:"Garlic Knots<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
   mealType: "Dinner", 
   time: "moreTime"
  },
  { id: 14, 
   image: "CreamyAlfredoPasta.jpg", 
   text: "Creamy Alfredo Pasta",
   linkPage: "AlfredoPasta.html",
   mealType: "Dinner", 
   time: "moreTime"
  },
  { id: 15, 
   image: "garlicnoodles.jpg", 
   text: "Garlic Noodles",
   linkPage: "garlicNoodlesRecipe.html",
   mealType: "Dinner", 
   time: "mediumTime"
  },
  { id: 16, 
   image: "GuacamoleVeggieTaco.jpg", 
   text:"Guacamole Veggie Taco<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
   mealType: "Dinner", 
   time: "lessTime"
  }
 ];

 const mealType = getQueryParamValue("mealType");
 const time = getQueryParamValue("time");

 //filter for Meal Type
 filteredRecipes = recipes.filter(recipe => 
                                  { const matchesMealType = mealType ? recipe.mealType === mealType : true; 
                                   return matchesMealType;
                                  });
//filter for Time if available
if (time!="" || time!=null){
 filteredRecipes = filteredRecipes.filter(recipe => 
                                  { 
                                   const matchesTime = time ? recipe.time === time : true; 
                                   return matchesTime; 
                                  });
}


let table = '<table class="srchtable">';
table += `<th>${mealType}</th><tr>`;

// Track column count to ensure 4 items per row
let columnCount = 0;

filteredRecipes.forEach(item => {
    if (columnCount === 4) {
        table += `</tr><tr>`; // Start a new row after 4 items
        columnCount = 0; // Reset column count
    }
    table += `<td><a href="${item.linkPage}"><img src="images/${item.image}" height="200" width="300"></a><br>${item.text}</td>`;
    columnCount++;
});

table += `</tr></table>`; // Close the table

const tableContainer = document.getElementById('results-table');
tableContainer.innerHTML = table;
  
}  

function printPage() {
            window.print();
 }

function sendEmail() {
    let url = window.location.href; // Example URL
    let fullBody = `Check out this link: ${encodeURIComponent(url)}`;

    window.location.href = `mailto:?body=${fullBody}`;
}

//Javascript for Rating
const stars = document.querySelectorAll(".star");
let selectedRating = 0;

// Event listeners for stars
stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
        if (selectedRating === 0) {  // Only highlight when no rating is selected
            highlightStars(this.getAttribute("data-value"));
        }
    });

    star.addEventListener("touchstart", function () {
        if (selectedRating === 0) {  // Only highlight when no rating is selected
            highlightStars(this.getAttribute("data-value"));
        }
    });

    star.addEventListener("click", function () {
        if (selectedRating === 0) { // Only allow click if no rating has been selected
            selectedRating = this.getAttribute("data-value");
            lockStars(selectedRating);
            hideStars(); // Hide the stars after clicking
        }
    });

    //for mobile
    star.addEventListener("touchmove", function () {
        if (selectedRating === 0) { // Only allow click if no rating has been selected
            selectedRating = this.getAttribute("data-value");
            lockStars(selectedRating);
            hideStars(); // Hide the stars after clicking
        }
    });



    star.addEventListener("mouseleave", function () {
        if (!selectedRating) resetStars();
    });

    //for mobile
    star.addEventListener("touchleave", function () {
        if (!selectedRating) resetStars();
    });
});

// Event listener for the rating container to show the stars on hover
const ratingContainer = document.querySelector(".rating-container");

ratingContainer.addEventListener("mouseover", function () {
    if (selectedRating === 0) {
        showStars(); // Show stars again on mouse over
    } 
});

ratingContainer.addEventListener("touchstart", function () {
    resetStars();
    showStars(); // Show stars again
    
});

// Functions for highlighting, resetting, and locking stars
// Functions for star visuals
function highlightStars(value) {
    stars.forEach((star) => {
        star.classList.toggle("hover", star.getAttribute("data-value") <= value);
    });
}

function resetStars() {
    stars.forEach((star) => {
        star.classList.remove("hover");
        star.classList.remove("selected");
    });
}

function lockStars(value) {
    stars.forEach((star) => {
        star.classList.toggle("selected", star.getAttribute("data-value") <= value);
    });
}

function unlockStars() {
    stars.forEach((star) => {
        star.classList.toggle("selected", 0);
    });
}

function hideStars() {

    stars.forEach((star) => {
        star.style.display = "none"; // Hide the stars after rating
    });
    selectedRating =0;
    unlockStars();
}

function showStars() {

    stars.forEach((star) => {
        star.style.display = "inline-block"; // Show the stars again on hover
    });
}


