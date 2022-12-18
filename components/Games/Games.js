import React from "react";
import { gameData } from '../../data/game_data';
import LeftCounter from "./LeftCounter/LeftCounter";
import RightCounter from "./RightCounter/RightCounter";

import { View, StyleSheet, ScrollView } from "react-native";

const Games = () => {
  return (
      <ScrollView>
      <View style={styles.content}>
        <View>
          <LeftCounter games={gameData}/>
        </View>
        <View>
          <RightCounter />
        </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 0,
  },
});

export default Games;
