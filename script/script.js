// document.addEventListener("DOMContentLoaded", () => {
//     const menuButton = document.getElementById("menuText");  // Menu button
//     const recipeLinks = document.querySelectorAll(".button");  // Recipe links

//     // Initially hide the recipe links
//     recipeLinks.forEach(link => {
//         link.style.visibility = "hidden";  // Hide links initially by setting visibility to hidden
//     });

//     // Set the initial text on the menu button
//     menuButton.innerHTML = "Show Menu";  // Initially the button should say "Show Menu"
//     document.getElementById('buttonsPane').style.visibility='hidden';

//     // Add a click event listener to the menu button
//     menuButton.addEventListener("click", () => {
//         // Toggle the visibility of the recipe buttons
//         recipeLinks.forEach(link => {
//             if (link.style.visibility === "hidden") {
//                 link.style.visibility = "visible";  // Show the buttons
//             } else {
//                 link.style.visibility = "hidden";  // Hide the buttons
//             }
//         });

//         // Toggle the button text based on the current state
//         if (menuButton.innerHTML === "Show Menu") {
//             menuButton.innerHTML = "Hide Menu";  // Change the button text to "Hide Menu"
//             document.getElementById('buttonsPane').style.visibility='visible';
//         } else {
//             menuButton.innerHTML = "Show Menu";  // Change the button text to "Show Menu"
//             document.getElementById('buttonsPane').style.visibility='hidden';
//             loadPageContent("");
//         }
//     });
// });
// 
function loadPageContent(url) {
    document.getElementById('contentObject').data = url;
}