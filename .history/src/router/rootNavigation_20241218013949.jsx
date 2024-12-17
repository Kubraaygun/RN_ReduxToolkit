import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {ADDNEWUSER, USERDETAIL, USERS} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import {User} from 'iconsax-react-native';
import UserDetail from '../screens/users/userDetail';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
