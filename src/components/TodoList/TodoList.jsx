import { useSelector } from 'react-redux';
import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import Todo from '../Todo/Todo';
import { selectFilteredItems } from '../../redux/selectors';

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredItems);

  return (
    <>
      {filteredTodos && filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((item, index) => (
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
