export const SELECT_SONG = 'SELECT_SONG'
export const SEARCH_ARTIST = 'SEARCH_ARTIST'

export const selectSongAction = (title, artist) => {
    return {
        type: SELECT_SONG,
        payload: {
            song: title,
            author: artist,
        }
    }
}


export const searchArtistAction = (artist) => {
    return {
        type: SEARCH_ARTIST,
        payload: artist
    }
}