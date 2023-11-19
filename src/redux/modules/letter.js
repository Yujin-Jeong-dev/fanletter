import fakeLetter from '../../letters/fakeData.json';
const ADD_LETTER = 'letter/add';
const DELETE_LETTER = 'letter/delete';
const UPDATE_LETTER = 'letter/update';


export const letterInitialState = fakeLetter;


//액션 객체를 리턴하는 함수 생성
export const onAddLetter = (payload) => {
    return {
        type: ADD_LETTER,
        payload
    };
}

export const onDeleteLetter = (payload) => {
    return {
        type: DELETE_LETTER,
        payload
    };
}

export const onUpdateLetter = (payload) => {
    return {
        type: UPDATE_LETTER,
        payload
    };
}

export const filterLetters = (letters, filter) => {
    if (filter === 'All') return letters;
    return letters.filter(letter => letter.writedTo === filter);
}



const letter = (state = letterInitialState, action) => {
    switch (action.type) {
        case ADD_LETTER:
            return [
                ...state,
                action.payload
            ];
        case DELETE_LETTER:
            return state.filter(letter => letter.id !== action.payload);
        case UPDATE_LETTER:
            return state.map(letter => letter.id === action.payload.id ? action.payload : letter);
        default:
            return state;
    }
};

export default letter;
