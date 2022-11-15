let btn = document.getElementById("btn-dark");
btn.innerHTML = "☀️";
let defaultMode = "light";

function changeMode() {
  if (defaultMode === "light") {
    document.body.style.backgroundColor = "#1e293b";
    document.body.style.color = "white";
    document.querySelector(".items .item").style.borderBottom =
      "2px solid #f8fafc";
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
