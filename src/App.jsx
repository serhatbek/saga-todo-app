import 'antd/dist/antd.css';
import './assets/css/styles.scss';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    </>
  );
}

export default App;
