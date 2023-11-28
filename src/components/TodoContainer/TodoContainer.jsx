import './TodoContainer.scss';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import TodoItem from '../todoItem/todoItem';
import { useSelector } from 'react-redux';
import TodoFooter from '../TodoFooter/TodoFooter';

const TodoContainer = () => {
  const { todoList } = useSelector((state) => state.allTodoItems);

  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <AddTodoItem />
      <div className='box background'>
        {todoList?.length > 0 ? (
          todoList?.map((todo) => {
            const { text, id } = todo;
            return <TodoItem key={id} todoClass='flex' {...todo} />;
          })
        ) : (
          <p className='empty'>Add new tasks...</p>
        )}
      </div>
      <TodoFooter />
    </div>
  );
};

export default TodoContainer;
