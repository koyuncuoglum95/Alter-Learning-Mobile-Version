import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import LeftCounter from './LeftCounter/LeftCounter';
import RightCounter from './RightCounter/RightCounter';

import Menu from '../Menu/Menu'


const Home = () => {
  return (
    <ScrollView>
      <View style={styles.menuContainer}>
        <Menu/>
      </View>
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

export default Home