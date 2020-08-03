import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 100px;
    letter-spacing: 0.35em;
  }

  .loader {
    width: 80px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px -40px;
    z-index: 1000;
  }

  .lightsaber {
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #666;
    border-radius: 1px;
    bottom: 0;
  }

  .lightsaber.ls-left {
    left: 0;
  }

  .lightsaber.ls-right {
    right: 0;
  }

  .lightsaber:before {
    position: absolute;
    content: ' ';
    display: block;
    width: 2px;
    height: 25px;
    max-height: 1px;
    left: 1px;
    top: 1px;
    background-color: #fff;
    border-radius: 1px;
    transform: rotateZ(180deg);
    transform-origin: center top;
  }

  .lightsaber:after {
    position: absolute;
    content: ' ';
    display: block;
    width: 2px;
    height: 2px;
    left: 1px;
    top: 4px;
    background-color: #fff;
    border-radius: 50%;
  }

  .ls-particles {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 1px;
    height: 5px;
    background-color: #fff;
    transform: rotateZ(0deg);
  }

  .lightsaber.ls-green:before {
    animation: showlightgreen 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-red:before {
    animation: showlightred 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-left {
    animation: fightleft 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-right {
    animation: fightright 2s ease-in-out infinite 1s;
  }

  .ls-particles.ls-part-1 {
    animation: particles1 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-2 {
    animation: particles2 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-3 {
    animation: particles3 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-4 {
    animation: particles4 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-5 {
    animation: particles5 2s ease-out infinite 1s;
  }

  @keyframes showlightgreen {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }

    5% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    10% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }
  }

  @keyframes showlightred {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }

    20% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    25% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }
  }

  @keyframes fightleft {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      left: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    40% {
      -webkit-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
      left: 0;
      bottom: 2px;
    }

    45% {
      -webkit-transform: rotateZ(65deg);
      transform: rotateZ(65deg);
      left: 0;
    }

    65% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 30px;
      bottom: 10px;
    }

    95% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
      left: 0;
      bottom: 0;
    }
  }

  @keyframes fightright {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      right: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    45% {
      -webkit-transform: rotateZ(-45deg);
      transform: rotateZ(-45deg);
      right: 0;
      bottom: 2px;
    }

    50% {
      -webkit-transform: rotateZ(-65deg);
      transform: rotateZ(-65deg);
      right: 0;
    }

    68% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 27px;
      bottom: 13px;
    }

    95% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(-360deg);
      transform: rotateZ(-360deg);
      right: 0;
      bottom: 0;
    }
  }

  @keyframes particles1 {
    0% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(35deg) translateY(0px);
    }

    63% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(35deg) translateY(0px);
    }

    64% {
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(35deg) translateY(0px);
    }

    100% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(35deg) translateY(-30px);
    }
  }

  @keyframes particles2 {
    0% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-65deg) translateY(0px);
    }

    63% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-65deg) translateY(0px);
    }

    64% {
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(-65deg) translateY(0px);
    }

    95% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-65deg) translateY(-40px);
    }

    100% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-65deg) translateY(-40px);
    }
  }

  @keyframes particles3 {
    0% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-75deg) translateY(0px);
    }

    63% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-75deg) translateY(0px);
    }

    64% {
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(-75deg) translateY(0px);
    }

    97% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-75deg) translateY(-35px);
    }

    100% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-75deg) translateY(-35px);
    }
  }

  @keyframes particles4 {
    0% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-25deg) translateY(0px);
    }

    63% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-25deg) translateY(0px);
    }

    64% {
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(-25deg) translateY(0px);
    }

    97% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-25deg) translateY(-30px);
    }

    100% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(-25deg) translateY(-30px);
    }
  }

  @keyframes particles5 {
    0% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(65deg) translateY(0px);
    }

    63% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(65deg) translateY(0px);
    }

    64% {
      background-color: rgba(255, 255, 255, 1);
      transform: rotateZ(65deg) translateY(0px);
    }

    97% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(65deg) translateY(-35px);
    }

    100% {
      background-color: rgba(200, 51, 51, 0);
      transform: rotateZ(65deg) translateY(-35px);
    }
  }
`;
