export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQASWzEWK7A9FzceZFCuZvxFtZaDA86g8a2ViVK7dqaWJl22r1SpQdEP5ev88m6V5Yxplwc5EzV1-JNsDuHY6_fivGPm1yp_j-Rkp2NV0IgdvRvl3cwSmTrd3P6x8wr36ameHpyL9anFOmxfe-oZ4GWnI_CF',
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
        default:
            return state
    }
}


export default reducer;