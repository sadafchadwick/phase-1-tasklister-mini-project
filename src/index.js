document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const newTask = document.querySelector('#list')

  const taskInfo = document.createElement ('li')
  const task = taskInfo.textContent = event.target["new-task-description"].value
  const date = taskInfo.textContent = event.target.date.value
  const time = taskInfo.textContent = event.target.time.value
  const priority = taskInfo.textContent = event.target.priority.value

  const displayTask = `${task}.....${date}.....${time}.....${priority}`
  taskInfo.textContent = displayTask


  newTask.append(taskInfo)


  event.target.reset()
}
  )