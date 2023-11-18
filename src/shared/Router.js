import App from 'App';
import Home from 'pages/Home';
import LetterDetail from 'pages/LetterDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='' element={<Home />} />
                    <Route path='letterDetail/:letterId' element={<LetterDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;