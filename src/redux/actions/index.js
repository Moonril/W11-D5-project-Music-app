export const SELECT_SONG = 'SELECT_SONG'

export const selectSongAction = (title, artist) => {
    return {
        type: SELECT_SONG,
        payload: {
            song: title,
            author: artist,
        }
    }
}