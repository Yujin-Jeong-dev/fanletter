const FILTER_CHANGE = 'filter/change';



export const letterFilters = ['All', '민지', '하니', '다니엘', '해린', '혜인'];
export const filterInitialState = letterFilters[0];

export const onFilterChange = (payload) => {
    return {
        type: FILTER_CHANGE,
        payload
    };
}




const filter = (state = filterInitialState, action) => {
    switch (action.type) {
        case FILTER_CHANGE:
            return action.payload;
        default:
            return state;
    }
};

export default filter;