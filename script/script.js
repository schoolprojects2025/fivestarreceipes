
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



//
function test(){

    const mealType = getQueryParamValue("mealType");
    alert(mealType);
    const time = getQueryParamValue("time");
    alert(time);
    if(mealType!="breakfast"){
        document.getElementById("allReceipesTable").style.visibility="collapse";
    }
}

function test2(){
    const data = [  
{ name: 'John', age: 30, email: 'john@example.com' },  
{ name: 'Jane', age: 25, email: 'jane@example.com' },  
{ name: 'Bob', age: 40, email: 'bob@example.com' }  
];  

const tableContainer = document.getElementById('table-container');  
tableContainer.innerHTML = generateTable(data); 
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
   text: "Egg Fried Rice",
   linkPage: "ComingSoon.html",
   mealType: "Lunch", 
   time: "lessTime"
  },
  { id: 4, 
   image: "ThaiMangoRice.jpg", 
   text:"Thai Mango Rice",
   linkPage: "ComingSoon.html",
   mealType: "Lunch", 
   time: "mediumTime"
  },
  { id: 5, 
   image: "quesadilla.jpg", 
   text:"Quesadilla",
   linkPage: "ComingSoon.html",
   mealType: "Breakfast", 
   time: "lessTime"
  },
  { id: 6, 
   image: "veggieWrap.jpg", 
   text:"Veggie Wrap",
   linkPage: "ComingSoon.html",
   mealType: "Breakfast", 
   time: "mediumTime"
  },
  { id: 7, 
   image: "BasilPestoEggSandwich.jpg", 
   text: "Basil Pesto Egg Sandwich",
   linkPage: "ComingSoon.html",
   mealType: "Breakfast", 
   time: "moreTime"
  },
  { id: 8, 
   image: "ScrambledEggs.jpg", 
   text: "Scrambled Eggs",
   linkPage: "ComingSoon.html",
   mealType: "Breakfast", 
   time: "lessTime"
  },
  { id: 9, 
   image: "RiceKrispies.jpg", 
   text:"Rice Krispies",
   linkPage: "ComingSoon.html",
   mealType: "Dessert", 
   time: "lessTime"
  },
  { id: 10, 
   image: "Crepes.jpg", 
   text: "Crepes",
   linkPage: "ComingSoon.html",
   mealType: "Dessert", 
   time: "moreTime"
  },
  { id: 11, 
   image: "chocolateMousse.jpg", 
   text: "Chocolate Mousse",
   linkPage: "ComingSoon.html",
   mealType: "Dessert", 
   time: "mediumTime"
  },
  { id: 12, 
   image: "mangolassi.jpg", 
   text:"Mango Lassi",
   linkPage: "ComingSoon.html",
   mealType: "Dessert", 
   time: "lessTime"
  },
  { id: 13, 
   image: "GarlicKnots.jpg", 
   text:"Garlic Knots",
   linkPage: "ComingSoon.html",
   mealType: "Dinner", 
   time: "moreTime"
  },
  { id: 14, 
   image: "CreamyAlfredoPasta.jpg", 
   text: "Creamy Alfredo Pasta",
   linkPage: "ComingSoon.html",
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
   text:"Guacamole Veggie Taco",
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


let table = '<table class="imgtable">';  
table += `<th>${mealType}</th><tr>`;  
filteredRecipes.forEach(item => {  
table += `<td><a href="${item.linkPage}"><img src="images/${item.image}" height="200" width="300"></a></td>`;  
});  
table += `</tr><tr>`;
filteredRecipes.forEach(item => {  
table += `<td>${item.text}</td>`;})
table +=`</tr></table>`;  

const tableContainer = document.getElementById('results-table');  
tableContainer.innerHTML = table; 
  
}  

