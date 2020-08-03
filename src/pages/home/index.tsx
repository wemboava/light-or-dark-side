import React from 'react';

import { Container, Content } from './styles';

const Home: React.FC = () => {
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
          <button type="button">START</button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
