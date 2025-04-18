import { SELECT_SONG } from '../actions'


const initialState = {
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
        default:
            return state
    }
}

export default mainReducer