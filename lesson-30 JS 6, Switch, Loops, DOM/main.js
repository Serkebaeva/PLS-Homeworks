const element = document.getElementById("element");
const li = document.querySelectorAll("li");
const ul = document.querySelectorAll("ul");
/*const menu = document.querySelectorAll(".menu");*/
const MenuLi = document.querySelectorAll(".menu li"); // т.о. Можно указать только Ли внутри Меню
console.log(element);
console.log(li);
console.log(ul);
/*console.log(".menu");*/
console.log(MenuLi);

////////////////////////////tretiy METOD//////
const button = document.querySelectorAll("button");
console.log(button);
/////////////////////////konez/////////////

////////////////chetvertyi METOD//////
const btn = document.getElementsByName("btn");
console.log(btn);
//////////////////konez/////////////////

//////////////pyatyi METOD///////////////
const Superbtn = document.getElementsByClassName("super");
console.log(Superbtn);
/////////////konez///////////////////////
