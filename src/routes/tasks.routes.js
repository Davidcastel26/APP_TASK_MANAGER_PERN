const { Router } = require("express")
// const pool = require('../db')
const { getAllTasks } = require('../controllers/tasks.controller')

const router = Router()

router.get('/tasks', getAllTasks)

router.get('/tasks/10', (req, res) => {
    res.send('retrieving a single task');
})

router.post('/tasks', (req, res) => {
    res.send('creating a new tasks');
})

router.delete('/tasks', (req, res) => {
    res.send('deleting a task');
})

router.put('/tasks', (req, res) => {
    res.send('updating a task');
})

module.exports = router;