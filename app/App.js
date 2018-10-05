import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home.js';
import ChatScreen from './screens/Chat.js';
import ContributeScreen from './screens/Contribute.js';
import InfoScreen from './screens/Info.js';

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Contribute: { screen: ContributeScreen },
    Info: { screen: InfoScreen }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'hidden'
  }
);

export default App;