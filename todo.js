"use strict";

let box = document.getElementById("box1");
let btn = document.getElementById("btn1");
let cont = document.querySelector(".container");

btn.addEventListener("click", function () {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let link = document.createElement("a");

  // let div = document.createElement("div");
  // let para = document.createElement("p");

  // cont.insertAdjacentElement("beforeend", div);
  // cont.appendChild(div);

  // let cross = document.querySelector("i.fa-remove");
  // cross.addEventListener("click", function () {
  //   li.innerText = "";
  // });

  if (box.value !== "") {
    li.innerText = box.value;
    li.classList.add("para-styling");
    link.innerHTML = '<i class="fa fa-remove"></i>';

    cont.appendChild(ul);
    ul.appendChild(li);
    // li.appendChild(para);
    li.appendChild(link);
  }

  let remove = document.querySelectorAll(".fa-remove");
  remove.forEach(function (e) {
    e.addEventListener("click", function () {
      ul.removeChild(li);
    });
  });
  // li.addEventListener("click", function () {
  //   li.style.textDecoration = "line-through";
  // });

  box.value = "";
  box.focus();
});
