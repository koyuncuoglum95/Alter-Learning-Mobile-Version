import React from 'react';
import LeftCounter from './LeftCounter/LeftCounter';
import RightCounter from './RightCounter/RightCounter';
import { View, StyleSheet, ScrollView } from 'react-native';



const Classroom = () => {
  return (
    <ScrollView>
        <View style={styles.content}>
            <View>
              <LeftCounter />
              <RightCounter />
            </View>
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

export default Classroom