import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {USERS} from '../utils/routes';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={Users} />
    </Stack.Navigator>
  );
}
