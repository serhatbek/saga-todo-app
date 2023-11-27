import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';
import Input from '../Input/Input';
import './AddTodoItem.scss';
import { useState } from 'react';

const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setInputValue('');
  };

  return (
    <div className='add-todo'>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className='input'
        placeholder='Add todo'
      />
      <Button iconLeft={<IoMdAddCircle />}>ADD</Button>
    </div>
  );
};

export default AddTodoItem;
