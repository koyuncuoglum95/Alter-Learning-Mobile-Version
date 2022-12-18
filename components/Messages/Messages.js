import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeftCounter from './LeftCounter/LeftCounter'
import RightCounter from './RightCounter/RightCounter'

const Messages = () => {
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
    Content: {
    }
  }
})

export default Messages
