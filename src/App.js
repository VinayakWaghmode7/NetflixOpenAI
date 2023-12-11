import './App.css';
import Body from './Compoents/Body';
import appStore from './utiles/appStore';
import { Provider } from 'react-redux';



function App() {

 
  return (
    <div >
      <Provider store={appStore}><Body/>
      </Provider>
    </div>
    
  );
}

export default App;
