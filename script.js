let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const countBtn = document.getElementById("countBtn-el");
const saveBtn = document.getElementById("saveBtn-el");

countBtn.addEventListener("click", function () {
  count = count + 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  saveEl.textContent += ` - ${count}`;
  count = 0;
  countEl.textContent = count;
});
