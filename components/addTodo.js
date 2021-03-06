import React, {useState} from "react";
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';


export default function AddTodo({submitHandler}) {
    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    } 

    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='Add new task...'
            value={text}     //used for capturing the text
            onChangeText={changeHandler}
            />
             <Button onPress={() => {
                submitHandler(text);
                setText('');       //it will empty the textinput field after pressing the add/submit button
                }} title='add To DO' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
     marginBottom: 10,
     paddingHorizontal: 8,
     paddingVertical: 6,
     borderBottomWidth: 1,
     borderBottomColor: '#ddd'
    }
})