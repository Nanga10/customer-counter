let count = 0;
let saveCount = [];
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const countBtn = document.getElementById("countBtn-el");
const saveBtn = document.getElementById("saveBtn-el");

countBtn.addEventListener("click", function () {
  count = count + 1;
  countEl.textContent = count;
});

console.log(saveCount.length);

saveBtn.addEventListener("click", function () {
  saveCount.push(count);

  saveEl.textContent = saveCount.join(" - "); // array seperator customised to "-"

  count = 0;
  countEl.textContent = count;
});
