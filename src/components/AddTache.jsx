import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTache } from '../redux/ActionsCreators'

export default function AddTache() {

    const [tache, setTache] = useState('')
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)} />
        <button onClick={() => dispatch(addTache(tache))}>Ajouter</button>
    </div>
  )
}
