import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask, completeTask } from '../controllers/taskControllers.js'; // Verifique o caminho e o nome do arquivo

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch('/:id/complete', completeTask);

export default router;
