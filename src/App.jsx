import 'antd/dist/antd.css';
import './assets/css/styles.scss';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';

function App() {
  return (
    <>
      <div className='container flex flex--align flex--justify'>
        <AddTodoItem />
      </div>
    </>
  );
}

export default App;
