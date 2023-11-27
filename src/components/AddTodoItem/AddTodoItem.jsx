import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';

const AddTodoItem = () => {
  return (
    <div className='add-todo'>
      <Button iconLeft={<IoMdAddCircle />}>ADD</Button>
    </div>
  );
};

export default AddTodoItem;
