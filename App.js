import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import transaction from "./transactionPage"; 
import complete from "./complete"; 

const Stack = createNativeStackNavigator();
 const App = () => 
 {
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName={complete}>
        <Stack.Screen name="transaction" component={transaction} />
        <Stack.Screen name="complete" component={complete} />
      </Stack.Navigator>
      </NavigationContainer>
    )
}           
 const styles = StyleSheet.create({})
 export default App