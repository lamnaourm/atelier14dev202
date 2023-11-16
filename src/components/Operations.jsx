import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteall, deletenotermine, deletetermine } from '../redux/ActionsCreators'

export default function Operations() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(deleteall())}><MdDelete /> Tous</button>
        <button onClick={() => dispatch(deletetermine())}><MdDelete /> Terminés</button>
        <button onClick={() => dispatch(deletenotermine())}><MdDelete /> Non Terminés</button>
    </div>
  )
}
