// Fonctionnalité 1 //
var footerClick = document.getElementsByTagName("footer")[0];
let i=0;
var onButtonClick = function() {
  i++;
        console.log("clique numéro " + i);
    };
footerClick.addEventListener("click", onButtonClick);

// Fonctionnalité 2 //
var navBar = document.getElementById("navbarHeader");
var button = document.getElementsByClassName("navbar-toggler")[0];

var onButtonClick = function() {
navBar.classList.remove("collapse");
navBar.classList.remove("bg-dark");
console.log(button);
};

button.addEventListener("click", onButtonClick);

// Fonctionnalité 3 //
var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var txt = document.getElementsByClassName("card-text")[0];

var onButtonClick = function() {
txt.style.color = "red";
console.log("hello");
};
edit.addEventListener("click", onButtonClick);

// Fonctionnalité 4 //
var card2 = document.getElementsByClassName("col-md-4")[1];
var txt2 = document.getElementsByClassName("card-text")[1];
var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(card2);

var onButtonClick2 = function() {
console.log("hello");
if (txt2.style.color != "green")
{
txt2.style.color= "green"
}
else {
  txt2.style.color="#212529"
}
};
edit2.addEventListener("click", onButtonClick2);


// Fonctionnalité 5 //
var stylesheet = document.styleSheets[0];
var navBar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];

var hide = function() {
  stylesheet.setAttribute("href", " ");
  console.log("hello");
}
navBar.addEventListener("dblclick", hide);
