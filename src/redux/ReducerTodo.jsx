import uuid from "react-uuid";
import * as Types from './ActionsType'

const initial_state = {
    tasks: [
        {
            id: uuid(),
            task: "Reviser Javascript",
            completed: false
        },
        {
            id: uuid(),
            task: "Reviser Javas",
            completed: true
        },
        {
            id: uuid(),
            task: "Reviser Python",
            completed: false
        }
    ]
}

const ReducerTodo = (state = initial_state, action) => {
    let newState = { ...state }

    switch(action.type) {
        case Types.ADD_TACHE: 
            newState.tasks = [...newState.tasks, {id:uuid(), task:action.payload, completed: false}]
        break;
    }
    return newState;
}

export default ReducerTodo 
