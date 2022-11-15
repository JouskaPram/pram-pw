let btn = document.getElementById("btn-dark");
btn.innerHTML = "☀️";
let defaultMode = "light";
var item = document.getElementsByClassName("item");
function changeMode() {
  if (defaultMode === "light") {
    document.body.style.backgroundColor = "#1e293b";
    document.body.style.color = "white";
    // item.style.backgroundColor = "red";
    btn.innerHTML = "🌙";
    defaultMode = "dark";
  } else {
    document.body.style.backgroundColor = "#f8fafc";
    document.body.style.color = "#1e293b";
    document.querySelector(".items .item").style.borderBottom =
      "2px solid #1e293b";
    btn.innerHTML = "☀️";
    defaultMode = "light";
  }
}
