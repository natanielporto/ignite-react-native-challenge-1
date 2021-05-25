import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';



interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  mode: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

function setButton (item, mode) {
  if (!mode) {
    return item.done ? styles.taskMarkerDone : styles.taskMarker
  }

  return item.done ? [styles.taskMarkerDone, {backgroundColor: '#FF79C6'}] : [styles.taskMarker, {borderColor: '#FF79C6'}]
}

function setBackground (item, mode) {
  if (!mode) {
    return item.done ? styles.taskButtonDone : styles.taskButton
  }

  return item.done ? [styles.taskButtonDone, {backgroundColor: 'transparent'}] : [styles.taskButton, , {backgroundColor: 'transparent'}]
}

function setText (item, mode) {
  if (!mode) {
    return item.done ? styles.taskTextDone : styles.taskText
  }

  return item.done ? [styles.taskTextDone, {color: 'gray', backgroundColor: 'rgba(25, 61, 223, 0.1)'}] : [styles.taskText, {color: '#FF79C6'}]
}

export function MyTasksList({ tasks, onLongPress, onPress, mode }: MyTasksListProps) {

  function FlatListHeaderComponent() {
    return (
      <View>
        <Text style={mode === true ? [styles.header, {color: '#FF79C6'}] : styles.header }>Minhas tasks</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)} 
            onLongPress={() => onLongPress(item.id)} 
            style={setBackground(item, mode)}
            >
            <View 
              testID={`marker-${index}`}
              style={setButton(item, mode)}
              />
            <Text 
              style={setText(item, mode)}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})
