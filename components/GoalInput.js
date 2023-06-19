import { useState } from "react";
import{ View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
//import { Colors } from "react-native/Libraries/NewAppScreen";

function GoalInput(props){
	const[enteredGoalText, setEnteredGoalText]=useState('');

	function goalInputHandler(enteredText){
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler(){
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return(
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
					<Image
						style={styles.image}
						source={require('../assets/Images/goal.png')}/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" color={"#AC58FA"} onPress={addGoalHandler}/>
					</View>
					<View style={styles.button}>
						<Button title="Cancel" color={"#AC58FA"} onPress={props.onCancel}/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		//paddingRight:10,
		//addingLeft:10,
		padding:16,
		backgroundColor:'#D0A9F5',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	image:{
		width:200,
		height:200,
		margin:20,
	},
	textInput: {
		borderWidth: 2,
		borderColor: '#AC58FA',
		backgroundColor:'#ffffff',
		borderRadius: 10,
		width: '70%',
		//marginRight: 8,
		padding: 8,
	},
	buttonContainer:{
		flexDirection:"row",
	},
	button:{
		marginHorizontal:8,
		marginTop:15,
		width:'32%'
	}
});