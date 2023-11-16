import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTache } from '../redux/ActionsCreators'
import { IoMdAddCircle } from "react-icons/io";

export default function AddTache() {

    const [tache, setTache] = useState('')
    const dispatch = useDispatch()

  return (
    <div className='add'>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)} />
        <button onClick={() => dispatch(addTache(tache))}><IoMdAddCircle /></button>
    </div>
  )
}
