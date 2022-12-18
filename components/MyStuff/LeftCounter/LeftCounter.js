import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card, Title } from 'react-native-paper';

const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

      <View style={styles.InnerContainer}>
          <View>
              <Title style={styles.Header}>ALTER LEARNING CONNECT </Title>
              <View>
                  <Image style={{width: "100%", height: 200}} source={require("../../../assets/v443_23035.png")}/>
              </View>
              <View style={styles.ListGroup}>
                <Text></Text>
                <Text></Text>
              </View>
          </View>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY BOOKMARKS</Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY PICTURES</Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY VIDEOS</Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY BLOGS </Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY WIRES </Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY COMMENTS </Text>
          <View></View>
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
    marginVertical: 10
  },
  ImageContainer:{
    width: "100%",
    height: "undefined",
    aspectRatio: 1
  },
  ListGroup: {
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