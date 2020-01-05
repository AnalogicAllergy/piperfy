import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  /**
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 320px;
   */
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)}
    /**
    somente a partir da segunda div em diante / cards
   */ & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background: #3b5dfd;
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
