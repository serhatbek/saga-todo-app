import './TodoItem.scss';
import Button from '../Button/Button';
import { RiDeleteBin6Fill, RiEditBoxFill, RiEdit2Fill } from 'react-icons/ri';
import Checkbox from '../Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Input from '../Input/Input';
import actions from '../../redux/actions';

const TodoItem = ({ todo, todoClass }) => {
  const { text, id } = todo;
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(text);
  const dispatch = useDispatch();

  const handleDelete = (todoID) => {
    dispatch({ type: actions.DELETE_TODO, payload: { id: todoID } });
  };

  const handleEdit = (e) => {
    setName(text);
    if (edit) {
      dispatch({
        type: actions.EDIT_TODO,
        payload: {
          ...todo,
          text: name,
        },
      });
    }
    setEdit(!edit);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClickOutside = (e) => {
    if (edit && e.target.tagName !== 'INPUT') {
      handleEdit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  useEffect(() => {
    if (edit) {
      document.addEventListener('mousedown', handleClickOutside);

      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [edit]);

  return (
    <div className={`todo-item ${todoClass ? todoClass : ''}`}>
      {edit ? (
        <Input
          value={name}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      ) : (
        <Checkbox label={text} />
      )}
      <div className='todo-item__actions flex'>
        <Button
          btnAction={handleEdit}
          iconLeft={edit ? <RiEdit2Fill /> : <RiEditBoxFill />}
        ></Button>
        <Button
          btnAction={() => handleDelete(id)}
          iconLeft={<RiDeleteBin6Fill />}
        ></Button>
      </div>
    </div>
  );
};

export default TodoItem;
