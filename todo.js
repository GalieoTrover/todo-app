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

  li.innerText = box.value;
  link.innerHTML = '<i class="fa fa-remove"></i>';

  cont.appendChild(ul);
  ul.appendChild(li);
  // li.appendChild(para);
  li.appendChild(link);
  // cont.insertAdjacentElement("beforeend", div);
  // cont.appendChild(div);

  let cross = document.querySelector("i.fa-remove");
  cross.addEventListener("click", function () {
    li.innerText = "";
  });

  box.value = "";
  box.focus();
});
