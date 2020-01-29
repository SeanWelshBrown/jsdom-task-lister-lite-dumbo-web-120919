document.addEventListener("DOMContentLoaded", () => {
  
const taskForm = document.querySelector("#create-task-form");

taskForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target

  const taskDescription = form["new-task-description"].value;

  const newTask = {
    description: taskDescription
  };

  addTask(newTask);
};

const taskList = document.querySelector("#list")

function addTask(taskObj) {
  const taskLi = document.createElement('li')
    taskLi.className = "task"

    taskLi.innerHTML = `
      ${taskObj.description}
    `
    taskList.append(taskLi)
}

});
