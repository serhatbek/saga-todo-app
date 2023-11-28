import './TodoItem.scss';
import Button from '../Button/Button';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Checkbox from '../Checkbox/Checkbox';

const TodoItem = ({ text, todoClass }) => {
  return (
    <div className={`todo-item ${todoClass ? todoClass : ''}`}>
      <Checkbox label={text} />
      <Button iconLeft={<RiDeleteBin6Fill />}>Delete</Button>
    </div>
  );
};

export default TodoItem;
