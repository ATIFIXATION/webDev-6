
let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");


// Add Todo
addBtn.addEventListener("click", function () {

    let todoText = todoInput.value;

    // Don't add empty todo
    if (todoText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    li.classList.add("todo-item");

    // Create todo text
    let span = document.createElement("span");

    span.innerText = todoText;


    // Create delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";


    // Delete Todo
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });


    // Put everything together
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);


    // Clear input
    todoInput.value = "";
});
