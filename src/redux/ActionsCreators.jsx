import * as Types from './ActionsType'

export const addTache = (text) => {
    return {
        type: Types.ADD_TACHE,
        payload:text
    }
}