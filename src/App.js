import { Provider } from 'react-redux';
import './App.css';
import AppRouts from './AppRouts';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouts />
      </Provider>

    </>

  );
}

export default App;
