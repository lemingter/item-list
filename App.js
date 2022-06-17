import styles from './styles';
import { View } from 'react-native';
import ListContainer from './ListContainer';


export default function App() {
  return (
    <View style = { styles.container }>
      <ListContainer />
    </View>
  );
}
