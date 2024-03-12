import { NavigationContainer } from '@react-navigation/native';
import AddWorkout from '../screens/AddWorkout';
import ListofWorkouts from '../screens/ListofWorkouts';
import Settings from '../screens/Settings';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { PaperProvider } from 'react-native-paper';
import { Style, MyTheme } from '../styles/Style'

const Tab = createMaterialBottomTabNavigator()

export default function App() {

  return (
    <PaperProvider theme={MyTheme}>
        <NavigationContainer>
            <Tab.Navigator 
              style={Style.container}
              activeColor= '#2a5f82'
              inactiveColor= '#c53ba7'
              barStyle={{ backgroundColor: '#f9e9f6' }}
              >
            <Tab.Screen 
              name="Add Workout" 
              component={AddWorkout} 
              options={{tabBarIcon: () => 
                <MaterialIcons name='add' size={30} color='#2a5f82'/>}} />
            <Tab.Screen 
              name='List of workouts' 
              component={ListofWorkouts} 
              options={{tabBarIcon: () => 
                <MaterialIcons name='list' size={30} color='#2a5f82'/>}}/>
            <Tab.Screen 
              name="Settings" 
              component={Settings} 
              options={{tabBarIcon: () => 
                <MaterialIcons name='settings' size={30} color='#2a5f82'/>}} />
             </Tab.Navigator>
        </NavigationContainer>
    </PaperProvider>  
    );
}