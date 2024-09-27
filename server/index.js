import express, { json } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import { find, findByIdAndUpdate, findByIdAndDelete, create } from './models/todo.js'

const app = express()
app.use(cors({
    origin: '*'
}));
app.use(json())
const PORT = process.env.API_PORT || 6001;

// connect('mongodb://127.0.0.1:27017/TodoList')
connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/get', (req, res) => {
    find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task =req.body.task;
    create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})