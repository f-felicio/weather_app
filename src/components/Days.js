import React from 'react';
import styled from 'styled-components';
import {ScrollView} from 'react-native-gesture-handler';

export default function Days({list}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingVertical: 15}}>
      {list.map((item, index) => (
        <Card key={index}>
          <Col>
            <WeatherIconContainer>
              <WeatherIcon
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                }}
              />
            </WeatherIconContainer>
            <Description>{item.weather[0].description}</Description>
            <Row>
              <MinContainer>
                <Min>L:{parseInt(item.temp.min, 10)}ºF</Min>
              </MinContainer>
              <MaxContainer>
                <Max>H:{parseInt(item.temp.max, 10)}ºF</Max>
              </MaxContainer>
            </Row>
          </Col>
          <Col>
            <DateContainer>
              <Date>{item.date}</Date>
            </DateContainer>
            <Temperature>{parseInt(item.temp.day, 10)}º</Temperature>
          </Col>
        </Card>
      ))}
    </ScrollView>
  );
}

const Row = styled.View`
  flex-direction: row;
`;
const Col = styled.View`
  flex: 1;
`;

const Card = styled.View`
  width: 295px;
  height: 135px;
  border-radius: 15px;
  padding: 18px;
  justify-content: space-between;
  box-shadow: 3px 4px 4px rgba(136, 150, 200, 0.4);
  elevation: 1;
  margin-bottom: 10px;
  background-color: #fff;
  flex-direction: row;
  margin-bottom: 20px;
  align-self: center;
`;

const WeatherIconContainer = styled.View`
  width: 100px;
  height: 55px;
  overflow: hidden;
  margin-bottom: 8px;
  align-self: center;
`;
const WeatherIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
const Description = styled.Text`
  font-size: 12px;
  color: #2a2b2c;
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
  margin-bottom: 8px;
`;
const MinContainer = styled.View`
  background-color: #e9f0fb;
  border-radius: 20px;
  padding: 2px 10px;
`;
const Min = styled.Text`
  font-size: 12px;
  color: #2a6fdb;
  font-weight: bold;
`;
const MaxContainer = styled.View`
  background-color: #f9ebf1;
  border-radius: 20px;
  padding: 2px 10px;
  margin-left: 5px;
`;
const Max = styled.Text`
  font-size: 12px;
  color: #c7417b;
  font-weight: bold;
`;
const DateContainer = styled.View`
  background-color: #f2f2f3;
  border-radius: 20px;
  padding: 2px 10px;
  width: 60px;
  align-self: flex-end;
  height: 20px;
`;

const Date = styled.Text`
  font-size: 12px;
  color: #2a2b2c;
  font-weight: bold;
  text-align: center;
`;

const Temperature = styled.Text`
  font-size: 48px;
  color: #2a2b2c;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: right;
  margin-top: 30px;
`;
