import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import data from './mockData.js';
import { List, Appbar, Divider, TextInput } from 'react-native-paper';
import MonthPicker from './MonthPicker';
import SearchBar from './SearchBar.tsx';
import Item from './Item.tsx';
import ExpensesLineChart from './LineChart.tsx'




const m_names = ['January', 'February', 'March', 
'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];



export default class Expenses extends React.Component { 
	state = {
        data: data,
		date: new Date(),
		textInputOn: false,
		textInput: null
	}

    _handleSearch = ({prevState}) => this.setState({ textInputOn: !prevState})
    thisMonthExpenses = (data: any) => data.filter(e => e.date.getMonth() == this.state.date.getMonth())
	totalMonthlyExpenditure = (data: any) => this.thisMonthExpenses(data).map(el => el.ammount).reduce((a, b) => a + b, 0)
	handleBlur = () => this.setState({ textInputOn: false})
    handleChangeText = (value) => this.setState({ textInput: value})
    handleSearch = (data: any) => {
        data.filter(e => e.title.includes(this.state.textInput))
	}
	

	monthLineChart = (data: any) => {
		const res = {}

		data.forEach(element => {
			if(!(element.date.getMonth() in res)) {
                res[element.date.getMonth()] = element.ammount
			} else {
                res[element.date.getMonth()] += element.ammount
            }
			
		});
		console.log(res)
		
        return res

	}
    
	setDate = (value: any) => {
		this.setState({
			date: value
		})
	}

	render() {
		return (
			<KeyboardAvoidingView enabled= {false} style={styles.container}>
				<Appbar.Header>
					<Appbar.Content title="Expenses" />
					{this.state.textInputOn ? 
					<SearchBar syle={styles.searchBar} handleBlur={this.handleBlur} handleTextChange={this.handleChangeText} handleSearch={this.handleSearch(this.state.data)}/> : 
					<Appbar.Action icon="magnify" onPress={this._handleSearch} />}
				</Appbar.Header>
				<View style={styles.top}>
					<Text style={styles.totalMonthExpenditureText}>Expenses for {m_names[this.state.date.getMonth()]}</Text>
					<Text style={styles.totalMonthExpenditureValue}>${this.totalMonthlyExpenditure(data)}</Text>
					<ExpensesLineChart res={this.monthLineChart(data)}/>
					
					
				</View>
				<Divider />
				<KeyboardAvoidingView enabled= {false} style={styles.bottom}>
					<List.Section style={styles.container}>               
						<FlatList 
							ListHeaderComponent={
								<MonthPicker 
								date={this.state.date}
								onChange={newDate => this.setDate(newDate)}
								/>}
							data={this.thisMonthExpenses(data)}
							renderItem={({ item }) => (
							<View>
								<Item value={item}/>
							</View>
						)}
						keyExtractor={data.id}
						/>            
					</List.Section>
				</KeyboardAvoidingView>
	
			</KeyboardAvoidingView>   
		)
	}

    
}

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
        borderColor: '#50a26d',
        borderBottomColor: "red",
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    coin: {
        width: 11,
        height: 11,
        marginRight: 2,
        marginTop: 2
      

    },
    top: {
        flex: 2  
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