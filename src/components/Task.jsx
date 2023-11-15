import React from 'react'

export default function Task({tache}) {
  return (
    <div className='tache'>
        <h1 className={tache.completed ? 'barre':undefined}>{tache.task}</h1>
        <div>
            <button>Modifier</button>
            <button>Supprimer</button>
        </div>
    </div>
  )
}
