import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import ChampionRandom from './screens/ChampionRandom';
import TeamBuilder from './screens/TeamBuilder';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="ChampionRandom" component={ChampionRandom} />

        <Stack.Screen name="TeamBuilder" component={TeamBuilder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//Made by: Froji//
