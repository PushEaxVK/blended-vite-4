import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import TodoList from './components/TodoList/TodoList';
import EditForm from './components/EditForm/EditForm';
import { selectCurrentTodo } from './redux/selectors';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {currentTodo ? <EditForm /> : <Form />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
