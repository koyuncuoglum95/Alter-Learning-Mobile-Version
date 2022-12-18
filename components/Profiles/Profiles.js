import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeftCounter from './LeftCounter/LeftCounter'
import RightCounter from './RightCounter/RightCounter'


const Profiles = () => {
  return (
    <ScrollView>
        <View style={styles.Content}>
            <View><LeftCounter /></View>
            <View><RightCounter /></View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Content: {
    
  }
})

export default Profiles
