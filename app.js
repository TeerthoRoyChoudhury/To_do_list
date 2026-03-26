document.addEventListener("DOMContentLoaded", () => {
  const todoTitle = document.getElementById("todoTitle");
  const tododesc = document.getElementById("todoDesc");
  const addbtn = document.getElementById("addBtn");
  const todolist = document.getElementById("todoList");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  function sanitize(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // Save todos to localStorage
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Render todos to the UI
  function renderTools() {
    // Empty state
    if (todos.length === 0) {
      todolist.innerHTML = `
        <div style="text-align:center; color: rgba(255,255,255,0.2); 
        font-family: var(--font-mono); font-size: 0.8rem; 
        padding: 3rem 0; letter-spacing: 0.1em;">
          NO TASKS FOUND
        </div>`;
      return;
    }

    todolist.innerHTML = todos
      .map(
        (todo, index) => `
        <div class="card todo-item">
          <div class="todo-content">
            <h3>${sanitize(todo.title)}</h3>
            <p>${sanitize(todo.decription)}</p>
            <span class="status status-pending">Pending</span>
          </div>
          <div class="todo-Action">
            <button onclick="editTodo(${index})" class="btn edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="deleteTodo(${index})" class="btn delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>`,
      )
      .join("");
  }

  renderTools();

  // Add new todo
  function addtodo() {
    const title = todoTitle.value.trim();
    const desc = tododesc.value.trim();

    if (!title) return;

    const isDuplicate = todos.some(
      (t) => t.title.toLowerCase() === title.toLowerCase(),
    );
    if (isDuplicate) {
      alert("Task already exists!");
      return;
    }

    todos.push({ title, decription: desc });
    todoTitle.value = "";
    tododesc.value = "";
    renderTools();
    saveTodos();
  }

  // Delete todo
  window.deleteTodo = (todoIndex) => {
    todos.splice(todoIndex, 1);
    renderTools();
    saveTodos();
  };

  window.editTodo = (todoIndex) => {
    const todoToEdit = todos[todoIndex];
    todoTitle.value = todoToEdit.title;
    tododesc.value = todoToEdit.decription || "";
    todos.splice(todoIndex, 1);
    renderTools();
    saveTodos();
  };

  // Click button to add
  addbtn.addEventListener("click", addtodo);

  todoTitle.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addtodo();
  });
});
