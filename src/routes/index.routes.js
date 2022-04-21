import { Router } from 'express';
import { showTasks, createTask, showEditTask, editTask, deleteTask, taskDoneTask } from '../controllers/taskController';

const router = Router();

router.get('/', showTasks);

router.post('/tasks/add', createTask);

router.get('/done/:id', taskDoneTask);

router.get('/edit/:id', showEditTask);

router.post('/edit/:id', editTask);

router.get('/delete/:id', deleteTask);


export default router;