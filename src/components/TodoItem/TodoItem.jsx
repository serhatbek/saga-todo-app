import './TodoItem.scss';
import Button from '../Button/Button';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Checkbox from '../Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/Todo/actions';

const TodoItem = ({ text, id, todoClass }) => {
  const dispatch = useDispatch();

  const handleDelete = (todoID) => {
    dispatch(deleteTodo({ id: todoID }));
    console.log(todoID);
  };

  return (
    <div className={`todo-item ${todoClass ? todoClass : ''}`}>
      <Checkbox label={text} />
      <Button
        btnAction={() => handleDelete(id)}
        iconLeft={<RiDeleteBin6Fill />}
        // onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
