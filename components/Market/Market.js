import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeftCounter from './LeftCounter/LeftCounter'
import RightCounter from './RightCounter/RightCounter'

const Market = () => {
  return (
    <ScrollView style={styles.MarketContainer}>
        <View style={styles.Content}>
            <View><LeftCounter/></View>
            <View><RightCounter/></View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 20
  }
})

export default Market
