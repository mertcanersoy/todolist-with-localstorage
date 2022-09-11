let task = document.querySelector('#task');
let list = document.querySelector('#list')



let taskArray = localStorage.getItem("task") ?
  JSON.parse(localStorage.getItem("task")) :
  [];
console.log(taskArray);


const liMaker = (text) => {
  const liElement = document.createElement("li");
  liElement.textContent = text;
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeBtn;
  liElement.append(closeButton);
  list.appendChild(liElement);
};
taskArray.forEach((item) => {
  liMaker(item);
});

function check() {
  this.classList.toggle("checked");
}

function removeBtn() {
  this.parentElement.remove();
  let liElement = this.parentElement.id;
  let getLocalStorage = JSON.parse(localStorage.getItem("task"));
  let index = getLocalStorage.indexOf(liElement);
  getLocalStorage.splice(index,1);
  console.log(liElement);
  localStorage.setItem("task", JSON.stringify(getLocalStorage));
}

const newElement = () => {
  if (task.value == "" || !task.value.trim()) {
    $(".error").toast("show");
  }
  else {
    let liElement = document.createElement("li");
    liElement.innerHTML = task.value;
    $('.success').toast('show');

    liElement.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeBtn;
    liElement.appendChild(closeButton);
    list.appendChild(liElement);
    console.log(taskArray);
    taskArray.push(task.value);
    localStorage.setItem("task", JSON.stringify(taskArray));
  }
  task.value = "";
}
