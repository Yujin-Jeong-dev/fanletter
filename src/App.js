import Banner from './components/Banner';
import { Outlet } from 'react-router-dom';
import Globalstyle from 'GlobalStyle';
import { LetterContextProvider } from 'context/LettersContext';


function App() {
  return (
    <>
      <Globalstyle />
      <Banner />
      <LetterContextProvider>
        <Outlet />
      </LetterContextProvider>
    </>
  );
}

export default App;
