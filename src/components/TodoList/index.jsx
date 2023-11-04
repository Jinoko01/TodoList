import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListDiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );

  return (
    <TodoListDiv>
      <List
        width={512}
        height={510.03}
        rowCount={todos.length}
        rowHeight={56.67}
        rowRenderer={rowRenderer}
        list={todos}
        style={{ outline: 'none' }}
      />
    </TodoListDiv>
  );
};

export default React.memo(TodoList);
