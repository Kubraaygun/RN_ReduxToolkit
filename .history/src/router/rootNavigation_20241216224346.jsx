import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Users} />
    </Stack.Navigator>
  );
}
