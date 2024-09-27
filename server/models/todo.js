import { Schema, model } from 'mongoose'

const TodoSchema = new Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = model("todos", TodoSchema)

export const find = TodoModel.find.bind(TodoModel);
export const findByIdAndUpdate = TodoModel.findByIdAndUpdate.bind(TodoModel);
export const findByIdAndDelete = TodoModel.findByIdAndDelete.bind(TodoModel);
export const create = TodoModel.create.bind(TodoModel);
export default TodoModel;