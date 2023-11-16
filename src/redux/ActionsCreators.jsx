import * as Types from './ActionsType'

export const addTache = (text) => {
    return {
        type: Types.ADD_TACHE,
        payload:text
    }
}

export const deleteTache = (id) => {
    return {
        type: Types.DELETE_TACHE,
        payload:id
    }
}

export const modifTache = (id) => {
    return {
        type: Types.MODIF_TACHE,
        payload:id
    }
}