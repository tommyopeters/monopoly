// let leftRow = document.querySelector(".left-row");
let leftRowSpaces = document.querySelectorAll(".left-row .space");
let leftRowContainers = document.querySelectorAll(
  ".left-row .space .container"
);

leftRowContainers.forEach(el => {
  el.style.width = leftRowSpaces[0].offsetHeight + "px";
  el.style.height = leftRowSpaces[0].offsetWidth + "px";

  console.log(el.offsetHeight);
});

// let rightRow = document.querySelector(".right-row");
let rightRowSpaces = document.querySelectorAll(".right-row .space");
let rightRowContainers = document.querySelectorAll(
  ".right-row .space .container"
);

rightRowContainers.forEach(el => {
  el.style.width = rightRowSpaces[0].offsetHeight + "px";
  el.style.height = rightRowSpaces[0].offsetWidth + "px";

  console.log(el.offsetHeight);
});
