import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {ADDNEWUSER, REMOTEUSERS, USERDETAIL, USERS} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import {User} from 'iconsax-react-native';
import UserDetail from '../screens/users/userDetail';
import RemoteUserCard from '../components/users/remoteUserCard';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUserCard} />
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
