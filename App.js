import { StatusBar } from "expo-status-bar";
import React,{useState} from 'react';

import { StyleSheet, Text, View ,KeyboardAvoidingView ,TextInput,TouchableOpacity} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
 
import Task from "./components/Task";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask=()=>{
    // Keybord.dismiss();
    setTaskItems([...taskItems,task])
    // console.log(task)
    setTask(null)
  }
  const completeTask=(i)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(i,1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* Todays task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle} >Pankaj's Task</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return   (
               <TouchableOpacity  key={index} onPress={
                 ()=>{
                   completeTask(index)
                 }
               }>
                  <Task  text={item}/>
               </TouchableOpacity>
              )
            })
          }
         
            
        </View>
      </View>

      {/* write a task */}
      <KeyboardAvoidingView  behavior={Platform.OS==='ios'?'padding':'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task}  onChangeText={(e)=>{
     
          setTask(e)
        }
          }/>
          
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text> 
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold"
  },
  items:{
    marginTop:30
  }
  ,writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center'
  },
  input:{
    paddingVertical:15,
    width:'70%',
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1

  },
  addWrapper:{
    // flex:1,
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'

  },
  addText:{
    
  },



});
