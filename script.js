const inputBox_day = document.getElementById("input-box_day");
const inputBox_night = document.getElementById("input-box_night");
const listContainer_day= document.getElementById("list-container_day");
const listContainer_night = document.getElementById("list-container_night");

function addTask_day() {
  if (inputBox_day.value === "") {
    alert("Por favor, insira uma tarefa!");
    return;
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox_day.value;
    listContainer_day.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox_day.value = "";
}
