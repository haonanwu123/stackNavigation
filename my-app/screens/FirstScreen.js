import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function FirstScreen({navigation}) {
    return (
    <View style={styles.container}>
      <Button
       title="Navigate to first screen with Chinese"
       onPress={(() => navigation.navigate("SecondScreen", {language:"chinese"}))}
      />
      <Button
       title="Navigate to second screen with english"
       onPress={(() => navigation.navigate("SecondScreen", {language:"english"}))}
      />
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});