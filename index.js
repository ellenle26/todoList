let taskList = [];

// Get the input field
var input = document.getElementById("task");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addTask").click();
  }
});

const addTodo = () => {
  let input = document.getElementById("task").value;
  if (input == "" || input == " ") {
    alert("invalid task");
  } else {
    taskList.push({ taskName: input, isDone: false });
  }
  console.log(taskList);
  render();
};

let render = () => {
  let result = taskList
    .map(
      (item, index) =>
        `<div class="item">
        <input id="checkBox" type="checkbox" onclick="check(${index})"/>
        <span id="${index}">${item.taskName}</span>
        <button id="removeBttn" onclick="remove(${index})">x</button>
        </div>`
    )
    .join("");
  document.getElementById("taskArea").innerHTML = result;
  return;
};

let remove = (index) => {
  taskList.splice(index, 1);
  render();
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isDone) {
      document.getElementById("checkBox").checked = true;
      document.getElementById(i).style.textDecoration = "line-through";
      return;
    } else {
      document.getElementById("checkBox").checked = false;
      document.getElementById(i).style.textDecoration = "none";
      return;
    }
  }
};

let check = (index) => {
  taskList[index].isDone = !taskList[index].isDone;
  if (taskList[index].isDone) {
    document.getElementById(index).style.textDecoration = "line-through";
    return;
  } else {
    document.getElementById(index).style.textDecoration = "none";
    return;
  }
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
var d = new Date();
document.getElementById("date").innerHTML = d.getDate();
// year
var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
