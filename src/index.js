// imports 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

//routes
const tasksRoutes = require('./routes/tasks.routes');
// const { use } = require('./routes/tasks.routes');

const app = express();

const PORT = 4000;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(tasksRoutes)

app.use((err,req, res, next)=>{
    return res.json({
        meesage:err.message
    })
})

app.listen(4000)
console.log(`server on port ${PORT}`);
