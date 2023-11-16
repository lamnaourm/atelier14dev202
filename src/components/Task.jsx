import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTache, modifTache } from '../redux/ActionsCreators'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function Task({tache}) {

  const dispatch = useDispatch()
  return (
    <div className='tache'>
        <h1 className={tache.completed ? 'barre':undefined}>{tache.task}</h1>
        <div>
            <button onClick={() => dispatch(modifTache(tache.id))}><GrUpdate /></button>
            <button onClick={() => dispatch(deleteTache(tache.id))}><MdDelete /></button>
        </div>
    </div>
  )
}
