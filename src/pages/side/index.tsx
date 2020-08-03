import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../service/api';

import Loader from '../../components/loader';

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

  const [loader, setLoader] = useState<boolean>(false);
  const [currentSideTheme, setCurrentSideTheme] = useState<ICurrentSideTheme>(
    {} as ICurrentSideTheme,
  );

  useEffect(() => {
    const key: SideThemeKeys = router.path.replace('/', '') as SideThemeKeys;

    setCurrentSideTheme(sideTheme[key] as ICurrentSideTheme);
  }, [router]);

  const handleSide = async () => {
    setLoader(true);
    const lightPromise = api.get('/people/1').then(() => ({ side: 'light' }));
    const darkPromise = api.get('/people/4').then(() => ({ side: 'dark' }));

    await Promise.race([lightPromise, darkPromise]).then((value) => {
      // setTimeout is just to show the effect of the loader
      setTimeout(() => {
        setLoader(false);
        return history.push(`/${value.side}`);
      }, 2500);
    });
  };

  return (
    <Container theme={currentSideTheme}>
      <div className="back-container">
        <button onClick={() => history.push('/')} type="button">
          <svg width="31" height="26" viewBox="0 0 31 26" fill="none">
            <path d="M31.0001 11.3333H6.69006L15.5117 2.51166L13.1551 0.154999L0.310059 13L13.1551 25.845L15.5117 23.4883L6.69006 14.6667H31.0001V11.3333Z" />
          </svg>
          <span>back</span>
        </button>
      </div>
      <Content theme={currentSideTheme}>
        <div className="actions">
          <button onClick={handleSide} type="button">
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
      {loader && <Loader />}
    </Container>
  );
};

export default Side;
