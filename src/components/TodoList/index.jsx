import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListDiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListDiv>
      {todos.map((ele, i) => {
        return (
          <TodoListItem
            todo={ele}
            key={i}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </TodoListDiv>
  );
};

export default TodoList;
