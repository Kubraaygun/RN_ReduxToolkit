import {StyleSheet} from 'react-native';
import ThemeColors from '../theme/themeColors';

const defaultScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: ThemeColors.GREEN,
    headerShown: false,
  },
});
export default defaultScreenStyle;
