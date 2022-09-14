let btnBox = document.querySelector(".btn__boxs");
let btnBoxone = document.querySelector(".btn__boxsone");
let box = document.querySelector(".boxs");
let boxone = document.querySelector(".box__center");
let btnDelete = document.querySelector(".btn__box");

btnBox.addEventListener("click", () => {

  boxone.style.display = "flex";
  box.style.display = "none";
});

btnBoxone.addEventListener("click", () => {

  boxone.style.display = "flex";
  box.style.display = "none";
});

btnDelete.addEventListener("click", () => {

  boxone.style.display = "none";
  box.style.display = "flex";



});



