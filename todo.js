"use strict";

let box = document.getElementById("box1");
let btn = document.getElementById("btn1");
let cont = document.querySelector(".container");

btn.addEventListener("click", function () {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let link = document.createElement("a");

  if (box.value !== "") {
    li.innerText = box.value;
    li.classList.add("list-styling");
    link.innerHTML = '<i class="fa fa-remove"></i>';

    cont.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(link);
  }

  link.addEventListener("click", function () {
    ul.removeChild(li);
  });

  box.value = "";
  box.focus();
});
