import { ContextProvider } from './AppContext';
import Info from './views/Info'
import Main from './views/Main'
import SpecialRules from './views/SpecialRules'
import './App.css';

function App() {


  return (
    <div className='app'>
      <ContextProvider>
        <Info />
        <Main />
        <SpecialRules />
      </ContextProvider>
    </div>
  );
}

export default App;
