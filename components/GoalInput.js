import { useState } from "react";
import{ View, TextInput, Button, StyleSheet,} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    <View style={styles.inputContainer}>
		<TextInput
			style={styles.textInput}
			placeholder="Your course goal!"
			onChangeText={goalInputHandler} />
			<Button style={{backgroundColor:'purple'}} title="Add Goal" onPress={props.onAddGoal} 
        />
	</View>
);
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
		flex: 1,
		paddingRight:10,
		paddingLeft:10,
		backgroundColor:'#cccccc',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop:20,
		marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#000000',
	  },
	  textInput: {
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor:'#ffffff',
		borderRadius: 10,
		width: '70%',
		marginRight: 8,
		padding: 8,
	  },
});