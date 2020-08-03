import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 100vh;
  color: #2c97d1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .main {
    margin-bottom: 150px;
    h1 {
      font-weight: 400;
      font-size: 72px;
      text-align: center;
      @media (max-width: 800px) {
        font-size: 64px;
      }
    }
    &__hire-me {
      font-weight: bold;
    }
    &__subtitle {
      font-weight: 300;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.35em;
    }
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 189px;
      height: 56px;

      background: #2c97d1;
      border-radius: 10px;

      font-weight: 800;
      font-size: 18px;
      letter-spacing: 0.25em;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #ffffff;
      transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
      &:hover {
        background-color: #3d97d1;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
