import fakeLetter from '../../letters/fakeData.json';
const ADD_LETTER = 'letter/add';
const DELETE_LETTER = 'letter/delete';
const UPDATE_LETTER = 'letter/update';


export let letters = getLetters();
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



const letter = (state = letters, action) => {
    switch (action.type) {
        case ADD_LETTER:
            letters = [...state, action.payload];
            saveLetters();
            return letters;
        case DELETE_LETTER:
            letters = state.filter(letter => letter.id !== action.payload);
            saveLetters();
            return letters;
        case UPDATE_LETTER:
            letters = state.map(letter => letter.id === action.payload.id ? action.payload : letter);
            saveLetters();
            return letters;
        default:
            return state;
    }
};

function getLetters() {
    const letters = localStorage.getItem('letters');
    return letters ? JSON.parse(letters) : fakeLetter
}

function saveLetters() {
    localStorage.setItem('letters', JSON.stringify(letters))
}

export default letter;
