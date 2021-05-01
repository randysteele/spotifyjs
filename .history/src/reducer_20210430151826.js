export const initialState = {
    user: [],
    playlists: [],
    playing: false,
    item: [],
    // token: 'BQASWzEWK7A9FzceZFCuZvxFtZaDA86g8a2ViVK7dqaWJl22r1SpQdEP5ev88m6V5Yxplwc5EzV1-JNsDuHY6_fivGPm1yp_j-Rkp2NV0IgdvRvl3cwSmTrd3P6x8wr36ameHpyL9anFOmxfe-oZ4GWnI_CF',
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }
}


export default reducer;