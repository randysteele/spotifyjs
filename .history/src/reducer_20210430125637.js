export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBUtQoKKtQxS4XZUXn2HkA2JcaFQSu9ibcEfBBINavlldA0Fge6i-qABIdgwTam5RVQP1trWq7P6vdD9nE9znhugQdyM6nXR_SJl5csN4s73v5QxW2lFXwlKRuFl6truuhyYlC4EMi9JlZaL2QypnqQWU75",
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