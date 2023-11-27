import './TodoItem.scss';
import Button from '../Button/Button';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Checkbox from '../Checkbox/Checkbox';
// import { Checkbox } from 'antd';

const TodoItem = () => {
  return (
    <div className='todo-item flex'>
      <Checkbox label='Kiss Luna' />
      {/* <Checkbox>Kiss Luna</Checkbox> */}
      <Button iconLeft={RiDeleteBin6Fill}>Delete</Button>
    </div>
  );
};

export default TodoItem;
