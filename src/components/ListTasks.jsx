import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export default function ListTasks() {

    const taches = useSelector(state => state.tasks)
    return (
        <div>
            {taches.map(t => <Task key={t.id} tache={t} />)}
        </div>
    )
}
