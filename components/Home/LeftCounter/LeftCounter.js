import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { Card, Title } from 'react-native-paper';


const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

        <View style={styles.InnerContainer}>
            <Title>Alter Learning Connect</Title>
        </View>

        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>FEATURED VIDEO</Title>
                <Card.Cover source={require("../../../assets/widget2.jpeg")}/>
            </Card>
        </View>

        <View>
                
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>FEATURED VIDEO</Title>
                <Card.Cover source={require("../../../assets/widget2.jpeg")}/>
            </Card>
        </View>

        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>SPONSERED EVENTS</Title>
            </Card>
        </View>

        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>RECENT POST</Title>
            </Card>
        </View>


        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>RECENT BLOGS</Title>
            </Card>
        </View>

        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>RECENT WIRES</Title>
            </Card>
        </View>


        <View>
            <Card style={styles.CardBody}>
                <Title style={styles.Header}>RECENT POSTS</Title>
            </Card>
        </View>
    
    </View>
  )
}

export default LeftCounter

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
      CardBody: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
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
        marginVertical: 10,
        textAlign: "center",

      }
})