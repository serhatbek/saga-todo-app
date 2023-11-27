import './TodoContainer.scss';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import TodoItem from '../todoItem/todoItem';

const TodoContainer = () => {
  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <AddTodoItem />
      <div className='box background'>
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoContainer;
