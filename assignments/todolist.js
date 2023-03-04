
let taskList = [];

function addTask() {
	let taskInput = document.getElementById("task");
	let task = taskInput.value;
	if (task !== "") {
		taskList.push(task);
		taskInput.value = "";
		displayTasks();
	}
}

function displayTasks() {
	let taskListUl = document.getElementById("taskList");
	taskListUl.innerHTML = "";
	for (let i = 0; i < taskList.length; i++) {
		let taskLi = document.createElement("li");
		taskLi.innerHTML = `<span>${taskList[i]}</span><button onclick="editTask(${i})">Edit</button><button onclick="deleteTask(${i})">Delete</button>`;
		taskListUl.appendChild(taskLi);
	}
}

function deleteTask(index) {
	taskList.splice(index, 1);
	displayTasks();
}

function editTask(index) {
	let newTask = prompt("Enter new task:");
	if (newTask !== "") {
		taskList[index] = newTask;
		displayTasks();
	}
}

displayTasks();


















































// window.addEventListener('load', () => {
// 	const form = document.querySelector("#new-task-form");
// 	const input = document.querySelector("#new-task-input");
// 	const list_el = document.querySelector("#tasks");

// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault();

// 		const task = input.value;

// 		const task_el = document.createElement('div');
// 		task_el.classList.add('task');

// 		const task_content_el = document.createElement('div');
// 		task_content_el.classList.add('content');

// 		task_el.appendChild(task_content_el);

// 		const task_input_el = document.createElement('input');
// 		task_input_el.classList.add('text');
// 		task_input_el.type = 'text';
// 		task_input_el.value = task;
// 		task_input_el.setAttribute('readonly', 'readonly');

// 		task_content_el.appendChild(task_input_el);

// 		const task_actions_el = document.createElement('div');
// 		task_actions_el.classList.add('actions');
		
// 		const task_edit_el = document.createElement('button');
// 		task_edit_el.classList.add('edit');
// 		task_edit_el.innerText = 'Edit';

// 		const task_delete_el = document.createElement('button');
// 		task_delete_el.classList.add('delete');
// 		task_delete_el.innerText = 'Delete';

// 		task_actions_el.appendChild(task_edit_el);
// 		task_actions_el.appendChild(task_delete_el);

// 		task_el.appendChild(task_actions_el);

// 		list_el.appendChild(task_el);

// 		input.value = '';

// 		task_edit_el.addEventListener('click', (e) => {
// 			if (task_edit_el.innerText.toLowerCase() == "edit") {
// 				task_edit_el.innerText = "Save";
// 				task_input_el.removeAttribute("readonly");
// 				task_input_el.focus();
// 			} else {
// 				task_edit_el.innerText = "Edit";
// 				task_input_el.setAttribute("readonly", "readonly");
// 			}
// 		});

// 		task_delete_el.addEventListener('click', (e) => {
// 			list_el.removeChild(task_el);
// 		});
// 	});
// });