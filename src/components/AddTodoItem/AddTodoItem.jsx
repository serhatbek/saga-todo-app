import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';
import Input from '../Input/Input';
import './AddTodoItem.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    dispatch();
    {
      id: nanoid();
      text: inputValue;
    }
    setInputValue('');
  };

  return (
    <div className='add-todo'>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Add todo'
      />
      <Button iconLeft={<IoMdAddCircle />}>ADD</Button>
    </div>
  );
};

export default AddTodoItem;
