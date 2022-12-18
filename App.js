import { StyleSheet, Text, View } from 'react-native';
import Account from '././components/Account/Account';
import Classroom from '././components/Classroom/Classroom';
import GameInfo from '././components/GameInfo/GameInfo';
import Games from '././components/Games/Games';
import Home from '././components/Home/Home';
import Market from './components/Market/Market';
import Messages from './components/Messages/Messages';
import MyStuff from './components/MyStuff/MyStuff';
import People from './components/People/People';
import Profiles from './components/Profiles/Profiles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Account' component={Account}/>
        <Stack.Screen name='Classroom' component={Classroom}/>
        <Stack.Screen name='GameInfo' component={GameInfo}/>
        <Stack.Screen name='Games' component={Games}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Market' component={Market}/>
        <Stack.Screen name='Messages' component={Messages}/>
        <Stack.Screen name='MyStuff' component={MyStuff}/>
        <Stack.Screen name='People' component={People}/>
        <Stack.Screen name='Profiles' component={Profiles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
