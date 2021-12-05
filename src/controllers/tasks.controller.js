const pool = require('../db')

const getAllTasks = async (req, res) => {
    // const result = await pool.query('SELECT NOW()');
    // console.log(result);
    // res.json(result.rows[0].now)
    // res.json('reatrieving a task')

    try {
        const allTasks = await pool.query('SELECT * FROM task')
    // console.log(allTask);
        res.send(allTasks.rows);
    } catch (error) {
        console.log(error.message);
    }
}

const getTask = async (req, res) => {

    try {
        const {id} = req.params

    // console.log(req.params.id);
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])
        // console.log(result);

        if(result.rows.length === 0)
            return res.status(404).json({
                message:"Ups! Task not found :("
        });

    // res.send('retrieving a single task');
        return res.json(result.rows);

    } catch (error) {
        console.log(error.message);
    }
}

const createTask = async (req, res) => {
    const { title, description} = req.body

    try {
        // console.log(title, description);
        const rep = await pool.query(
        "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
        [ title, description ]);

        // console.log(rep);
        res.json(rep.rows[0])

    } catch (error) {
        console.log(error.message);
        res.json({error : error.message})
    }  
    // res.send('creating a new tasks');
} 

const deleteTask = async (req, res) => {

    const {id} = req.params;
    //before check the const rust create a log to check
    // console.log(id);
    const result = await pool.query('DELETE FROM task WHERE id = $1', [id])
    
    if(result.rowCount === 0)return res.status(404).json({
        message:"Task not found"
    })

    return res.sendStatus('204');
}

const updateTask = async (req, res) => {
    res.send('updating a task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}

 