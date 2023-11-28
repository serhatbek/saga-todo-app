import Button from '../Button/Button';
import { IoMdAddCircle } from 'react-icons/io';
import Input from '../Input/Input';
import './AddTodoItem.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from '../../redux/Todo/actions';

const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: nanoid(),
        text: inputValue,
      })
    );

    setInputValue('');
    console.log('add', inputValue);
  };

  return (
    <div className='add-todo'>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Add todo'
      />
      <Button btnAction={handleAddTodo} iconLeft={<IoMdAddCircle />}>
        ADD
      </Button>
    </div>
  );
};

export default AddTodoItem;
