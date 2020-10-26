import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import data from './mockData.js';
import { List, Appbar, Divider, TextInput } from 'react-native-paper';

const icons = {
    entertainment: 'movie',
    food: 'food',
    retail: 'shopping',
    services:'polymer'
}

const Item = ({value}) => (
    <List.Item
        title={value.title}
        description={value.date.toDateString()}
        left={props => <List.Icon icon={icons[value.category]} />}
        right={props => (
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.ammount}>${value.ammount}</Text>
                <View style={{flexDirection: 'row-reverse'}}>               
                    <Text style={styles.prize} >{Math.round(((value.ammount * 0.02)+ Number.EPSILON) * 100) / 100}</Text>
                    <Image style={styles.coin} source={require('./assets/coin.png')}/>
                </View>
            </View>           
            )}
    />
)

export default Item

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    ammount: {
        marginTop: 10,
        fontSize: 17
    },
    prize: {
        fontSize: 12,
        color: 'green',
        borderColor: '#50a26d'
    },
    coin: {
        width: 11,
        height: 11,
        marginRight: 2,
        marginTop: 2
      

    },
    top: {
        flex: 1   
    },
    bottom: {
        flex: 2
    },
    totalMonthExpenditureText: {
        fontSize: 20,
        textAlign: 'center'
    },
    totalMonthExpenditureValue: {
        fontSize: 30,
        textAlign: 'center'
    },
    month: {
        textAlign: 'center',
        fontSize: 20  
	}
});