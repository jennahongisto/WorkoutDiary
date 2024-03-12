import { FlatList, ScrollView, View } from "react-native";
import { Divider, Text, Card } from "react-native-paper";
import { SettingsContext, WorkoutContext } from "../components/Contexts";
import { useContext } from "react";
import { Style } from "../styles/Style";

export default function ListofWorkOuts() {

    const {workouts} = useContext(WorkoutContext)
    

    return (
        <View style={Style.containers}>
            <Text variant="headlineMedium" style={Style.header}>List of workouts</Text>
            <View style={Style.listContainer}>
            <FlatList
                style={Style.list}
                data={workouts}
                renderItem={({item}) => <Item workout={item}/>}
            />
            </View>
        </View>
    )
}

function Item({workout}) {
    const {lengthUnit} = useContext(SettingsContext)

    let d = workout.date.day + '.' + workout.date.month + '.' + workout.date.year
    let unit = lengthUnit === 'km' 
    ? 'km'
    : 'miles'
    let distance = changeDistance(workout.distance, 'km', lengthUnit)
   
    function changeDistance(distance) {
        if (lengthUnit === 'miles') {
            return distance * 0.6;
        } else {
            return distance;
        }
    }

    return (
        <View>
            <Text variant="titleMedium">{workout.value}</Text>
            <Text>{d}</Text>
            <Text>Distance: {distance} {unit} </Text>
            <Text>Duration: {workout.duration} min</Text>
            <Divider bold={true} style={Style.divider} />
        </View>
    )
}


