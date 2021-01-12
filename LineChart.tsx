import { LineChart } from "react-native-chart-kit";
import React from 'react';
import { Dimensions } from 'react-native';

const m_names = ['January', 'February', 'March', 
'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];


const ExpensesLineChart = ({res}) => (
    <LineChart
        data={{
            labels: Object.keys(res).map(m => m_names[m]),
            datasets: [
                {
                data: Object.values(res)
                }
            ]
            }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        yAxisInterval={1}
        chartConfig={{
        backgroundColor: "#e26a01",
        backgroundGradientFrom: "#D0D0D0",
        backgroundGradientTo: "#D0D0D0",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: "#0065BD"
        }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16
        }}
    />
)

export default ExpensesLineChart
