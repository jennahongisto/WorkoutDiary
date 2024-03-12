import { View, Modal, Alert } from "react-native";
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { useContext, useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Style } from "../styles/Style";
import { Calendar } from "react-native-calendars";
import { SettingsContext, WorkoutContext } from "../components/Contexts";



export default function AddWorkout() {

    const [value, setValue] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [visible, setVisible] = useState (false)
    const [date, setDate] = useState ('')
    const {setWorkouts} = useContext(WorkoutContext)
    const {lengthUnit} = useContext(SettingsContext)


    function dateSelected(day) {
        setVisible(false)
        setDate(day)
    }

    function addWorkout() {
        setWorkouts(prev => [...prev, {value, distance, duration, date}])
        setDistance('')
        setDuration('')
    }
    
    function checkDistance() {
        if (distance < 0) {
          Alert.alert('Alert','Distance cannot be smaller than zero.');
          setDistance('')
        }
      }

    function checkDuration() {
        if (duration < 0) {
          Alert.alert('Alert','Duration cannot be smaller than zero.');
          setDuration('')
        }
      }

    return (
        <View style={Style.containers}>
            <Text variant="headlineMedium" style={Style.header}>Add workout</Text>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                {
                    value: 'Run',
                    label: 'Run',
                    icon: props => <MaterialIcons name="directions-run" {...props}
                    />
                },
                { 
                    value: 'Swim', 
                    label: 'Swim',
                    icon: props => <MaterialCommunityIcons name="swim" {...props} />
                },
                {
                    value: 'Hike',
                    label: 'Hike',
                    icon: props => <MaterialCommunityIcons name="hiking" {...props} />
                }
                ]}
            />

            <TextInput 
                style={Style.textInput}
                mode="outlined"
                label=
                {lengthUnit === 'km' 
                ? 'Distance (km)'
                : 'Distance (miles)'}
                placeholder="Add distance"
                value={distance}
                onChangeText={setDistance}
                onBlur={checkDistance}
                keyboardType = 'numeric' />
            <TextInput
                style={Style.textInput}
                mode="outlined"
                label="Duration (min)"
                placeholder="Add duration"
                value={duration}
                onChangeText={setDuration}
                onBlur={checkDuration}
                keyboardType = 'numeric' />

            <Modal 
                visible={visible} 
                transparent={false}
                onRequestClose={()=>setVisible(!modalVisible)}>
                <Calendar theme={{todayTextColor: '#c53ba7', textSectionTitleColor:'#c53ba7', arrowColor:'#c53ba7' }} onDayPress={dateSelected} />
                <View>
                    <Button icon={'close'} onPress={() => setVisible(false)}>Close</Button>
                </View>
            </Modal>
            <Button icon='calendar' style={Style.dateButton} mode="contained" onPress={()=> setVisible(true)}>{date ? date.day + '.' + date.month + '.' + date.year : 'Select date'}</Button>

            <Button style={Style.addButton} mode="contained-tonal" onPress={addWorkout}>Add workout</Button>
        </View>
    )
}