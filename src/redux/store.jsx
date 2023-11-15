import ReducerTodo from "./ReducerTodo";

const { createStore } = require("redux");


const store = createStore(ReducerTodo)

export default store;