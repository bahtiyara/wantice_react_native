import React from 'react';
import styled from 'styled-components';
import { colors } from './src/styles/base';
import Workout from './src/routes/Workout';

const App = () => {
  return (
    <SafeAreaView>
      <Workout />
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: ${colors.background};
`

export default App;