import './App.css';
import {Header} from './Header';
import {History} from './History';
import {AddTransaction} from './AddTransaction';
import {ContextProvider} from './GetContext';

function App() {
  return (
    <ContextProvider>    
      <div className='App'>   
        <Header></Header>
        <History></History>
        <AddTransaction></AddTransaction>
      </div>
    </ContextProvider>
  );
}

export default App;
