// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './app/screens/WelcomeScreen';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="sign-in" component={WelcomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <WelcomeScreen />
  );
}

export default App;