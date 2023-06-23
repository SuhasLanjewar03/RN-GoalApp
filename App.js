import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
    Pressable,
    ImageBackground,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {
                text: enteredGoalText, id: Math.random().toString()
            },
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <ImageBackground
            source={require('./assets/Images/bgtodo.jpg')}
            resizeMode='cover'
            style={styles.mainBg}
            imageStyle={styles.backgroundImage}>

            <View style={styles.appContainer}>
                <Pressable onPress={startAddGoalHandler} style={styles.mainBtn}>
                    <Text style={styles.mainTxt}>+ Add New Goal</Text>
                    {modalIsVisible &&
                        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
                </Pressable>


                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (<GoalItem text={itemData.item.text}
                                              id={itemData.item.id}
                                              onDeleteItem={deleteGoalHandler}/>);
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}/>
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 33,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    goalsContainer: {
        flex: 5,
        paddingTop: 20,
    },

    mainBtn: {
        backgroundColor: '#AC58FA',
        padding: 10,
        borderRadius: 80,
        alignItems: 'center',
        width: '100%'
    },

    mainTxt: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    mainBg: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.45,
    },

});
