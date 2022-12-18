import React from 'react';

import LeftCounter from './LeftCounter/LeftCounter';
import RightCounter from './RightCounter/RightCounter';

import { View, StyleSheet, ScrollView } from 'react-native';


const Account = () => {
  return (
    <ScrollView>
        <View style={styles.content}>
            <View><LeftCounter /></View>
            <View><RightCounter /></View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
})

export default Account