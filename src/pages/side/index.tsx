import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../service/api';

import { Container, Content } from './styles';

import DarkSideImage from '../../assets/images/dark.png';
import LightSideImage from '../../assets/images/light.png';

enum SideThemeKeys {
  light = 'light',
  dark = 'dark',
}

interface ICurrentSideTheme {
  backgroundColor: string;
  fontColor: string;
  backgroundColorButton: string;
  fontColorButton: string;
  sideImage: string;
  masterName: string;
}

const sideTheme = {
  dark: {
    backgroundColor: '#2B2B2B',
    fontColor: '#fff',
    backgroundColorButton: '#fff',
    fontColorButton: '#2A2A2A',
    sideImage: DarkSideImage,
    masterName: 'Darth Vader',
  },
  light: {
    backgroundColor: '#FBFE63',
    fontColor: '#2A2A2A',
    backgroundColorButton: '#2A2A2A',
    fontColorButton: '#FBFE63',
    sideImage: LightSideImage,
    masterName: 'Luke Skywalker',
  },
};

const Side: React.FC = () => {
  const history = useHistory();
  const router = useRouteMatch();

  const [currentSideTheme, setCurrentSideTheme] = useState<ICurrentSideTheme>(
    {} as ICurrentSideTheme,
  );

  useEffect(() => {
    const key: SideThemeKeys = router.path.replace('/', '') as SideThemeKeys;

    setCurrentSideTheme(sideTheme[key] as ICurrentSideTheme);
  }, [router]);

  const handleClick = async () => {
    const lightPromise = api.get('/people/1').then(() => ({ side: 'light' }));
    const darkPromise = api.get('/people/4').then(() => ({ side: 'dark' }));

    await Promise.race([lightPromise, darkPromise]).then((value) => {
      return history.push(`/${value.side}`);
    });
  };

  return (
    <Container theme={currentSideTheme}>
      <Content theme={currentSideTheme}>
        <div className="actions">
          <button onClick={handleClick} type="button">
            choose your path again, Padawan
          </button>
        </div>
        <div className="side-image">
          <img src={currentSideTheme?.sideImage} alt="dark side" />
        </div>
        <h2>
          Your master is{' '}
          <span className="hire-me">{currentSideTheme?.masterName}</span>
        </h2>
      </Content>
    </Container>
  );
};

export default Side;
