import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnDesigns from "react-native-vector-icons/AntDesign";
import {Header, Wrapper, BalanceContainer, BalanceTitle, Balance, Container} from './styles';

import Sugestions from '../../components/Sugestions';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AnDesigns name="gift" size={30} color="#10c86e" />
        </Header>

        <Sugestions />
      </Container>
      
    </Wrapper>
  );
};

export default Home;
