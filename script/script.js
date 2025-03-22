
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
   text: "Scrambled Eggs<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
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
   linkPage: "ChocolateMousse.html",
   mealType: "Dessert", 
   time: "mediumTime"
  },
  { id: 12, 
   image: "mangolassi.jpg", 
   text:"Mango Lassi<br>(Coming Soon)",
   linkPage: "ComingSoon.html",
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