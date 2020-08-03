import styled from 'styled-components';

interface ITheme {
  theme: {
    backgroundColor: string;
    fontColor: string;
    backgroundColorButton: string;
    fontColorButton: string;
  };
}

export const Container = styled.div<ITheme>`
  max-width: 100%;
  margin: auto;
  background: ${({ theme }) => theme.backgroundColor};
`;

export const Content = styled.div<ITheme>`
  height: 100vh;
  color: ${({ theme }) => theme.fontColor};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    & .hire-me {
      font-weight: bold;
    }
  }
  .side-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 30px 0;
    & img {
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 347px;
      height: 56px;

      background: ${({ theme }) => theme.backgroundColorButton};
      border-radius: 10px;

      font-weight: 800;
      font-size: 17px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.fontColorButton};
      transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
