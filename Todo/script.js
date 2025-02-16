<<<<<<< HEAD
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteButtonToDo = document.getElementById("deleteAll-button-todo");
  const ulTodo = document.getElementById("ul-todo");

  let editMode = false;
  let editElement = null;

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  deleteButtonToDo.addEventListener("click", function () {
    // window.alert("You are about to delete the entire list!");
    const confirmDelete = window.confirm("Are you sure you want to delete the entire list?");
    window.alert(confirmDelete);
    if (confirmDelete) {
      console.log("confirmDelete");
      ulTodo.innerHTML = "";
      localStorage.removeItem("allTodos");
    }
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-danger">Edit</button>
              <button type="button" class="btn btn-warning">Delete</button>
          </div>`;
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }

    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const taskText = li.querySelector(".text-todo").textContent;

      //inputTodo.value = taskText;
      // buttonTodo.textContent = "Update";
      const inputEdit = document.createElement("input");
      inputEdit.className = "text-todo-edit";
      inputEdit.type = "text";
      inputEdit.value = taskText;

      li.querySelector(".text-todo").replaceWith(inputEdit);

      inputEdit.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const newTaskText = inputEdit.value;
          console.log(newTaskText);

          const newSpan = document.createElement("newSpan");
          newSpan.className = "text-todo";
          newSpan.textContent = newTaskText;
          inputEdit.replaceWith(newSpan);
          saveAllTodo();
        }
      });
      inputEdit.focus();


      editElement = li;
      editMode = true;

    }
  });

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
});
=======
document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteButtonToDo = document.getElementById("deleteAll-button-todo");
  const ulTodo = document.getElementById("ul-todo");

  let editMode = false;
  let editElement = null;

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  deleteButtonToDo.addEventListener("click", function () {
    // window.alert("You are about to delete the entire list!");
    const confirmDelete = window.confirm("Are you sure you want to delete the entire list?");
    window.alert(confirmDelete);
    if (confirmDelete) {
      console.log("confirmDelete");
      ulTodo.innerHTML = "";
      localStorage.removeItem("allTodos");
    }
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-danger">Edit</button>
              <button type="button" class="btn btn-warning">Delete</button>
          </div>`;
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }

    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const taskText = li.querySelector(".text-todo").textContent;

      //inputTodo.value = taskText;
      // buttonTodo.textContent = "Update";
      const inputEdit = document.createElement("input");
      inputEdit.className = "text-todo-edit";
      inputEdit.type = "text";
      inputEdit.value = taskText;

      li.querySelector(".text-todo").replaceWith(inputEdit);

      inputEdit.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const newTaskText = inputEdit.value;
          console.log(newTaskText);

          const newSpan = document.createElement("newSpan");
          newSpan.className = "text-todo";
          newSpan.textContent = newTaskText;
          inputEdit.replaceWith(newSpan);
          saveAllTodo();
        }
      });
      inputEdit.focus();


      editElement = li;
      editMode = true;

    }
  });

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
=======
document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteButtonToDo = document.getElementById("deleteAll-button-todo");
  const ulTodo = document.getElementById("ul-todo");

  let editMode = false;
  let editElement = null;

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  deleteButtonToDo.addEventListener("click", function () {
    // window.alert("You are about to delete the entire list!");
    const confirmDelete = window.confirm("Are you sure you want to delete the entire list?");
    window.alert(confirmDelete);
    if (confirmDelete) {
      console.log("confirmDelete");
      ulTodo.innerHTML = "";
      localStorage.removeItem("allTodos");
    }
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-danger">Edit</button>
              <button type="button" class="btn btn-warning">Delete</button>
          </div>`;
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }

    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const taskText = li.querySelector(".text-todo").textContent;

      //inputTodo.value = taskText;
      // buttonTodo.textContent = "Update";
      const inputEdit = document.createElement("input");
      inputEdit.className = "text-todo-edit";
      inputEdit.type = "text";
      inputEdit.value = taskText;

      li.querySelector(".text-todo").replaceWith(inputEdit);

      inputEdit.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const newTaskText = inputEdit.value;
          console.log(newTaskText);

          const newSpan = document.createElement("newSpan");
          newSpan.className = "text-todo";
          newSpan.textContent = newTaskText;
          inputEdit.replaceWith(newSpan);
          saveAllTodo();
        }
      });
      inputEdit.focus();


      editElement = li;
      editMode = true;

    }
  });

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
