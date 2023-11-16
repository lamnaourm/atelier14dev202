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

export const deleteall = () => {
    return {
        type: Types.DELETE_ALL
    }
}

export const deletetermine = () => {
    return {
        type: Types.DELETE_TERMINE
    }
}

export const deletenotermine = () => {
    return {
        type: Types.DELETE_NOTERMINE
    }
}