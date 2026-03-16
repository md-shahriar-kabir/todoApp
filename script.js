const todos = [];

const addTodo = () => {
  const input = document.getElementById("todoInput");
  const task = input.value;

  if(task === "") return;

  todos.push(task);

  displayTodos();
  input.value = "";
};

const displayTodos = () => {
  const list = document.getElementById("todoList");

  list.innerHTML = todos
    .map((todo, index) => `
      <li>
        ${todo}
        <button onclick="deleteTodo(${index})">Delete</button>
      </li>
    `)
    .join("");
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodos();
};