import styled from 'styled-components';

const TodoTemplateDiv = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background-color: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background: white;
  }
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateDiv>
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </TodoTemplateDiv>
  );
};

export default TodoTemplate;
