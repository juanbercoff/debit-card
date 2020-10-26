import React, { createRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';



export default class SearchBar extends React.Component {


    render() {
        return (
            <View style={styles.mainView}>
                <TextInput 
                    autoFocus={true} 
                    dense='true' 
                    onBlur={this.props.handleBlur} 
                    onChangeText={this.props.handleTextChange} 
                    style={styles.searchBar}/>
                <IconButton icon='magnify' onPress={() => this.props.handleSearch}/>
            </View>

        )
    }
}
    

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-end',
    },
    searchBar: {
        
        width: '100%'
    }
});
    
        
    

    

     
