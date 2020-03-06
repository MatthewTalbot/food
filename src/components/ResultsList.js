import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from '../components/ResultsDetail'

const ResultsList = ({title, results, navigation}) => {
	return (
		<View style = {styles.container}>
			<Text style = {styles.titleStyle}>
				{title}
			</Text>
			<FlatList 
				horizontal = {true}
				showsHorizontalScrollIndicator = {false}
				data = {results}
				keyExtractor = {(results) => results.id}
				renderItem = {({ item }) => {
					return (
					<TouchableOpacity
						onPress = {() => navigation.navigate('ResultsShow')}
					>
						<ResultsDetail results = {item}/>
					</TouchableOpacity>
					)}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		marginBottom: 10
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	}
});

export default ResultsList;