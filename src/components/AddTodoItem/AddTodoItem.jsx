import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';
import Input from '../Input/Input';
import './AddTodoItem.scss';
import { useState } from 'react';

const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState('');

  // Event handler to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to clear input on blur
  const handleInputBlur = () => {
    setInputValue(''); // Clear input value on blur
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
