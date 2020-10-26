import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { format, subMonths, addMonths } from 'date-fns';



const MonthPicker = function ({ date, onChange }) {
    const handlePrev = () => {
        const newDate = subMonths(date, 1)
        onChange(newDate)
    }

    const handleNext = () => {
        const newDate = addMonths(date, 1)
        onChange(newDate)
    }
    return (
        <View style={styles.row}>
            <IconButton icon='arrow-left' onPress={handlePrev}/>
            <Text>{format(date, 'MMMM')}</Text>
            <IconButton icon='arrow-right' onPress={handleNext}/>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor: '#eee',
        paddingVertical: 5
    }
})

export default MonthPicker;