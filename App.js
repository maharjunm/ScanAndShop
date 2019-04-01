import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ScanScreen from './src/components/ScanScreen';
import ViewCart from './src/components/ViewCart';

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  ScanScreen: {screen: ScanScreen},
  ViewCart: {screen: ViewCart},
});

const App = createAppContainer(MainNavigator);

export default App;