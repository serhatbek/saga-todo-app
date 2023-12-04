import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './TodoFooter.scss';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const TodoFooter = () => {
  const { allTodoItems } = useSelector((state) => state.Todo);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch({
      type: actions.DELETE_ALL_TODO,
    });
  };

  return (
    <div className='todo-footer flex flex--align background'>
      <p>{allTodoItems?.length} items left</p>
      <Button btnAction={handleClearAll}>Clear All</Button>
    </div>
  );
};

export default TodoFooter;
