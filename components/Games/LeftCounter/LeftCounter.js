import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {  Title, } from 'react-native-paper';
import GamesItem from '../GamesItem/GamesItem';


const LeftCounter = ({ games }) => {

  return (
    <View style={styles.MainContainer}>
                {/* 1 */}
                <View style={styles.InnerContainer}>
                    <View>
                        <Title style={styles.Header}>ALTER LEARNING CONNECT </Title>
                        <View>
                            <Image style={{width: "100%", height: 200, aspectRatio: 1}} source={require("../../../assets/widget2.jpeg")}/>
                        </View>
                    </View>
                </View>


                {/* 2 */}
                {
                games.map((game, index) => (
                <View key={index}>
                  <GamesItem title={game.title} image={game.img_url} game_link={game.iframe_angle_link}/>
                </View>
                ))}
            </View>
  )
}

const styles = StyleSheet.create({
    MainContainer:{
        marginVertical: 20
      },
      InnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
      },
      ImageContainer:{
        width: "100%",
        height: "undefined",
        aspectRatio: 1
      },
      ListGroup: {
        flex: 1,
        justifyContent: "flex-start",
      },
      CardBody: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
        marginHorizontal: 15
      },
      Header: {
        fontWeight: "bold",
        marginVertical: 10
      }
    
})

export default LeftCounter