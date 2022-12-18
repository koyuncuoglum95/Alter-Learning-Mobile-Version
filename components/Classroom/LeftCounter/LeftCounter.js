import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';


const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

        {/* 1 */}
        <View style={styles.InnerContainer}>
            <View>
                <Title style={styles.Header}>ALTER LEARNING CONNECT </Title>
                <View>
                    <Image style={{height: '130%', width: '130%', marginLeft: -40}} resizeMode="contain" source={require("../../../assets/v443_23035.png")}/>
                </View>
            </View>
        </View>

        {/* 2 */}
        <View>
            <Card style={styles.CardBody1}>
                <Title style={styles.Header}>MY SCHOOL</Title>
                        <View>
                            <Card.Cover resizeMode="contain" source={require("../../../assets/widget2.jpeg")}/>
                        </View>
                        <View>
                            <View>
                                <Title></Title>
                                <Title></Title>
                            </View>
                        </View>
            </Card>
        </View>

        {/* 3 */}
        <View >
            <Card style={styles.CardBody2}>
                <Title style={styles.Header}>CLASSROOMS</Title>
                <View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
            </Card>
        </View>

        {/* 4 */}
        <View >
            <Card style={{marginTop: '5%',  marginHorizontal: 15}}>
                <Title style={styles.Header}>CREATE CLASSROOM</Title>
                <View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
            </Card>
        </View>
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
        marginTop: 30
      },
      ListGroup: {
        flex: 1,
        justifyContent: "flex-start",
      },
      CardBody1: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: '55%',
        marginHorizontal: 15,
      },
      CardBody2: {
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
        marginHorizontal: 15,
        marginTop: '-40%'
      },
      Header: {
        fontWeight: "bold",
        marginVertical: 15,
        textAlign: 'center'
      }
    
})

export default LeftCounter