import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveEdit, setCurretTodo } from '../../redux/todoSlice';
import { useEffect, useState } from 'react';
import { selectCurrentTodo } from '../../redux/selectors';

const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(currentTodo?.text || '');
  }, [currentTodo]);

  const handleCancelEdit = event => {
    event.preventDefault();
    dispatch(setCurretTodo(null));
  };

  const handleSaveEdit = event => {
    event.preventDefault();
    dispatch(saveEdit({ ...currentTodo, text }));
  };

  return (
    <form className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus
      />
      <button
        className={style.submitButton}
        type="submit"
        onClick={handleSaveEdit}
      >
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={handleCancelEdit}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
