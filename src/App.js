import { Provider } from 'react-redux';
import './App.css';
import Body from './Compoents/Body';
import appStore from './utiles/appStore';

function App() {
  return (
    <div >
      <Provider store={appStore}><Body/></Provider>
    </div>
    
  );
}

export default App;
