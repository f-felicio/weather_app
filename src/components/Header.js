import React from 'react';
import styled from 'styled-components';

export default function Header({weather, city}) {
  return (
    <Container>
      <Col>
        <CityName>{city}</CityName>
        <Description>{weather.current.weather[0].description}</Description>
        <Row>
          <Min>L:{parseInt(weather.daily[0].temp.min, 10)} Fº</Min>
          <Max>H:{parseInt(weather.daily[0].temp.max, 10)} Fº</Max>
        </Row>
      </Col>
      <Col>
        <WeatherIconContainer>
          <WeatherIcon
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`,
            }}
          />
        </WeatherIconContainer>
        <Temperature>{parseInt(weather.current.temp, 10)} Fº</Temperature>
      </Col>
    </Container>
  );
}

const Row = styled.View`
  flex-direction: row;
`;
const Col = styled.View`
  flex: 1;
`;

const Container = styled.View`
  background: #fdfcf7;
  padding: 10px 20px;
  flex-direction: row;
  margin-top: 10px;
`;

const CityName = styled.Text`
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 800;
  color: #2a2b2c;
`;
const Description = styled.Text`
  font-size: 12px;
  color: #2a2b2c;
  margin-bottom: 16px;
  text-transform: capitalize;
`;
const Min = styled.Text`
  font-size: 18px;
  color: #2a6fdb;
`;
const Max = styled.Text`
  font-size: 18px;
  color: #c7417b;
  margin-left: 30px;
`;

const WeatherIconContainer = styled.View`
  width: 72px;
  height: 46px;
  overflow: hidden;
  align-self: flex-end;
`;
const WeatherIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

const Temperature = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #2a2b2c;
  text-align: right;
  margin-top: 10px;
`;
