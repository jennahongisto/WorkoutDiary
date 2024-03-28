import Navigation from './components/Navigation';
import { SettingsContext, WorkoutContext } from './components/Contexts'
import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Style, { MyTheme } from './styles/Style';

export default function App() {

  const [workouts, setWorkouts] = useState([])
  const [lengthUnit, setLengthUnit] = useState('km')

  return (
    <SettingsContext.Provider value={{lengthUnit, setLengthUnit}}>
     <WorkoutContext.Provider value={{workouts, setWorkouts}}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
          <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HamburgerMenu} />
            </Drawer.Navigator>
            </NavigationContainer>
            <Navigation/>
          </SafeAreaProvider>
        </PaperProvider>
      </WorkoutContext.Provider>
    </SettingsContext.Provider>
  );
}