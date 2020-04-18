import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [val, setVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleChange = input => {
    setVal(input);
    //console.log(val);
    //setTodoList(...todoList, val);
    // console.log(todoList);
  };
  const addTodo = () => {
    setTodoList(todo => [...todo, val]);
    setVal("");
    //console.log(todoList);
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.search}>
          <TextInput
            placeholder="Enter something"
            style={styles.input}
            onChangeText={handleChange}
            value={val}
          />
          <Button title="search" onPress={addTodo} />
        </View>
        {/* <View>
        <Text style={styles.todo}>Web dev</Text>
        <Text>soft dev</Text>
      </View> */}
        <View>
          {todoList.map(item => (
            <Text key={item} style={styles.todo}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  search: {
    margin: 30
  },
  input: {
    borderBottomColor: "black",
    fontSize: 20,
    borderBottomWidth: 1
  },
  todo: {
    paddingTop: 20,
    margin: 30,
    borderBottomWidth: 2
  }
});
