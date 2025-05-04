import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();

  const handleTodo = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const text = form.elements.search.value.trim();
    if (text) {
      dispatch(addTodo({ text, id: nanoid() }));
    }
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleTodo}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        id="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
