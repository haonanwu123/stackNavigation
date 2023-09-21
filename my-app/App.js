import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} options={{title:"Welcome"}} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown: false}} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}
