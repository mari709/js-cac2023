const tasks = [
    { id: 1, title: "task 1", completed: false },
    { id: 2, title: "task 2", completed: false },
    { id: 3, title: "task 3", completed: false },
    { id: 4, title: "task 4", completed: false },
  ];
  
  // Renderiza la página de índice con las tasks
  const index = (req, res) => {
      res.render("index", {tasks});
  };
// Agrega una nueva tarea al array de tareas
  const store = (req, res) => {
    const task = {
      id: Date.now(),
      title: req.body.title,
      completed: false,
    };
    tasks.push(task);
  
    res.redirect("/");
  };

// Cambia el estado de completitud de una tarea
const update = (req, res) => {
    tasks.forEach((task) => {
    if (task.id === req.params.id) {
      task.completed = !task.completed;
    }
    });

    res.redirect("/");
};

// Elimina una tarea del array de tareas
const destroy = (req, res) => {
  tasks = tasks.filter((task) => task.id != req.params.id);

    res.redirect("/");
};

  module.exports ={
      index,
      store,
      update,
      destroy
  }