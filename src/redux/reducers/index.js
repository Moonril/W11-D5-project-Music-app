import { SEARCH_ARTIST, SELECT_SONG } from '../actions'

/* funzione cerca adesso funziona */

const initialState = {
    selectedArtist: 'electriccallboy',
    selectedSong: {
        song: 'Corri',
        author: 'Dora'
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SONG:
            return {
                ...state,
                selectedSong: action.payload
            }
        case SEARCH_ARTIST:
            return {
                ...state,
                selectedArtist: action.payload
            }
        default:
            return state
    }
}

export default mainReducer