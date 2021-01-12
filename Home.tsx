import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Card, Button } from 'react-native-paper';

import Item from './Item.tsx'
import data from './mockData.js';

const Home = () => (
    <View style={styles.container}>

        <View style={styles.homeTop}>
            <Image style={styles.homeTopImage} source={require('./assets/card.png')}/>
            <View style={styles.homeTopTextView}>
                <Text style={styles.homeTopText}>Hi Juan</Text>
                <Text style={styles.homeTopText}>You have a pending total of</Text>
                <Text style={styles.homeTopOutstanding}>$ 12360</Text>
            </View>

        </View>
        <View style={styles.homeBottom}>
            <Card style={styles.homeBottomTop}>
                <Text></Text>
            </Card>
            <Card style={styles.homeBottomGenerate}>
                <Text style={styles.homeBottomText}>Generate your account billing statement</Text>
                <Button>Cancel</Button>
                    <Button>Ok</Button>
            </Card>
            <Card style={styles.mostRecentTransaction}>
                <Text style={styles.homeBottomText}>Most recent transaccion</Text>
                
            </Card>

        </View>
    </View>
)

export default Home;


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#D0D0D0',
        fontFamily:'serif'
    },
    homeTop: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#0A141B',
        padding: 8,
        flexDirection:'row'
    },
    homeTopTextView:{
        marginLeft: 30,
        marginTop: 30
    },
    homeTopText:{
        color: "#CFD8DA",      
        fontSize: 15
    },
    homeTopOutstanding:{
        color: '#0065BD',
        fontSize: 25,
        fontFamily:'serif',
        fontWeight: 'bold',
        marginTop: 20
    },
    homeTopImage: {
        marginTop: 30
    },
    homeBottom: {
        flex: 2
       
        
    },
    homeBottomTop: {
        flex: 1,
    },
    homeBottomGenerate: {
        flex: 1,
        marginTop: 8
    },
    mostRecentTransaction: {
        flex: 1,
        marginTop: 8,
    },
    homeBottomText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10

    }
});