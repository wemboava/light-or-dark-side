import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = async () => {
    const lightPromise = api.get('/people/1').then(() => ({ side: 'light' }));
    const darkPromise = api.get('/people/4').then(() => ({ side: 'dark' }));

    await Promise.race([lightPromise, darkPromise]).then((value) => {
      return history.push(`/${value.side}`);
    });
  };

  return (
    <Container>
      <Content>
        <div className="main">
          <h1>
            Welcome to <span className="main__hire-me">iClinic</span>
          </h1>
          <h2 className="main__subtitle">FRONTEND CHALLENGE</h2>
        </div>
        <div className="actions">
          <button onClick={handleClick} type="button">
            START
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
