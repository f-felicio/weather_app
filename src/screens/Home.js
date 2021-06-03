import React from 'react';
import styled from 'styled-components';

// #COMPONENTS
import Header from '../components/Header';
import Days from '../components/Days';

export default function Home({route, navigation}) {
  let city = route.params?.city ?? null;
  let weather = route.params?.weather ?? null;
  let daysList = route.params?.daysList ?? null;

  return (
    <MainContainer>
      <Btn
        onPress={() => {
          navigation.goBack();
        }}>
        <BtnText>Search another city</BtnText>
      </Btn>
      <Header weather={weather} city={city} />
      <Days list={daysList} />
    </MainContainer>
  );
}

const MainContainer = styled.SafeAreaView`
  background: #f9f7eb;
  flex: 1;
`;
const Btn = styled.TouchableOpacity`
  flex-direction: column;
  width: 150px;
  margin: 20px 0 0 20px;
  padding: 6px 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: #1ac0c6;
  box-shadow: 0 4px 6px rgba(136, 150, 200, 0.5);
  elevation: 1;
  z-index: 1;
`;

const BtnText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
`;
