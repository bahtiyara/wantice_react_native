import React from 'react';
import styled from 'styled-components';
import { colors } from './src/components/base';
import Workout from './src/routes/Workout';

const App = () => {
  return (
    <StyledSafeAreaView>
      <Workout />
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${colors.background};
`

export default App;