import App from 'App';
import Home from 'pages/Home';
import fakeLetter from 'letters/fakeData.json';
import LetterDetail from 'pages/LetterDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const Router = () => {
    const [letters, setLetters] = useState(fakeLetter);
    const handleAdd = (letter) => {
        setLetters([...letters, letter])
    }
    const handleDelete = (deleteId) => {
        setLetters(letters.filter(letter => letter.id !== deleteId));
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='' element={<Home letters={letters} onAdd={handleAdd} />} />
                    <Route path='letterDetail/:letterId' element={<LetterDetail letters={letters} onDelete={handleDelete} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;