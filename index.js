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
  taskList.push({ taskName: input, isDone: false });
  console.log(taskList);
  render();
};

let render = () => {
  let result = taskList
    .map(
      (item, index) =>
        `
        <li class="item" id="${index}">
        <input type="checkbox" onclick="check(${index})"/>
        <span>${item.taskName}</span>
        <button onclick="remove(${index})">x</button>
        </li>`
    )
    .join("");
  document.getElementById("taskArea").innerHTML = result;
};

let remove = (index) => {
  taskList.splice(index, 1);
  render();
  console.log(taskList);
};

let check = (index) => {
  taskList[index].isDone = !taskList[index].isDone;
  if (taskList[index].isDone) {
    document.getElementById(index).style.textDecoration = "line-through";
  } else {
    document.getElementById(index).style.textDecoration = "none";
  }
};
