import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsTodo() {

    const taches = useSelector(state => state.tasks)
    return (
        <div className='stats'>
            Nombre tache : {taches.length} - 
            Nombre Terminè : {taches.filter(t => t.completed).length} - 
            Nombre Non Terminè : {taches.filter(t => !t.completed).length}
        </div>
    )
}
