import { useSelector } from 'react-redux';
import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import Todo from '../Todo/Todo';
import { selectTodoItems } from '../../redux/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodoItems);

  return (
    <>
      {todos ? (
        <Grid>
          {todos.map((item, index) => (
            <Todo
              key={item.id}
              id={item.id}
              text={item.text}
              counter={index + 1}
            />
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};

export default TodoList;
