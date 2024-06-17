let tasks = []; // Array para armazenar as tasks temporariamente

export const createTask = (req, res) => {
  const {title, description} = req.body;

  const newTask  =  {
    id: tasks.length + 1,
    title,
    description,
    completed : false,
    
  }
  tasks.push(newTask);
  res.end(`task successfully created`)
};

export const getAllTasks = (req, res) => {
 res.json(tasks);
};

export const updateTask = (req, res) => {
  
    const {title,description,} = req.body;
    const {id} = req.params

    tasks[id].title = title;
    tasks[id].description = description;
    res.end(`task successfully updated`)
};

export const deleteTask = (req, res) => {
    const {id} = req.params

    tasks = tasks.filter(task => task.id !== parseInt(id))
    res.end(`task successfully deleted`)
};

export const completeTask = (req, res) => {
  const {id} = req.params
  
console.log(tasks[parseInt(id)])
  tasks[id -1].completed = true;
  res.end(`task successfully completed`)
};
