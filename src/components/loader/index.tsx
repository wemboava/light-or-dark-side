import React from 'react';
import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <div className="loader">
        <div className="ls-particles ls-part-1" />
        <div className="ls-particles ls-part-2" />
        <div className="ls-particles ls-part-3" />
        <div className="ls-particles ls-part-4" />
        <div className="ls-particles ls-part-5" />
        <div className="lightsaber ls-left ls-green" />
        <div className="lightsaber ls-right ls-red" />
      </div>
      <span>LOADING...</span>
    </Container>
  );
};

export default Loader;
