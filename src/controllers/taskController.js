import Task from "../models/Task";

export const showTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks });
}

export const createTask = async (req, res) => {
    try {
        const task = Task(req.body);
        const taskSaved = await task.save();
        console.log(taskSaved);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}

export const showEditTask = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', { task });
}

export const editTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');   
}


export const taskDoneTask = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.done = !task.done;

    await task.save();

    res.redirect('/');
    
}