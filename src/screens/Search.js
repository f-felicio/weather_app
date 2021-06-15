import React, {useState} from 'react';
import styled from 'styled-components';
import {useFocusEffect} from '@react-navigation/native';

// #SERVICES
import getWeather from '../services/getWeather';
import geo from '../services/geo';
import Loading from '../components/Loading';

export default function Search({navigation}) {
  const [city, setCity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setCity('');
    }, []),
  );
  const getGeo = async () => {
    console.log(city);
    const result = await geo(city);
    console.log(result);
    if (result.lat && result.lng) {
      getData(result.lat, result.lng);
    } else {
      setErrorMsg('Oops... not found. Try again.');
    }
  };

  const getData = async (lat, lon) => {
    const weather = await getWeather(lat, lon);
    const week = weather.daily;
    const fiveDays = week.slice(1, 5);
    const daysList = [];
    fiveDays.map(item => {
      const day = item;
      const realDate = new Date(day.dt * 1000);
      const date = `${realDate.getMonth() + 1}/${realDate.getDate()}`;
      day.date = date;
      daysList.push(day);
    });
    navigation.navigate('Home', {weather, daysList, city});
  };

  return (
    <MainContainer>
      <Loading />
      <Text>Type a city</Text>
      <FormInput
        autoCapitalize="words"
        autoCorrect={false}
        placeholder="tokyo, new york, paris"
        underlineColorAndroid={'transparent'}
        onChangeText={text => {
          setCity(text);
          setErrorMsg('');
        }}
        value={city}
      />
      <BtnSearch onPress={getGeo}>
        <BtnText>Search</BtnText>
      </BtnSearch>
      <ErrorText>{errorMsg}</ErrorText>
    </MainContainer>
  );
}

const MainContainer = styled.SafeAreaView`
  background: #f9f7eb;
  flex: 1;
`;
const Text = styled.Text`
  color: #2a2b2c;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
const FormInput = styled.TextInput`
  background-color: transparent;
  margin-bottom: 20px;
  width: 80%;
  padding: 5px 0;
  height: 35px;
  border-bottom-width: 1px;
  border-bottom-color: #a5a6a7;
  font-size: 20px;
  font-weight: 200;
  margin-top: 10px;
  align-self: center;
  text-align: center;
  text-transform: capitalize;
`;
const ErrorText = styled.Text`
  color: #2a2b2c;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
`;
const BtnSearch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fdfcf7;
  border-radius: 25px;
  height: 45px;
  width: 70%;
  align-self: center;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 1px 3px 2px rgba(136, 150, 200, 0.3);
  elevation: 3;
`;

const BtnText = styled.Text`
  color: #2a2b2c;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;
