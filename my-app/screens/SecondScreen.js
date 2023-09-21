import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/routers';

export default function SecondScreen({navigation, route}) {
    let language = route.params?.language;
    let greeting = language === "chinese" ? "你好" : "Hello";
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button 
        title='Go to Third Screen'
        onPress={() => navigation.push("ThirdScreen")}
      />
      <Button 
        title='Go to Third Screen with Replace'
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("ThirdScreen")
          )
        }}
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