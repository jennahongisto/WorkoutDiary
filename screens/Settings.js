import { useContext, useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { SettingsContext } from "../components/Contexts";
import { Style } from "../styles/Style";


export default function Settings() {

    const {lengthUnit, setLengthUnit} = useContext(SettingsContext)
    const [checked, setChecked] = useState('km');

    const handleUnitChange = (unit) => {
        setChecked(unit)
        setLengthUnit(unit);
    }

    return(
        <View style={Style.containers}>
            <Text variant="headlineMedium" style={Style.header}>Settings</Text>
            <View style={Style.settingsContainer}>
                <Text variant="headlineSmall" style={Style.settingsLabel}>Units</Text>
                <Text>Kilometers</Text>
                <RadioButton
                       label="Kilometers"
                       value="km"
                       checked={lengthUnit === 'km'}
                       status={ checked === 'km' ? 'checked' : 'unchecked' }
                       onPress={() => handleUnitChange('km')}/>
                <Text>Miles</Text>
                <RadioButton
                      label="Miles"
                      value="miles"
                      selected={lengthUnit === 'miles'}
                      status={ checked === 'miles' ? 'checked' : 'unchecked' }
                      onPress={() => handleUnitChange('miles')}
                     />
            </View>
        </View>
    )
}