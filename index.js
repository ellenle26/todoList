let taskList = [];
let uniqueId = 0;

const addTodo = () => {
  let input = document.getElementById("task").value;

  if (input == null || input == "") {
    alert("invalid task");
  } else {
    taskList.push({ taskName: input, isDone: false, taskID: uniqueId++ });
  }
  console.log(taskList);
  render(taskList);
  saveData();
};

const showAll = () => {
  render(taskList);
  saveData();
};

const showDone = () => {
  let doneList = taskList.filter((item) => item.isDone);
  render(doneList);
  saveData();
};

const showPending = () => {
  let pendingList = taskList.filter((item) => !item.isDone);
  render(pendingList);
  saveData();
};

let render = (list) => {
  let result = list
    .map((item) => {
      if (item.isDone) {
        return `<div class="item">
        <input  type="checkbox" checked onchange="check(${item.taskID})"/>
        <span style="text-decoration: line-through">${item.taskName}</span>
        <button id="removeBttn" onclick="remove(${item.taskID})">x</button>
        </div>`;
      } else
        return `<div class="item">
        <input type="checkbox" onchange="check(${item.taskID})"/>
        <span >${item.taskName}</span>
        <button id="removeBttn" onclick="remove(${item.taskID})">x</button>
        </div>`;
    })
    .join("");
  document.getElementById("taskArea").innerHTML = result;
  saveData();
};

let remove = (clickedIndex) => {
  let id = taskList.findIndex((item) => item.taskID == clickedIndex);
  taskList.splice(id, 1);
  render(taskList);
  console.log("list afet delet", taskList);
};

let check = (clickedIndex) => {
  let id = taskList.findIndex((item) => item.taskID === clickedIndex);
  taskList[id].isDone = !taskList[id].isDone;
  render(taskList);
};

// month
var d = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("month").innerHTML = months[
  d.getMonth()
].toLocaleUpperCase();
// date
document.getElementById("date").innerHTML = d.getDate();
// year
document.getElementById("year").innerHTML = d.getFullYear();

const saveData = () => {
  localStorage.setItem("taskList", JSON.stringify(taskList));
};

const getData = () => {
  let data = localStorage.getItem("taskList");
  data = JSON.parse(data);
  if (data == null) {
    taskList = [];
  } else {
    taskList = data;
  }
  render(taskList);
  console.log(taskList);
};

getData();
