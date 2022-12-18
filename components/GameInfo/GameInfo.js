import React from 'react';
import LeftCounter from './LeftCounter/LeftCounter';
import { View, StyleSheet, ScrollView } from 'react-native';



const GameInfo = () => {
  return (
    <ScrollView>
        <View style={styles.content}>
        <View><LeftCounter /></View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
      flex: 1,
      flexDirection: 'column',
    }
})

export default GameInfo