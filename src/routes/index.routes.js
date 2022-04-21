import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks });
});

router.post('/tasks/add', async (req, res) => {
    try {
        const task = Task(req.body);
        const taskSaved = await task.save();
        console.log(taskSaved);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/edit/:id', async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', { task });
});

router.post('/edit/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect('/');   
});

export default router;