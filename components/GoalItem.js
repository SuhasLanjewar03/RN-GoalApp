import {
	StyleSheet,
	View,
	Text,
	Pressable,
} from "react-native";

function GoalItem(props){
	return(
		<View style={styles.goalItem}>
			<Pressable android_ripple={{color:'lightyellow'}}
					   onPress={props.onDeleteItem.bind(this, props.id )}
					   style={({pressed})=>pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles=StyleSheet.create({
	goalItem:{
		margin: 5,
		padding:10,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		width:300,
	},
	goalText:{
		color:'black',
		textAlign:'center',
	},
});