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
  height: 100vh;
  max-width: 100%;
  margin: auto;
  background: ${({ theme }) => theme.backgroundColor};

  .back-container {
    padding: 30px;
    @media (max-width: 800px) {
      padding: 20px 0 0 20px;
    }
    button {
      display: flex;
      align-items: center;
      background: transparent;
      color: ${({ theme }) => theme.fontColor};
      svg {
        width: 30px;
        height: 25px;
        margin-right: 15px;
        path {
          fill: ${({ theme }) => theme.fontColor};
        }
      }
    }
  }
`;

export const Content = styled.div<ITheme>`
  color: ${({ theme }) => theme.fontColor};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    @media (max-width: 800px) {
      width: 80%;
      order: 2;
      font-size: 32px;
    }
    & .hire-me {
      font-weight: bold;
    }
  }
  .side-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 30px 0;
    @media (max-width: 800px) {
      order: 1;
    }
    & img {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      @media (max-width: 800px) {
        width: 250px;
        height: 250px;
      }
    }
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
      order: 3;
      margin-top: 30px;
    }
    button {
      height: 56px;

      background: ${({ theme }) => theme.backgroundColorButton};
      border-radius: 10px;
      padding: 0 20px;

      font-weight: 800;
      font-size: 17px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.fontColorButton};
      transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
      @media (max-width: 800px) {
        font-size: 15px;
      }
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
