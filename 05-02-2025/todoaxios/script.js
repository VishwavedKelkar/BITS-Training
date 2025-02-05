document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const addTodo = document.getElementById("add-todo");
    const deleteButtonToDo = document.getElementById("deleteAll-button-todo");
    const ulTodo = document.getElementById("ul-todo");

    const getTodo = document.getElementById("get-todo");
    const postTodo = document.getElementById("post-todo");

    getTodo.addEventListener('click', () => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos').then((res) => {
                const randomTodo = res.data[Math.floor(Math.random() * res.data.length)];
                createTodo(randomTodo.title);
            })
            .catch(err => console.error(err))
    });

    postTodo.addEventListener('click', () => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title: inputTodo.value,
                completed: false
            })
            .then((res) => {
                alert(`The POST request responded with status : ${res.status} with the data : ${JSON.stringify(res.data, null, 2)}`)
            })
            .catch(err => console.log(err));
    });

    deleteButtonToDo.addEventListener("click", function () {
        // window.alert("You are about to delete the entire list!");
        const confirmDelete = window.confirm("Are you sure you want to delete the entire list?");
        window.alert(confirmDelete);
        if (confirmDelete) {
            ulTodo.innerHTML = "";
            localStorage.removeItem("allTodos");
        }
    });

    addTodo.addEventListener('click', function () {
        const text = inputTodo.value;
        if (text) {
            createTodo(text);
            inputTodo.value = "";
            // saveAllTodo();
        }
    })

    const createTodo = (task) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-start";
        li.innerHTML = `<span class="text-todo">${task}</span>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger">Put/Patch</button>
                <button type="button" class="btn btn-warning">Delete</button>
            </div>`;
        ulTodo.appendChild(li);
    };

    ulTodo.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-warning")) {
            e.target.closest(".list-group-item").remove();
            // saveAllTodo();

            axios
                .delete('https://jsonplaceholder.typicode.com/todos/${todoID}')
                .then(res => alert(
                    `The delete request responded with status : ${res.status}`
                ))
                .catch(err => alert(err));
        }

        if (e.target.classList.contains("btn-danger")) {
            const li = e.target.closest(".list-group-item");
            const taskText = li.querySelector(".text-todo").textContent;

            const inputEdit = document.createElement("input");
            inputEdit.className = "text-todo-edit";
            inputEdit.type = "text";
            inputEdit.value = taskText;

            li.querySelector(".text-todo").replaceWith(inputEdit);

            inputEdit.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    const newTaskText = inputEdit.value;

                    const newSpan = document.createElement("newSpan");
                    newSpan.className = "text-todo";
                    newSpan.textContent = newTaskText;
                    inputEdit.replaceWith(newSpan);

                    axios
                        .patch('https://jsonplaceholder.typicode.com/todos/${todoId}', {
                            title: newTaskText,
                            completed: true,
                        })
                        .then(res =>
                            alert(
                                `The Put/Patch request responded with status : ${res.status} with updated title : ${res.data.title}`
                            ))
                        .catch(err => alert(err));
                    // saveAllTodo();
                }
            });
            inputEdit.focus();
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


