

const getAllTasks = async (req, res) => {
    // const result = await pool.query('SELECT NOW()');
    // console.log(result);
    // res.json(result.rows[0].now)
    res.json('reatrieving a task')
}

const getTask = async (req, res) => {
    res.send('retrieving a single task');
}

const createTask = async (req, res) => {
    res.send('creating a new tasks');
} 

const deleteTask = async (req, res) => {
    res.send('deleting a task');
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

 