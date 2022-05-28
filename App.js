import React, {useState} from "react";
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
// import { v4 as uuidv4 } from 'uuid';
//uuidv4 used for creating unique keys for newly added to do item


export default function App() {
 const [todos,setTodos] = useState([
   {text: 'buy coffee ☕', key: '1'},
   {text: 'Shopping 🛍️', key: '2'},
   {text: 'watch anime ✨',  key: '3'},
 ]);

 const pressHandler = (key) => {
   setTodos( (prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
   }); 
 }

 const submitHandler = (text) => {
   if(text.length >3){
     setTodos( (prevTodos) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
   }else {
    Alert.alert('OOPS!','ToDo must be over 3 chars long',[
      {text: 'OK', onPress: () =>  console.log('alert closed')}
    ]);
   }   
 }



  return (
    <TouchableWithoutFeedback onPress={() => {
     Keyboard.dismiss();
    } 
    }>
    <View style={styles.container}>
      <Header />
      <View  style={styles.content}>
         <AddTodo submitHandler={submitHandler}/>
         <View style={styles.list}>
         <FlatList 
           data={todos}
           renderItem = { ({ item }) => (
            <TodoItem item ={item} pressHandler = {pressHandler}/>
           )}
        />
      </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});


