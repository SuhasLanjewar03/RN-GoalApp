import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
	ImageBackground,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
//const image = {uri: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600'};

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
    }
  
    function addGoalHandler() {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
		{
            text: enteredGoalText, id: Math.random().toString()
        },
      ]);
    }

    return (
		
		    <View style={styles.appContainer}>
				
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return <GoalItem text={itemData.item.text}/>;
						} }
						keyExtractor={(item, index) => {
							return item.id;
						} }
						alwaysBounceVertical={false} />
				</View>
			</View>
    );
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingHorizontal: 16,
		
	  },

	  goalsContainer: {
		flex: 5,
	  },
	  

});
