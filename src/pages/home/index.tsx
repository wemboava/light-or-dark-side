import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import Loader from '../../components/loader';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const [loader, setLoader] = useState<boolean>(false);

  const handleSide = async () => {
    setLoader(true);
    const lightPromise = api.get('/people/1').then(() => ({ side: 'light' }));
    const darkPromise = api.get('/people/4').then(() => ({ side: 'dark' }));

    await Promise.race([lightPromise, darkPromise]).then((value) => {
      // setTimeout is just to show the effect of the loader
      setTimeout(() => {
        return history.push(`/${value.side}`);
      }, 2500);
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
          <button onClick={handleSide} type="button">
            START
          </button>
        </div>
      </Content>
      {loader && <Loader />}
    </Container>
  );
};

export default Home;
