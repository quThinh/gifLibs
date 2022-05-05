const initState = [
];

const favouriteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'favourite/addFavourite':
            return [...state, action.payload];

        case 'favourite/removeFavourite':
            return [...state.filter(function(e) {
                return e.id != action.payload.id;
            })]

        default:
            return state;
    }
};

export default favouriteReducer;
