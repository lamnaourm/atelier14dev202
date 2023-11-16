import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTache, modifTache } from '../redux/ActionsCreators'

export default function Task({tache}) {

  const dispatch = useDispatch()
  return (
    <div className='tache'>
        <h1 className={tache.completed ? 'barre':undefined}>{tache.task}</h1>
        <div>
            <button onClick={() => dispatch(modifTache(tache.id))}>Modifier</button>
            <button onClick={() => dispatch(deleteTache(tache.id))}>Supprimer</button>
        </div>
    </div>
  )
}
