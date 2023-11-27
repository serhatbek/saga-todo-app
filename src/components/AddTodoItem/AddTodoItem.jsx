import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';
import Input from '../Input/Input';
import './AddTodoItem.scss';

const AddTodoItem = () => {
  return (
    <div className='add-todo'>
      <Input className='input' placeholder='Add todo' />
      <Button iconLeft={<IoMdAddCircle />}>ADD</Button>
    </div>
  );
};

export default AddTodoItem;
