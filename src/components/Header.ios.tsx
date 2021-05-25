import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Switch, SafeAreaView } from 'react-native';

interface ModeProps {
  mode: boolean
  setMode: (mode: boolean) => void;
}

export function Header({ mode, setMode }: ModeProps) {
  return (
    <SafeAreaView style={mode === false ? styles.container : [styles.container, { backgroundColor: '#483C67' }]}>
      <View style={mode === false ? styles.header : [styles.header, { backgroundColor: '#483C67' }]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        <Switch
        thumbColor="#fff"
        style={styles.switch}
        value={mode}
        onValueChange={() => setMode(!mode)}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switch: {
    position: 'absolute',
    right: 40,
    top: 0,
  }
});
