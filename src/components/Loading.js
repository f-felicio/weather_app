import React from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import animationData from '../assets/loading.json';

export default function Loading() {
  return (
    <Container>
      <LottieView source={animationData} autoPlay={true} loop={true} />
    </Container>
  );
}

const Container = styled.View`
  width: 60%;
  height: 50%;
  justify-content: center;
  align-items: center;
  elevation: 1;
  z-index: 1;
  align-self: center;
`;
