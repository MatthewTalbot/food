import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
	const id = navigation.getParam('id');
	const [result, setResult] = useState(null);
	
	const getResult = async (id) => {
		const response = await yelp.get(`${id}`);
		setResult(response.data)
	}
	
	useEffect(() => {
		getResult(id)
	}, [])
	if (!result) {
		return null
	}
	return (
		<View>
			<Text>Results Show</Text>
			<FlatList 
				data = {result.photos}
				keyExtractor = {(photo) => photo}
				renderItem = { ({item}) => {
					return (
						<Image 
							style = {styles.Image}
							source = {{uri: item}}
						/>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	Image: {
		height: 200,
		width: 300
	}
});

export default ResultsShowScreen;